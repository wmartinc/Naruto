import Contenedor from "./componentes/Contenedor"
import Resumen from "./componentes/Resumen"
import { Contexto } from "./Contexto"
import { useImagenes } from "./hooks/useImagenes"

function App() {
  const { imagenes, loading, error } = useImagenes()

  const getImageUrl = (nombreArchivo) => {
    const encontrada = imagenes.find(img =>
      img.id === nombreArchivo
    )
    return encontrada?.url || null
  }

  return (
    <div className="flex flex-col">
      <Contexto.Provider value={{ imagenes, loading, error, getImageUrl }}>
        <Contenedor />
        <Resumen />
      </Contexto.Provider>
    </div>
  )
}

export default App
