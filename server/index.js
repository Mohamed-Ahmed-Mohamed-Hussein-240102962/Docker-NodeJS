const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// الاتصال بقاعدة البيانات PostgreSQL
const pgClient = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

pgClient.on('error', () => console.log('Lost PG connection'));

// المسار المعدل ليطابق التوجيه القادم من Nginx
app.get('/test', (req, res) => {
  res.send({ message: 'Hello from Node.js Express!' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});