import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Books from "../components/Books";
import Footer from "../components/Footer";

const BookPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Books />
      <Footer />
    </>
  );
};

export default BookPage;
