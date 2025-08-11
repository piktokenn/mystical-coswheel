import React, { useState, useEffect } from 'react';

const StatsCounter = () => {
  const [counters, setCounters] = useState([
    { value: 0, target: 50000, label: "Happy Customers", suffix: "+" },
    { value: 0, target: 15, label: "Countries", suffix: "+" },
    { value: 0, target: 100, label: "Million Miles", suffix: "+" },
    { value: 0, target: 98, label: "Customer Satisfaction", suffix: "%" }
  ]);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    counters.forEach((counter, index) => {
      let currentStep = 0;
      const increment = counter.target / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.floor(increment * currentStep),
          counter.target
        );

        setCounters(prev => prev.map((c, i) => 
          i === index ? { ...c, value: newValue } : c
        ));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  return (
    <section className="py-16 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {counters.map((counter, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counter.value.toLocaleString()}{counter.suffix}
              </div>
              <div className="text-orange-100">{counter.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;