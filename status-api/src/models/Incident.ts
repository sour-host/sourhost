import mongoose from 'mongoose';

const IncidentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ['investigating', 'identified', 'monitoring', 'resolved'],
    default: 'investigating'
  },
  severity: {
    type: String,
    enum: ['critical', 'major', 'minor'],
    required: true
  },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  updates: [{
    timestamp: { type: Date, default: Date.now },
    status: String,
    message: String
  }]
}, {
  timestamps: true
});

export const Incident = mongoose.model('Incident', IncidentSchema);