import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { DollarSign, Calendar } from 'lucide-react';

const FinancingCalculator = () => {
  const [price, setPrice] = useState(1299);
  const [months, setMonths] = useState(12);
  const [downPayment, setDownPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const principal = price - downPayment;
    const monthlyRate = 0.05 / 12; // 5% APR
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                   (Math.pow(1 + monthlyRate, months) - 1);
    return payment.toFixed(2);
  };

  const calculateTotalInterest = () => {
    const principal = price - downPayment;
    const monthlyPayment = parseFloat(calculateMonthlyPayment());
    return ((monthlyPayment * months) - principal).toFixed(2);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Financing Calculator</h2>
          <p className="text-xl text-gray-600">
            Calculate your monthly payments with 0% APR financing
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Payment Estimator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Bike Price: ${price}
              </label>
              <Slider
                value={[price]}
                onValueChange={([value]) => setPrice(value)}
                min={999}
                max={2000}
                step={100}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Down Payment: ${downPayment}
              </label>
              <Slider
                value={[downPayment]}
                onValueChange={([value]) => setDownPayment(value)}
                min={0}
                max={price}
                step={50}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Term: {months} months
              </label>
              <Slider
                value={[months]}
                onValueChange={([value]) => setMonths(value)}
                min={6}
                max={24}
                step={3}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">
                  ${calculateMonthlyPayment()}
                </div>
                <div className="text-sm text-gray-600">Monthly Payment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  ${calculateTotalInterest()}
                </div>
                <div className="text-sm text-gray-600">Total Interest</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  ${(parseFloat(calculateMonthlyPayment()) * months).toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">Total Payment</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinancingCalculator;