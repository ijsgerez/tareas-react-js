import './UsuarioCard.css'

const UsuarioCard = ({ usuario }) => {
  const { name, email } = usuario;

  return (
    <div className="usuario-card-container">
      <p className="usuario-nombre">{name}</p>
      <p className="usuario-email">{email}</p>
    </div>
  );
};

export default UsuarioCard;