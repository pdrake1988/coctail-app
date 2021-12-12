import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import Drinks from "./components/Drinks";
import Cocktail from './components/Cocktail';

function App() {
    document.body.classList.add('bg-primary');
    const [urlParam, setUrlParam] = useState("");
    const [paramType, setParamType] = useState("Popular")
    const [char, setChar] = useState("");
    const [cocktails, setCocktails] = useState([]);
    function setParams(param: string, paramType: string, char: string) {
        if(paramType === "Search") {
            fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?${char}=${param}`)
                .then(data => data.json()).then(results => {
                console.log(results.drinks);
                setCocktails(results.drinks);
            })
        } else if(paramType === "Latest") {
            fetch("https://www.thecocktaildb.com.com/api/json/v2/9973533/latest.php")
                .then(data => data.json()).then(results => {
                    console.log(results.drinks);
                    setCocktails(results.drinks);
            })
        } else if(paramType === "Random") {
            fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
                .then(data => data.json()).then(results => {
                console.log(results.drinks);
                setCocktails(results.drinks);
            });
        } else {
            fetch("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
                .then(data => data.json()).then(results => {
                    console.log(results.drinks);
                    setCocktails(results.drinks);
            });
        }
    }
    useEffect(() => {
        setParams(urlParam, paramType, char);
    }, [urlParam, paramType, char]);
    return (
        <React.Fragment>
            <Header
                paramType={paramType} urlParam={urlParam} char={char}
                setUrlParam={(param: string) => setUrlParam(param)}
                setParamType={(type: string) => setParamType(type)}
                setChar={(char: string) => setChar(char)}/>
            <div className={'container'}>
                <div className={'row'}>
                    {cocktails.map((cocktail: Drinks, index: number) => {
                        return(
                            <Cocktail key={index}
                                id={cocktail.idDrink}
                                name={cocktail.strDrink}
                                image={cocktail.strDrinkThumb}/>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
  );
}

export default App;
