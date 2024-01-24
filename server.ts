import express, { Express } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import errorHandler from './src/middlewares/error.middleware'
import { clientRouter } from './src/routes/client.routes'
import { staffMemberRouter } from './src/routes/staff-member.routes'
import { appointmentRouter } from "./src/routes/appointment.routes"
 
dotenv.config()
const port = process.env.PORT || 3000

const app: Express = express()

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/clients', clientRouter)
app.use('/staff-members', staffMemberRouter)
app.use('/appointments', appointmentRouter)

// Error handler
app.use(errorHandler)

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 