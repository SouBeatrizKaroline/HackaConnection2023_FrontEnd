import React, { useState } from "react";

import GlobalStyle from "./styles/global";

import { Container, Content } from "./styles";

function App() {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <Container>
      <Content>Upload File</Content>
      <GlobalStyle />
    </Container>
  );
}

export default App;
