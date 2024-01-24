import express, { Express } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT || 3000

const app: Express = express()

app.use(cors());
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 