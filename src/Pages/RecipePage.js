import React from "react";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Informations from "../Components/Informations"
import Ingredients from "../Components/Ingredients"
import Instructions from "../Components/Instructions"

const RecipePage = () => {
  return (
    <div>
      <Header />
      <Informations />
      <Ingredients />
      <Instructions />
      <Footer />
    </div>
  )
};

export default RecipePage;