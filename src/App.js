import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";
import HistoryComponent from "./components/HistoryComponent";
import Upload from "./components/Upload";

function App() {


  return (
    <Container>
      <Content>
        <Upload/>
        <HistoryComponent />
      </Content>
      <GlobalStyle />
    </Container>
  );
}

export default App;
