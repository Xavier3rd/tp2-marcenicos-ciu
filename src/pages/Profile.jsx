import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch(`http://localhost:3003/post?userId=${user._id}`);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Bienvenido, {user?.nickName}</h2>
      <h4>Tus publicaciones:</h4>
      <div className="list-group">
        {posts.map(post => (
          <div key={post._id} className="list-group-item">
            <h5>{post.description}</h5>
            <h6>{new Date(post.createdAt).toLocaleDateString()}</h6>
            <p>Comentarios: {post.commentCount ?? 0}</p>
             <Link to={`/post/${post._id}`} className="btn btn-primary">Ver más</Link>
          </div>

        ))}
      </div>
      <Link to='/new-post'>Crear posteo</Link>
    </div>
  );
};

export default Profile;