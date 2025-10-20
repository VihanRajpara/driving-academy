import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const batches = [
    { id: 1, startTime: "09:00 AM", endTime: "10:00 AM" },
    { id: 2, startTime: "10:00 AM", endTime: "11:00 AM" },
    { id: 3, startTime: "11:00 AM", endTime: "12:00 PM" },
    { id: 4, startTime: "12:00 PM", endTime: "01:00 PM" },
    { id: 5, startTime: "01:00 PM", endTime: "02:00 PM" },
    { id: 6, startTime: "02:00 PM", endTime: "03:00 PM" },
    { id: 7, startTime: "03:00 PM", endTime: "04:00 PM" },
    { id: 8, startTime: "04:00 PM", endTime: "05:00 PM" },
    { id: 9, startTime: "05:00 PM", endTime: "06:00 PM" },
    { id: 10, startTime: "06:00 PM", endTime: "07:00 PM" },
  ];

  // Optional: load user data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Function to login user
  const login = (userData) => {
    console.log("add in context login function !!");
    setUser(userData);
  };

  // Function to logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ batches, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy access
export const useUser = () => useContext(UserContext);
