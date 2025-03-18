import { createContext, useState } from "react";

export const AppraiserContext = createContext();

export const AppraiserProvider = ({ children }) => {
  const [appraisers, setAppraisers] = useState([
    { id: 1, name: "John Doe", type: "Individual", experience: "10 years", address: "123 Main Street, USA", phone: "+1 (123) 456-7890", email: "johndoe@email.com", status: "Active" },
    { id: 2, name: "Mary Smith", type: "Individual", experience: "8 years", address: "789 Oak Road, USA", phone: "+1 (555) 123-4567", email: "marysmith@email.com", status: "Active" },
    { id: 3, name: "ABC Appraisal Services", type: "Organization", experience: "2000", address: "456 Lakewood, USA", phone: "+1 (333) 222-1111", email: "abc@email.com", status: "Inactive" },
    { id: 4, name: "XYZ Valuers", type: "Organization", experience: "1995", establishedSince: "1995", address: "555 Elm Street, USA", phone: "+1 (777) 888-9999", email: "xyz@email.com", status: "Active" },
    { id: 5, name: "David Johnson", type: "Individual", experience: "5 years", establishedSince: "-", address: "101 Pine St, USA", phone: "+1 (111) 222-3333", email: "david@email.com", status: "Inactive" },
    { id: 6, name: "Sarah Brown", type: "Individual", experience: "7 years", establishedSince: "-", address: "202 Maple Ave, USA", phone: "+1 (444) 555-6666", email: "sarah@email.com", status: "Active" },
  ]);

  // Hàm thêm mới Appraiser
  const addAppraiser = (newAppraiser) => {
    setAppraisers([...appraisers, { id: appraisers.length + 1, ...newAppraiser }]);
  };

  return (
    <AppraiserContext.Provider value={{ appraisers, addAppraiser }}>
      {children}
    </AppraiserContext.Provider>
  );
};
