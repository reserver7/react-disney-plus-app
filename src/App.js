import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { styled } from "styled-components";
import Category from "./components/Category";
import requests from "./api/requests";
import Row from "./components/Row";

function App() {
  const rows = [
    { title: "Trending Now", id: "TN", fetchUrl: requests.fetchTrending },
    { title: "Top Rated", id: "TR", fetchUrl: requests.fetchTopRated },
    { title: "Action Movies", id: "AM", fetchUrl: requests.fetchActionMovies },
    { title: "Comedy Movies", id: "CM", fetchUrl: requests.fetchComedyMovies },
  ];

  const rowComponents = rows.map((row, index) => (
    <Row key={index} title={row.title} id={row.id} fetchUrl={row.fetchUrl} />
  ));

  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      {rowComponents}
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
