import mongoose, { Document, Model } from 'mongoose';

export interface IExperience extends Document {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  color: string;
}

const ExperienceSchema = new mongoose.Schema<IExperience>({
  company: { type: String, required: true },
  role: { type: String, required: true },
  period: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  achievements: { type: [String], default: [] },
  technologies: { type: [String], default: [] },
  logo: { type: String, default: '🚀' },
  color: { type: String, default: 'from-blue-500 to-purple-600' }
}, { timestamps: true });

ExperienceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: Record<string, any>) {
    delete ret._id;
  }
});

export const Experience: Model<IExperience> = mongoose.models.Experience || mongoose.model<IExperience>('Experience', ExperienceSchema);
