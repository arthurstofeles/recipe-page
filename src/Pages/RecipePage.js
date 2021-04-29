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
      <main className="container">
        <div className="row">
          <div className="col-75" >
            <Ingredients />
            <Instructions />
          </div>
          <div className="col-25">
            <Informations />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default RecipePage;