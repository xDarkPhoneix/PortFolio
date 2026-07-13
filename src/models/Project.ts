import mongoose, { Document, Model } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
  featured: boolean;
  stats?: {
    stars?: number;
    users?: string;
    awards?: string;
  };
}

const ProjectSchema = new mongoose.Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  image: { type: String, required: true },
  technologies: { type: [String], default: [] },
  github: { type: String, default: '' },
  live: { type: String, default: '' },
  category: { type: String, required: true },
  featured: { type: Boolean, default: false },
  stats: {
    stars: { type: Number },
    users: { type: String },
    awards: { type: String }
  }
}, { timestamps: true });

// Optimize return objects
ProjectSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

export const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
