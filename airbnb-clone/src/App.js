import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card
        rating = "5.0"
        reviewCount ={6}
        country = "USA"
        title = "Life lessons with katie zaferes"
        price = {136}
      />
    </div>
  );
}