import React from 'react';
import Header from '../components/header';

const About = () => {
  return (
    <section>
      <Header />
      <div className="container-fluid">
        <p>This SPA app is made by ReactJS with Bootstrap CSS</p>
        <p>You can search the patterns inside of your DB</p>
        <p>Good Luck!</p>
      </div>
    </section>
  );
};

export default About;
