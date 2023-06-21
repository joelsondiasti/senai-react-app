import { globalCss } from "@stitches/react";

// Arquivo global serve para
// manter um estilo padrão para toda a aplicação

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    border: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },
  "body > div": {
    background: `url(./img/background.jpg) no-repeat`,
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",

    fontFamily: "Roboto, sans-serif",
  },
  input: {
    border: "1px solid #1e1e1e",
    padding: "1rem",
    borderRadius: "8px",
  },
  button: {
    padding: "1rem",
    bordeRadius: "8px",
    backgroundColor: "#7159ca",
    color: "#fff",
  },
  "button:hover": {
    backgroundColor: "#442aa3",
  },
});
