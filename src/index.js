import express from 'express';
import router from './routes/index.js'
import morgan from 'morgan';

const app = express()
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//rutas
app.use(router)

app.listen(3000)
console.log("server funcionando en el puerto 3000")