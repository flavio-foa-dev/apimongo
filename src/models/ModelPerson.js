import mongoose from 'mongoose';

const personSchema = new mongoose.Schema(
  {
    id: {type: 'string'},
    name: {
      type: 'string',
      required: [true, 'O Nome e requerido']
    },
    email: {
      type: 'string',
      required: [true, 'O Email e requerido']
    },
    cpf: {
      type: 'string',
      required: [true, 'O CPF e requerido']
    },
    password: {
      type: 'string',
      required: [true, 'A senha e requerido']
    },
    date_nasc: {
      type: 'date',
      required: [true, 'A data Nascimentoe requerido']
    }
  }
);

const ModelPerson = mongoose.model('Person', personSchema);

export default ModelPerson;
