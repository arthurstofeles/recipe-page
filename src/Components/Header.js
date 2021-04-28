import React from "react";
import photo from "../Images/photo1.png"

const Header = () => {

    const PageTitle = {
        marginBottom: "12px"
    };

    const PageSubTitle = {
        fontStyle: "italic",
        maxWidth: "596px",
        paddingLeft: "25px",
        position: "relative"
    };

    const PageImage = {
        marginTop: "43px"
    };

    return (
        <div>
            <header className="container">
                <h1 style={PageTitle}>Classic Cheesecake Recipe</h1>
                <p className="dots" style={PageSubTitle}>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
                <img style={PageImage} src={photo} />
            </header>
        </div>
    )
}

export default Header;