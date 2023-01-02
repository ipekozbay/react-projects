import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Hero from './components/Hero';
import Card from './components/Card';
import data from '../src/config/data'
console.log(data)

export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>

    </div>
  );
}