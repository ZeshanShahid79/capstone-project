import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    restaurant: mongoose.SchemaTypes.String,
    address: mongoose.SchemaTypes.String,
    description: mongoose.SchemaTypes.String,
    url: mongoose.SchemaTypes.String,
    categories: mongoose.SchemaTypes.Array,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Entry', schema);
