import http from 'http'
import app from './app.js'
import 'dotenv/config'

const server = http.createServer(app);

const PORT = process.env.PORT_SERVER || 5000;

app.listen(PORT, ()=>{
    console.log("Ejecutandose en el puerto: " + PORT)
})