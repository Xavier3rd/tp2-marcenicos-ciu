import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

const NewPost = () => {
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext); // Obtenés el usuario logueado
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      description,
      user: user._id, // Ajustar al campo real que espera tu back
    };

    try {
      const res = await fetch("http://localhost:3003/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (res.ok) {
        alert("Post creado con éxito");
        navigate("/profile"); // o donde quieras redirigir
      } else {
        alert("No se pudo crear el post");
      }
    } catch (error) {
      console.error("Error al crear post:", error);
      alert("Error en el servidor");
    };
    fetchPosts()
  };

  return (
    <div className="container mt-5">
      <h2>Crear nuevo post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"></label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="¿Qué quisieras compartir con tu red?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success" style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }} >Publicar</button>
      </form>
    </div>
  );
};

export default NewPost;