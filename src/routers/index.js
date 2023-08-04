import express from 'express';
import custumerRouter from './custumerRoutes.js';
import personRouter from './personRoutes.js';

export default function routes(app) {
 app.route("/").get((req, res) => {
  res.status(200).json({message: "My webxel agenciad de sites  social midia"})
 })
 app.use(
  express.json(),
  custumerRouter,
  personRouter
 )
}
