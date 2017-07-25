import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: String,
  active: Boolean,
});

export default mongoose.model('Category', CategorySchema);
