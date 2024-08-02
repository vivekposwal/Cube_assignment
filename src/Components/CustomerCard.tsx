import React from "react";
import { Customer } from "../types";

interface CustomerCardProps {
  customer: Customer;
  onSelect: (customer: Customer) => void;
  selected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onSelect,
  selected,
}) => {
  return (
    <div
      className={`customer-card ${selected ? "selected" : ""}`}
      onClick={() => onSelect(customer)}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
