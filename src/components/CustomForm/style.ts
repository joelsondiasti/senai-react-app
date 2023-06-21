import { styled } from "@stitches/react";

export const MainContainer = styled("main", {
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "700px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  flexDirection: "column",
  padding: "1rem",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.143)",

  "&>div": {
    width: "100%",
    display: "flex",
    gap: "1rem",
    input: {
      flex: "1",
    },
  },
});

export const AddressForm = styled("form", {
  width: "100%",
  marginTop: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  alignSelf: "flex-start",
  div: {
    display: "flex",
    flexDirection: "column",
  },
});
