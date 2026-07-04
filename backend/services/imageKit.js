const ImageKit = require('@imagekit/nodejs');
require('dotenv').config();

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function buildSecureUrl(src, opts = {}) {
  const imagen = imageKit.helper.buildSrc({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    src: src,
    signed: true,
    expiresIn: 300,
  });
  return imagen
}
const obtenerImagenes = async () => {
  const imagenes = await imageKit.assets.list({
    path: `/Proyectos/naruto/`,
    type: "file"
  });

  // Obtener url seguras de cada imagen.
  const nuevasImagenes = imagenes.map((imagen) => {
    const urlSegura = buildSecureUrl(imagen.filePath);
    const nombreImagen = imagen.name
    return {url: urlSegura, id: nombreImagen}
  })

  return nuevasImagenes
}

module.exports = {
  obtenerImagenes,
  buildSecureUrl
}
