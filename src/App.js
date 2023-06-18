import React, { useState } from "react";

import GlobalStyle from "./styles/global";

import { Container, Content } from "./styles";

import Upload from "./components/Upload";

function App() {
  return (
    <Container>
      <Content>Upload City</Content>
      <Upload />
      <GlobalStyle />
    </Container>
  );
}

export default App;
