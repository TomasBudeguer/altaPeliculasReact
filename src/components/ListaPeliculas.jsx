import ItemPelicula from "./ItemPelicula";

const ListaPeliculas = ({ arregloPeliculas, borrarPelicula}) => {
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
          borrarPelicula={borrarPelicula}
        ></ItemPelicula>
      ))}
    </div>
  );
};

export default ListaPeliculas;
