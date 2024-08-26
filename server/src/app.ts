import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'

const app: Application = express()

// cors
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'project is running for world 🕊' })
})


// Handle not found
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  })
})

export default app
