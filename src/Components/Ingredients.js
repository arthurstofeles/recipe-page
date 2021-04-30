import React from "react";

const Ingredients = () => {

    return (
        <section>
            <h2 className="section-title">Ingredients</h2>
            <div>
                <h3 className="section-subtitle">Graham Cracker Crust</h3>
                <label htmlFor="1">1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)
                                <input type="checkbox" id="1" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="2">5 Tablespoons (70g) <strong>unsalted butter,</strong> melted
                                <input type="checkbox" id="2" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="3">1/4 cup (50g) <strong>granulated sugar</strong>
                    <input type="checkbox" id="3" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div>
                <h3 className="section-subtitle">Cheesecake</h3>
                <label htmlFor="4">four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>, softened to room temperature
                                <input type="checkbox" id="4" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="5">1 cup (200g) <strong>granulated sugar</strong>
                    <input type="checkbox" id="5" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="6">1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature
                                <input type="checkbox" id="6" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="7">1 teaspoon <strong>pure vanilla extract</strong>
                    <input type="checkbox" id="7" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="8">2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)
                                <input type="checkbox" id="8" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="9">3 large <strong>eggs</strong>, at room temperature
                                <input type="checkbox" id="9" />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="10">topping suggestions:<em> salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce </em>(recipe in notes)
                                <input type="checkbox" id="10" />
                    <span className="checkmark"></span>
                </label>
            </div>
        </section>
    )
}

export default Ingredients;