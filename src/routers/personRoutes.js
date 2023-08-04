import express from 'express';
import PersonController from '../controllers/PersonController.js'

const personRouter = express.Router()

personRouter
.get("/api/person/:id", PersonController.getPersonById)
.get("/api/person", PersonController.getPersonAll)
.post("/api/person", PersonController.savePerson)
.put("/api/person/:id", PersonController.updatePerson)
.delete("/api/person/:id", PersonController.deletePerson)

export default personRouter;
