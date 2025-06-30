import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:3003/post");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      {/*  Banner de bienvenida */}
      <div className="p-4 bg-primary text-white rounded text-center">
        <h1>¡Bienvenido a MarceNicos!</h1>
        <p>Explorá, compartí y descubrí publicaciones increíbles.</p>
      </div>

      {/* Sección "Sobre nosotros" */}
      <section className="mt-5">
        <h2>Sobre Nosotros</h2>
        <p>
          MarceNicos es una red social diseñada para que los usuarios puedan
          compartir ideas, imágenes, pensamientos y conectar con otros.
          Apuntamos a crear un espacio libre, creativo y sin algoritmos que
          condicionen lo que ves.
        </p>
      </section>

      {/* Slogans o frases destacadas */}
      <section className="mt-4">
        <h3>Slogans que nos representan</h3>
        <ul>
          <li>"Tu voz, tu espacio, tu comunidad."</li>
          <li>"Compartí lo que pensás, sin filtros ni juicios."</li>
          <li>"Un lugar para expresarte libremente."</li>
        </ul>
      </section>

      {/* Datos curiosos */}
      <section className="mt-4">
        <h3>¿Sabías que...?</h3>
        <ul>
          <li>El primer post de la app fue una foto de un mate y una medialuna.</li>
          <li>Más de 200 usuarios activos se registraron en la primera semana.</li>
          <li>La app fue desarrollada en solo 2 meses por dos estudiantes apasionados.</li>
        </ul>
      </section>

      {/* Feed de publicaciones */}
      <section className="mt-5">
        <h2>Feed de Publicaciones</h2>
        <p>Aquí se mostrará el contenido publicado por los usuarios.</p>
        {/* Acá irán los posts más adelante */}
      </section>

      <div className="container mt-4">
        <h2 className="mb-4">POSTS</h2>
        <div className="list-group">
          {posts.map((post) => (
            <div key={post._id} className="list-group-item">
              <h5>{post.description}</h5>
              <h6>{new Date(post.createdAt).toLocaleDateString()}</h6>
              <Link to={`/post/${post._id}`} className="btn btn-primary">
                Ver más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
