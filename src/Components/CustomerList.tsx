import React from "react";
import CustomerCard from "./CustomerCard";
import { Customer } from "../types";

interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onSelect: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomer,
  onSelect,
}) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onSelect={onSelect}
          selected={selectedCustomer?.id === customer.id}
        />
      ))}
    </div>
  );
};

export default CustomerList;
