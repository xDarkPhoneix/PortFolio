import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuer: { type: String, required: true },
  year: { type: String, required: true },
  icon: { type: String, required: true }
}, { timestamps: true });

CertificateSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: Record<string, any>) {
    delete ret._id;
  }
});

export default mongoose.models.Certificate || mongoose.model('Certificate', CertificateSchema);
