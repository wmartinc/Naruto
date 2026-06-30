const Contenedor = () => {
  return (
    <section className="h-screen flex w-full bg-black relative">
      <img src="/public/naru.jpg" alt="portada" className="relative mask-linear-120 mask-linear-from-40% mask-linear-to-80% object-cover" />
      <div className="text-white px-4 absolute w-full md:w-100  bottom-2 md:bottom-5 md:right-5 md:p-0">
        <h1 className="text-3xl md:text-4xl font-display tracking-widest border-b border-brand pb-1">Resumen</h1>
        <p className="text-gray-50/70 text-sm md:text-base py-2">
          Naruto sigue a Naruto Uzumaki, un joven ninja que sueña con ser Hokage y ser respetado.
          A lo largo de la saga lucha contra enemigos como los Akatsuki, descubre su propio poder gracias al zorro de nueve colas dentro de él,
          y aprende el valor de la amistad, la perseverancia y el perdón.
        </p>
      </div>
    </section>
  )
}

export default Contenedor;