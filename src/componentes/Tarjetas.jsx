const Tarjetas = ({ nombre, imagen, info = 'Información próximamente.', clan, aldea, rango, poderes = [] }) => {
  return (
    <div className="w-full h-72 md:h-96 lg:h-100 p-2 text-white card-3d group">
      <div className="card-3d-inner h-full w-full border rounded-xl border-white/10 transition-colors duration-500 group-hover:border-brand/50">
        <div className="card-face card-front borde absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-surface">
          <img src={imagen} className="h-4/5 w-full object-cover" loading="lazy" alt={nombre} />
          <div className="flex h-1/5 items-center justify-center px-3 text-center text-base font-semibold tracking-wide">
            <span>{nombre}</span>
          </div>
        </div>

        <div className="card-face card-back absolute inset-0 flex flex-col rounded-xl bg-surface p-4 text-sm overflow-y-auto">
          <h3 className="mb-2 text-lg font-display tracking-wider text-brand">{nombre}</h3>
          {clan && <p className="mb-1"><span className="text-gray-500">Clan:</span> {clan}</p>}
          {aldea && <p className="mb-1"><span className="text-gray-500">Aldea:</span> {aldea}</p>}
          {rango && <p className="mb-1"><span className="text-gray-500">Rango:</span> {rango}</p>}
          <p className="mt-1 mb-1 text-gray-300">{info}</p>
          {poderes.length > 0 && (
            <div className="mt-2">
              <span className="text-gray-500 text-xs uppercase tracking-wider">Poderes</span>
              <ul className="mt-1 space-y-0.5">
                {poderes.map((poder, i) => (
                  <li key={i} className="text-gray-300 text-xs flex items-start gap-1.5 before:content-['▸'] before:text-brand before:text-xs before:leading-4">{poder}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>  
    </div>
  )
}

export default Tarjetas;