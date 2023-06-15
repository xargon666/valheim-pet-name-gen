import "./styles.css";
import { default as Button } from "./Button";
import React, { useState } from "react";
import valheimLogo from "./images/logo.webp";
function App() {
    const petNames = [
        "Tom",
        "Buddy",
        "Max",
        "Charlie",
        "Cooper",
        "Rocky",
        "Bear",
        "Tiger",
        "Leo",
        "Milo",
        "Simba",
        "Oscar",
        "Toby",
        "Felix",
        "Gizmo",
        "Lucky",
        "Winston",
        "Zeus",
        "Shadow",
        "Coco",
        "Oreo",
        "Jasper",
        "Sammy",
        "Oliver",
        "Spike",
        "Harley",
        "Chase",
        "Rusty",
        "Luna",
        "Molly",
        "Daisy",
        "Lucy",
        "Sadie",
        "Maggie",
        "Stella",
        "Penny",
        "Bailey",
        "Ruby",
        "Rosie",
        "Zoe",
        "Bella",
        "Lola",
        "Sophie",
        "Chloe",
        "Lily",
        "Mia",
        "Maddie",
        "Roxy",
        "Princess",
        "Emma",
        "Cleo",
        "Hazel",
        "Annie",
        "Millie",
        "Grace",
        "Nala",
        "Pepper",
        "Callie",
        "Willow",
        "Ginger",
        "Zara",
        "Piper",
        "Kitty",
        "Cupcake",
        "Cookie",
        "Biscuit",
        "Honey",
        "Pumpkin",
        "Sugar",
        "Peanut",
        "Buttercup",
        "Doodle",
        "Snickerdoodle",
        "Noodle",
        "Snickers",
        "Jellybean",
        "Marshmallow",
        "Pickle",
        "Peaches",
        "Blueberry",
        "Caramel",
        "Cotton",
        "Candy",
        "Cinnamon",
        "S'mores",
        "Tootsie",
        "Sushi",
        "Waffles",
        "Nugget",
        "Popcorn",
        "Muffin",
        "Pudding",
        "Sprinkles",
        "Whiskers",
        "Socks",
        "Paws",
        "Furry",
        "Whiskers",
    ];

    const [petName, setPetName] = useState("Blob");
    const [buttonText, setButtonText] = useState("Copy");

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function handleCopy(){
    navigator.clipboard.writeText(petName);
    setButtonText("Copied!")
    setTimeout(()=>setButtonText("Copy"),2000)
    }

    const handleOnClick = () => {
        const rndInt = randomIntFromInterval(0, petNames.length - 1);
        const newName = petNames[rndInt];
        setPetName(newName);
    };

    return (
        <div className="main">
            <div className="panel">
                <div className="top">
                    <img className="logo" src={valheimLogo} alt="logo"></img>
                    <h2>Generate a Random Pet Name</h2>
                </div>
                <span id="pet-name" className="glow">{petName}</span>
                <div className="button-grid">
                    <Button
                        id="generate-btn"
                        onClick={() => handleOnClick()}
                    >
                        Generate Name
                    </Button>
                    <Button
                        id="copy-btn"
                        onClick={() => handleCopy()}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
