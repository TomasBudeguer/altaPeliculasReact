import ItemPelicula from "./ItemPelicula";

const ListaPeliculas = ({ arregloPeliculas }) => {
  return (
    <div className="row my-5">
      {arregloPeliculas.map((pelicula, posicion) => (
        <ItemPelicula
          key={posicion}
          pelicula={pelicula}
          nombre={pelicula.nombre}
          imagen={pelicula.imagen}
          descripcion={pelicula.descripcion}
          genero={pelicula.genero}
        ></ItemPelicula>
      ))}
    </div>
  );
};

export default ListaPeliculas;
