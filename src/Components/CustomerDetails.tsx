import React, { useEffect, useState } from "react";
import axios from "axios";
import { Customer } from "../types";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>(customer.photos);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        console.log(
          "Unsplash Access Key:",
          process.env.REACT_APP_UNSPLASH_API_KEY
        ); // Debugging statement

        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: { count: 9 },
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
            },
          }
        );
        setPhotos(response.data.map((photo: any) => photo.urls.small));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
    //const intervalId = setInterval(fetchPhotos, 10000);

    //return () => clearInterval(intervalId);
  }, [customer]);

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {photos.map((url, index) => (
          <img key={index} src={url} alt="Customer related" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
