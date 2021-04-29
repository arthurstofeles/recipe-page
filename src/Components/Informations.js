import React from "react";

const Informations = () => {

    return (
        <section>
            <div className="card">
                <div className="card-information">
                        <span className="material-icons card-icon">
                            &#xe561;
                        </span>
                    <div className="card-text">
                        <p>Yields</p>
                        <p>12 servings</p>
                    </div>
                </div>
                <div className="card-information">
                        <span className="material-icons card-icon">
                            &#xe8b5;
                        </span>
                    <div className="card-text">
                        <p>Prep TIme</p>
                        <p>45 minutes</p>
                    </div>
                </div>
                <div className="card-information">
                        <span className="material-icons card-icon">
                            &#xe8b5;
                        </span>
                    <div className="card-text">
                        <p>Cook Time</p>
                        <p>1 hour</p>
                    </div>
                </div>
                <div className="card-information">
                        <span className="material-icons card-icon">
                            &#xe8b5;
                        </span>
                    <div className="card-text">
                        <p>Total Time</p>
                        <p>7,75 hours</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Informations;