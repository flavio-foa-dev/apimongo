import mongoose from 'mongoose';

const custumerSchema = new mongoose.Schema(
  {
    id: { type: String},
    name: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true},
    type: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
      required: [true, 'E preciso um Representante']
    },
    year: { type: Number, required: true},
    status:{type: String, required: true},
    date: { type: Date, required: true},
  }
);

const ModelCustumer = mongoose.model('Custumer', custumerSchema);

export default ModelCustumer;