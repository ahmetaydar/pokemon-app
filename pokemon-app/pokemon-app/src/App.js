import React from "react";

import SideNav from "./components/SideNav/index.js";
import Container from "./components/Container/index.js";
import Home from "./pages/Home.screen.js";

function App() {
  return (
    <div>
      <SideNav />

      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
