import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */

const App = () => {
    return (
        <div>
            <Header />
            <h2>Hello, World, from the App Component!</h2>
            <MemeGenerator />
        </div>
        )
    };

export default App;