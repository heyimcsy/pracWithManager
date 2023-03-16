import "./App.css";
import Router from "./shared/router";
import styled from "styled-components";

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;

const Layout = styled.main`
  width: 100vw;
  max-width: 720px;
  border: 2px solid black;
`;
