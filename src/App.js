import React from "react";
import "./App.css";
import styled from "styled-components";

import Quote from "./components/Quote";

const Header = styled.h1`
  font-size: 4.5rem;
  margin-top: 5%;
  font-family: "Bebas Neue";
`;

const SubHeader = styled.h2`
  font-family: "Bebas Neue";
  font-size: 2rem;
  color: white;
`;

const Video = styled.iframe`
  margin-left: 7%;
  margin-right: 7%;
  margin-bottom: 7%;
  margin-top: 3%;
`;

function App() {
  return (
    <div className="App">
      <Header>The Source of All Truth</Header>
      <SubHeader>Ron Swanson / Nick Offerman</SubHeader>
      <Video
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_StgHl92v5Q"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Video>
      <Quote />
    </div>
  );
}

export default App;
