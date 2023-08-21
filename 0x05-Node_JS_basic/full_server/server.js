import express from 'express';
import router from './routes';

const host = '127.0.0.1';
const port = 1245;
const app = express();
app.use(router);

app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

export default app;
