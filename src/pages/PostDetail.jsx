import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3003/post/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="container mt-5">
      <h2>Detalle del post</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{post.description}</p>
          <p>{new Date(post.createdAt).toLocaleDateString()} | {new Date(post.createdAt).toLocaleTimeString()}</p>
          {/* Podés agregar más info acá, como fecha, usuario, tags, etc. */}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

