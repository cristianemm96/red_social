interface Props {
  post: {
    user: number;
    textContent: string;
  };
}

export const PostContent = ({ post }: Props) => {
  return (
    <div style={{ height: "120px", width: "80%" }} key={Math.random()}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>Usuario</h3>
          <img
            src="https://i.ibb.co/Tkm5DPy/descarga.jpg"
            alt="descarga"
            style={{ maxHeight: "30px", borderRadius: "50%" }}
          />
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          <p>{post.textContent}</p>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <a href="">Responder</a><a href="">Favorito</a><a href="">Compartir</a>
      </div>
    </div>
  );
};
//<img src="https://i.ibb.co/Tkm5DPy/descarga.jpg" alt="descarga" border="0"/>
