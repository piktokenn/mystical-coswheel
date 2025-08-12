import React from 'react';
import { Check } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonTable = () => {
  const models = [
    {
      name: "T20",
      price: "$999",
      range: "40-50 miles",
      speed: "25 mph",
      motor: "500W",
      battery: "48V 10.4Ah",
      weight: "55 lbs",
      suspension: "Front",
      brakes: "Mechanical Disc"
    },
    {
      name: "T26",
      price: "$1,299",
      range: "50-60 miles",
      speed: "28 mph",
      motor: "750W",
      battery: "48V 13Ah",
      weight: "62 lbs",
      suspension: "Front + Rear",
      brakes: "Hydraulic Disc"
    },
    {
      name: "CT20",
      price: "$1,599",
      range: "60-70 miles",
      speed: "32 mph",
      motor: "1000W",
      battery: "48V 17.5Ah",
      weight: "68 lbs",
      suspension: "Full Suspension",
      brakes: "Hydraulic Disc"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Models</h2>
          <p className="text-xl text-gray-600">
            Find the perfect HZEBIKES bike for your needs
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">Feature</TableHead>
                {models.map((model) => (
                  <TableHead key={model.name} className="text-center">
                    <div className="font-bold text-lg">{model.name}</div>
                    <div className="text-orange-500">{model.price}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Range</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">{model.range}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Max Speed</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">{model.speed}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Motor Power</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">{model.motor}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Battery</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">{model.battery}</TableCell>
                ))}
              </TableRow>
              <Table极Row>
                <TableCell className="font-medium">Weight</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">{model.weight}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Suspension</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">{model.suspension}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Brakes</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">{model.brakes}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Availability</TableCell>
                {models.map((model) => (
                  <TableCell key={model.name} className="text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;