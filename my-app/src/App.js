import logo from "./logo.svg";
import "./App.css";
import Button from "./components/examples/01_03"
import DynamicUpdateComp from "./components/counter.js"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <h1> Welcome to My React App!</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" Home></Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
};

export default App;
