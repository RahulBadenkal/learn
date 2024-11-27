import "./setup-env.mjs"
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { pool } from "./db.mjs";

const app = express();


// Middleware
app.use(cors()); // Enables CORS for all routes
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded bodies
app.use(bodyParser.json()); // Handles JSON body parsing


app.get('/', async (req, res) => {
  const dbResponse = await pool.query(
    "SELECT * FROM score"
  );
  const scores = dbResponse.rows

  res.json({"scores": scores})
})

app.post('/submit', async (req, res) => {
  // Update database
  // Return updated data
  const {score: newScore} = req.body
  console.log(newScore)

  const dbResponse = await pool.query(
    'INSERT INTO score (data) VALUES ($1) RETURNING id, data',
    [newScore]
  );
  const score = dbResponse.rows[0]

  res.json(score)
})


app.listen(process.env.PORT || 3000)
