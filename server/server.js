import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { portfolioData } from './data/portfolioData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aditya_portfolio';

// Middlewares
app.use(cors());
app.use(express.json());

// In-memory messages fallback
const fallbackMessages = [];
let isMongoConnected = false;

// Mongoose Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, default: 'Portfolio Contact' },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Try MongoDB Connection
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 2000
}).then(() => {
  isMongoConnected = true;
  console.log('✅ Connected to MongoDB successfully.');
}).catch((err) => {
  isMongoConnected = false;
  console.log('ℹ️ MongoDB not available locally or timed out. Operating in memory-backed mode.');
});

// REST API Endpoints

// 1. Health & Status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    database: isMongoConnected ? 'MongoDB (Connected)' : 'In-Memory (Active Fallback)',
    timestamp: new Date().toISOString()
  });
});

// 2. Personal Profile & Hero Data
app.get('/api/profile', (req, res) => {
  res.json(portfolioData.personal);
});

// 3. Experience Details
app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience);
});

// 4. Projects (All or filtered)
app.get('/api/projects', (req, res) => {
  const { category, featured } = req.query;
  let result = [...portfolioData.projects];

  if (category) {
    result = result.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (featured === 'true') {
    result = result.filter(p => p.featured === true);
  }

  res.json(result);
});

// 5. Individual Project Details
app.get('/api/projects/:id', (req, res) => {
  const project = portfolioData.projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

// 6. Skills Matrix
app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

// 7. Education & Leadership
app.get('/api/education', (req, res) => {
  res.json(portfolioData.education);
});

// 8. Licenses & Certifications
app.get('/api/certifications', (req, res) => {
  res.json(portfolioData.certifications);
});

// 9. Contact Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.'
      });
    }

    const newRecord = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date()
    };

    if (isMongoConnected) {
      const savedDoc = await Message.create(newRecord);
      return res.status(201).json({
        success: true,
        message: 'Message received and stored in MongoDB successfully!',
        data: savedDoc
      });
    } else {
      fallbackMessages.unshift({ id: `msg_${Date.now()}`, ...newRecord });
      return res.status(201).json({
        success: true,
        message: 'Message received and recorded successfully! Aditya will respond shortly.',
        data: newRecord
      });
    }
  } catch (error) {
    console.error('Contact endpoint error:', error);
    res.status(500).json({ success: false, error: 'Internal server error while processing message.' });
  }
});

// 10. View Contact Messages
app.get('/api/contact/messages', async (req, res) => {
  try {
    if (isMongoConnected) {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json(messages);
    }
    res.json(fallbackMessages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running at http://localhost:${PORT}`);
});
