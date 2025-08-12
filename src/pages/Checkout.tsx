import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header'; // ADDED HEADER IMPORT

// ... rest of the Checkout component code remains the same ...

return (
  <div className="min-h-screen bg-gray-50 py-8">
    <Header /> {/* ADDED HEADER COMPONENT */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ... existing content ... */}
    </div>
  </div>
);