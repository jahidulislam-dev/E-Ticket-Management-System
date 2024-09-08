import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import httpStatus from 'http-status'
import router from './app/router'
import cookieParser from 'cookie-parser'
// import corsOptions from './config/corsOptions'

const app: Application = express()

// cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// application routes
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'project is running for world 🕊' })
})

// global error handler
app.use(globalErrorHandler)

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
