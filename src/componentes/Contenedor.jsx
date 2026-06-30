import Link from "../ui/shared/Link";


const Contenedor = () => {
  return (
    <section className="h-screen flex w-full bg-black relative">
      <img src="/public/naru.jpg" alt="portada" className="relative mask-linear-120 mask-linear-from-40% mask-linear-to-80% object-cover  " />
      <div className="text-white absolute w-100 right-0 bottom-5 ">
        <h1 className="text-4xl border-b">Resumen</h1>
        <p className="text-gray-50/70">
          Naruto sigue a Naruto Uzumaki, un joven ninja que sueña con ser Hokage y ser respetado.
          A lo largo de la saga lucha contra enemigos como los Akatsuki, descubre su propio poder gracias al zorro de nueve colas dentro de él,
          y aprende el valor de la amistad, la perseverancia y el perdón.
        </p>
        <Link key={1} source="here">Ver mas</Link>
      </div>
    </section>
  )
}

export default Contenedor;