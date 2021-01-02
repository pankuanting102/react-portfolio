import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
// import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import FindInfluencer from "./components/pages/FindInfluencer";
import WeatherDashboard from "./components/pages/WeatherDashboard";
import WorkDayScheduler from "./components/pages/WorkDayScheduler";
import CodeQuiz from "./components/pages/CodeQuiz";
import PasswordGenerator from "./components/pages/PasswordGenerator";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/findinfluencer" component={FindInfluencer} />
        <Route exact path="/weather-dashboard" component={WeatherDashboard} />
        <Route exact path="/workday-scheduler" component={WorkDayScheduler} />
        <Route exact path="/password-generator" component={PasswordGenerator} />
        <Route exact path="/code-quiz" component={CodeQuiz} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;