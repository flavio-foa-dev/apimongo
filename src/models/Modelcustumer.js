import mongoose from "mongoose"

const custumerSchema = new mongoose.Schema(
  {
    id: { type: String},
    name: { type: String, required: true },
    cnpj: { type: String, required: true, unique: true},
    type: { type: String, required: true },
    id_responsavel: { type: Number, required: true},
    year: { type: Number, required: true},
    status:{type: String, required: true},
    date: { type: Date, required: true},
  }
)

const Modelcustumer = mongoose.model('custumer', custumerSchema)

export default Modelcustumer