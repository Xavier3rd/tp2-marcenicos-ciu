import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nickName, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // solo si tu API lo requiere
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      nickName,
      email,
      password, // quitar si no es necesario
    };

    try {
      const res = await fetch("http://localhost:3003/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        alert("Usuario registrado con éxito");
        navigate("/login"); // redirige al login si querés
      } else {
        alert("Hubo un error al registrar el usuario");
      }
    } catch (err) {
      console.error(err);
      alert("Error en el servidor");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nickname</label>
          <input
            type="text"
            className="form-control"
            value={nickName}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Si tu back espera contraseña, agregá este campo */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
