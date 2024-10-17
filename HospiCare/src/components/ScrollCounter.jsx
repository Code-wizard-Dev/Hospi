// components/ScrollCounter.js
import React, { useEffect } from 'react';
import './ScrollCounter.css'; // Assuming you will have a CSS file for styling

const ScrollCounter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.count');
    const speed = 450; // Adjust speed of the counter
    function runCounter(counter) {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => runCounter(counter), 10);
      } else {
        counter.innerText = target;
      }
    }

    function checkCounters(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          runCounter(counter);
          observer.unobserve(counter); // Stop observing once counter starts
        }
      });
    }

    const observer = new IntersectionObserver(checkCounters, {
      threshold: 0.5 // Adjust this value as needed
    });

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }, []);

  return (
    <div>
      <section className="stats-section" id="stats">
        <div className="counter">
          <span id="counter1" className="count" data-target="2000">0</span>
          <p className="para">Satisfied Patients</p>
        </div>
        <div className="counter">
          <span id="counter2" className="count" data-target="50">0</span>
          <p className="para">Specialized Services</p>
        </div>
        <div className="counter">
          <span id="counter3" className="count" data-target="80">0</span>
          <p className="para">Nursing Staff</p>
        </div>
        <div className="counter">
          <span id="counter4" className="count" data-target="24">0</span>
          <p className="para">Emergency Care (24/7)</p>
        </div>
      </section>
    </div>
  );
}

export default ScrollCounter;
