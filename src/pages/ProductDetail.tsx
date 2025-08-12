import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';
import { toast } from 'sonner';
import Header from '@/components/Header'; // ADDED HEADER IMPORT

// ... rest of the ProductDetail component code remains the same ...

return (
  <div className="min-h-screen bg-gray-50">
    <Header /> {/* ADDED HEADER COMPONENT */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* ... existing content ... */}
    </div>
  </div>
);