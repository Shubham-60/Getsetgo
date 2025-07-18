"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const DestinationContext = createContext();

export function DestinationProvider({ children }) {
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('selectedDestination');
    if (saved) {
      setSelectedDestination(JSON.parse(saved));
    }
  }, []);

  const saveDestination = (destination) => {
    setSelectedDestination(destination);
    localStorage.setItem('selectedDestination', JSON.stringify(destination));
  };

  return (
    <DestinationContext.Provider value={{ 
      selectedDestination, 
      setSelectedDestination: saveDestination 
    }}>
      {children}
    </DestinationContext.Provider>
  );
}

export function useDestination() {
  return useContext(DestinationContext);
}