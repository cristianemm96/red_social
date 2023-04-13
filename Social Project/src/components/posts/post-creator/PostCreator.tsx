import React from "react";

export const PostCreator = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <form
        style={{
          display: "flex",
          width: " 80%",
          margin: "auto",
          height: "80px",
          background: "blue",
        }}
      >
        <textarea
          name=""
          id=""
          cols={75}
          rows={4}
          style={{ margin: "auto", resize: "none", textAlign: "left" }}
          placeholder="Que hay de nuevo?"
        />
        <input
          type="submit"
          value="Crear"
          style={{ width: "20%", height: "50px", margin: "auto" }}
        />
      </form>
    </div>
  );
};
