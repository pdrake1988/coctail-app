import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import Cocktail from './components/Cocktail';
import cocktailReducer from "./components/functions/cocktailReducer";
import axios from "axios";
import CocktailDetails from "./components/interfaces/CocktailDetails";


function App() {
    document.body.classList.add('bg-primary');
    const [url, setUrl] = useReducer(cocktailReducer,
        {baseUrl: 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php', urlParam: null});
    const [cocktails, setCocktails] = useState<CocktailDetails>();
    useEffect(() => {
        axios.get(url.baseUrl, {params: url.urlParam}).then(res => setCocktails(res.data))
            .catch(err => console.log(err))
    }, [url]);
    return (
        <React.Fragment>
            <Header setParams={(params: string) => setUrl(params)}/>
            <div className={'container'}>
                <div className={'row'}>
                    {cocktails?.drinks?.map(cocktail => {
                        return(
                            <Cocktail key={cocktail.idDrink}
                                      id={cocktail.idDrink}
                                      name={cocktail.strDrink}
                                      image={cocktail.strDrinkThumb}/>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
  );
}

export default App;
