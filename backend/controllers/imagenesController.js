const { buildSecureUrl, obtenerImagenes } = require('../services/imageKit');

async function getImageUrl(req, res) {
  try {
    const imagenes = await obtenerImagenes();
      
    res.json({ imagenes });
  } catch (error) {
    console.error('Error al generar URL firmada:', error.message);
    res.status(500).json({ error: 'Error al generar la URL de la imagen.' });
  }
}

module.exports = { getImageUrl };

