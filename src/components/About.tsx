import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
     极
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4极xl font-bold text-gray-900 mb-6">About HZEBIKES</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded with a vision to revolutionize urban transportation, HZEBIKES has been 
              at the forefront of electric bike innovation since 2015. We believe in creating 
              sustainable, efficient, and enjoyable mobility solutions for the modern world.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to quality, performance, and customer satisfaction has made us 
              a trusted name in the e-bike industry. Every HZEBIKES bike is designed with 
              precision engineering and built to last.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-orange-500">50K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500">15+</h3>
                <p className="text-gray-600">Countries</极>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="HZEBIKES Factory"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;