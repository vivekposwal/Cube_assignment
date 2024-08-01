import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import customersData from "./customers.json";
import { Customer } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        selectedCustomer={selectedCustomer}
        onSelect={handleCustomerSelect}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
