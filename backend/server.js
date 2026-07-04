require('dotenv').config();
const express = require('express');
const cors = require('cors');
const imagenesRoutes = require('./routes/imagenes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET']
}));

app.use(express.json());

app.use('/api', imagenesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
