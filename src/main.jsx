import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

export const Context = createContext({
  isAuthenticated: false,
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [mode, setMode] = useState("dark");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        blogs,
        setBlogs,
        mode,
        setMode,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <BrowserRouter>
      <App />
      </BrowserRouter>
     
    </Context.Provider>
  );
};

const root= ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
