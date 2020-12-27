import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const chalk = require('chalk')

export const app = express()

const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
    res.send({me: 'hello'})
})

app.use('/api', router)

app.get('/data', (req, res) => {
    res.send({ data: req.mydata })
})
app.post('/data', (req, res) => {
    console.log(chalk.yellow.bold(req.body))
    res.send({ ok: true })
})

export const start = () => {
    app.listen(3000, () => {
        console.log(chalk.blue.bold('server is on 3000'))
    })
}
