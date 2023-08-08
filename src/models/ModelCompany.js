import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    id: { type: String},
    name: {
      type: String,
      required: [true, 'O NOME e requerido']
    },
    cnpj: {
      type: String,
      required: [true, 'O CNPJ e requerido'],
      unique: true
    },
    type: {
      type: String,
      required: [true, 'O TIPO e requerido'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
      required: [true, 'E preciso um Representante']
    },
    year: {
      type: Number,
      min:[0, 'idade da empresa deve esta entre 0 a 60 anos. o valor fornecido {VALUE}'],
      max:[60, 'idade da empresa deve esta entre 0 a 60 anos. o valor fornecido {VALUE}'],
      required: [true, 'A idade da empresa e requerido'],
    },
    status:{
      type: String,
      required: true},

    date: { type: Date, required: true},
  }
);

const Modelcompany = mongoose.model('company', companySchema);

export default Modelcompany;