import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom

// Import your custom components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Doctors from './components/Doctors';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollCounter from './components/ScrollCounter';
import AboutPage from './components/AboutPage';
import './App.css'; // Import your custom CSS file for styling

function App() {
  // Define an array of routes with path and component references
  const routes = [
    { path: '/', component: <><Home /><Technology /><About /><Doctors /><ScrollCounter /><Footer /></> },
    { path: '/about', component: <><About /><Footer /></> },
    { path: '/aboutpage', component: <><AboutPage /><Footer /></> },
    { path: '/doctors', component: <><Doctors /><Footer /></> },
    { path: '/technology', component: <><Technology /><Footer /></> },
    { path: '/contact', component: <><Contact /><Footer /></> },
  ];

  // Set the initial route (you can set this based on window.location.pathname or any logic)
  const [currentRoute, setCurrentRoute] = useState('/');

  // Find the component that matches the current route
  const routeComponent = routes.find(route => route.path === currentRoute)?.component || <Home />;

  return (
    <BrowserRouter> {/* BrowserRouter wrapping the entire app */}
      <div className="App">
        <Header />

        {/* Navigation buttons to change route */}
        <nav style={{ marginBottom: '20px' }}>
          <button onClick={() => setCurrentRoute('/')}>Home</button>
          <button onClick={() => setCurrentRoute('/about')}>About</button>
          <button onClick={() => setCurrentRoute('/aboutpage')}>About Page</button>
          <button onClick={() => setCurrentRoute('/doctors')}>Doctors</button>
          <button onClick={() => setCurrentRoute('/technology')}>Technology</button>
          <button onClick={() => setCurrentRoute('/contact')}>Contact</button>
        </nav>

        {/* Render the component that matches the current route */}
        <div>{routeComponent}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
