import mongoose from 'mongoose';

const HackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  event: { type: String, required: true },
  date: { type: String, required: true },
  position: { type: String, required: true },
  prize: { type: String, required: true },
  participants: { type: Number, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  project: { type: String, required: true },
  technologies: { type: [String], required: true },
  achievements: { type: [String], required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
}, { timestamps: true });

HackathonSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

export default mongoose.models.Hackathon || mongoose.model('Hackathon', HackathonSchema);
