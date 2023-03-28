import React from "react";
import { Navbar } from "./components/index.js";
import { Header, AboutMe, Projects, Footer } from "./layout/index.js";
const App = () => {
  return (
    <div>
      <div style={{ height: "100vh", display: 'flex', flexDirection: 'column'}}>
        <Navbar />
        <Header />
      </div>
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
