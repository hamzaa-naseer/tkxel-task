import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Message from './components/Message';
import CounterClass from './components/CounterClass';
import CounterHooks from './components/CounterHooks';
import { EnhancedComponent } from './components/HigherOrderComponent';
import Home from './components/Home';
import About from './components/About';
import UserForm from './components/UserForm';

function App() {
  return (

<Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/message">Message</Link> | 
        <Link to="/counter-class">Counter (Class)</Link> | 
        <Link to="/counter-hooks">Counter (Hooks)</Link> | 
        <Link to="/hoc">HOC</Link> | 
        <Link to="/form">Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/counter-class" element={<CounterClass />} />
        <Route path="/counter-hooks" element={<CounterHooks />} />
        <Route path="/hoc" element={<EnhancedComponent />} />
        <Route path="/form" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
