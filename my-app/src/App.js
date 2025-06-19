import React, { useState, useEffect } from 'react';
import axios from 'axios'; // ✅ This is the correct line
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Button from './components/examples/Button';
import Header from './components/examples/Header';
import Footer from './components/examples/Footer';

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>
        setData(response.data))
      .catch(error =>
        console.error('Error fetching data', error));
  }, []);

  return (
    <div>
      <Header />
      <h1> Welcome to My React App!</h1>
      <ul>
        {data.map(post => (
          <li
            key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Button label="Click me!" />
      <Footer />
    </div>


  )
};

export default App;
