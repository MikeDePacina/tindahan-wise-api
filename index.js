import express from 'express';
import mountRoutes from './routes/index.js';

const app = express();
const port = 3002;

app.use(express.json())

mountRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) =>{
  res.status(200).json({status: 'ok'})
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    return console.log(`transactions service is listening at http://localhost:${port}`);
  });
}

export default app;
