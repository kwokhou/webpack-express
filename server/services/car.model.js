import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  name: String,
  year: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }
});

export default mongoose.model('Car', CarSchema);

