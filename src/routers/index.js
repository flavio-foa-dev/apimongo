import express from 'express';
import custumerRouter from './custumerRoutes.js';

export default function routes(app) {
 app.route("/").get((req, res) => {
  res.status(200).json({message: " My corse de Nodejs with dbmongo"})
 })
 app.use(
  express.json(),
  custumerRouter
 )
}