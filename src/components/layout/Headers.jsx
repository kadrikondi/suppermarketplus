import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Userpageheader from "./Userpageheader";

export default function Headers() {
  const [id, setId] = useState(localStorage.getItem("userId"));
  const location = useLocation();

  useEffect(() => {
    const updateId = () => {
      setId(localStorage.getItem("userId"));
    };

    // Call updateId function when the component mounts
    updateId();

    // Add event listener for storage changes
    window.addEventListener("storage", updateId);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("storage", updateId);
    };
  }, []);

  useEffect(() => {
    // Update id state when the location changes
    setId(localStorage.getItem("userId"));
  }, [location]);

  return <div>{id ? <Userpageheader /> : <Header />}</div>;
}
