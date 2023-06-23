import { styled } from "@stitches/react";

export const CredentialContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(120deg, #FFF 0%, #87e4f7 100%)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontFamily: "'Noto Sans', sans-serif",
});

export const CredentialCard = styled("main", {
  backgroundColor: "#1e1e1e",
  borderRadius: "24px",
  width: "360px",
  height: "490px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  color: "#fff",
});
