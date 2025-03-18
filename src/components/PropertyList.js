import { useState, useEffect } from "react";
import propertiesApi from "../api/propertiesApi";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const result = await propertiesApi.getAll();
        setProperties(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Property List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.address} - {property.city}, {property.state}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
