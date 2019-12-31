import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

import Navbar from "./components/layout/Navbar";
import PageLabel from "./components/layout/PageLabel";
import Footer from "./components/layout/Footer";
import Artworks from "./components/pages/Artworks";
import ArtworksCategory from "./components/pages/ArtworksCategory";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/:page?/:category?" component={PageLabel} />
        <Route exact path="/artworks" component={Artworks} />
        <Route exact path="/artworks/:category" component={ArtworksCategory} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
