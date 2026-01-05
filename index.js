import express from 'express';
import mountRoutes from './routes/index.js';

const app = express();
const port = 3002;

// const pool = new Pool({
//   host: process.env.POSTGRES_HOST,
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   port: process.env.POSTGRES_PORT,
//   idleTimeoutMillis: 30000,
// });

console.log("Testing SAST scanner");

app.use(express.json())

mountRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) =>{
  res.status(200).json({status: 'ok'})
})

app.listen(port, () => {
  return console.log(`transactions service is listening at http://localhost:${port}`);
});