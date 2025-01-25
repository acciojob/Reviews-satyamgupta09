import React from "react";
import Review from "./Review";
import "./../styles/App.css";

export default function App() {
  return (
    <div className="App">
      <h1 id="review-heading">Our Reviews</h1>
      <Review />
    </div>
  );
}
