import React from "react";

const Ingredients = () => {

    const IngredientsTitles = {
        marginBottom: "30px"
    }

    return (
        <div>
            <section>
                <h2 className="section-title">Ingredients</h2>
                <div>
                    <h3 style={IngredientsTitles}>Graham Cracker Crust</h3>
                    <div>
                        <div>
                            <label htmlFor="1">1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)
                                <input type="checkbox" id="1" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ingredients;