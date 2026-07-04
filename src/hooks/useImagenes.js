import { useState, useEffect } from "react"

export function useImagenes() {
  const [imagenes, setImagenes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/api/image-url")
      .then(r => {
        if (!r.ok) throw new Error("Error al obtener imágenes")
        return r.json()
      })
      .then(data => {
        setImagenes(data.imagenes || [])
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { imagenes, loading, error }
}
