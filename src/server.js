import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const chalk = require('chalk')

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})
app.post('/', (req, res) => {
  console.log(chalk.yellow.bold(req.body))
  res.send({ message: 'ok' })
})

export const start = () => {
  app.listen(3000, () => {
    console.log(chalk.blue.bold('server is on 3000'))
  })
}
