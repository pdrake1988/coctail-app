import React, {useState} from 'react';
import './App.css';
import {FormControl, InputGroup, SplitButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

function App() {
    const [urlParams, setUrlParams] = useState("popular.php");
    const [param, setParam] = useState("");
    const [char, setChar] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const [title, setTitle] = useState("Popular");
    function setParams(param: string, paramType: string, letter?: string) {
        if(paramType === "search") {
            fetch(`\`https://www.themealdb.com/api/json/v2/9973533/search.php?${letter}=${param}`)
                .then(data => data.json()).then(results => {
                console.log(results);
                setCocktails(results);
            })
        } else if(paramType === "latest") {
            fetch("https://www.themealdb.com/api/json/v2/9973533/latest.php")
                .then(data => data.json()).then(results => {
                    console.log(results);
                    setCocktails(results);
            })
        } else if(paramType === "randomselection.php") {
            fetch("https://www.themealdb.com/api/json/v2/9973533/randomselection.php")
                .then(data => data.json()).then(results => {
                console.log(results);
                setCocktails(results);
            });
        } else {
            fetch("https://www.themealdb.com/api/json/v2/9973533/popular.php")
                .then(data => data.json()).then(results => {
                    console.log(results);
                    setCocktails(results);
            });
        }
    }
    return (
        <header>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <InputGroup className={'text-start'}>
                            <SplitButton variant={'danger'} title={title}>
                                <DropdownItem onClick={() => {
                                    setUrlParams("popular.php");
                                    setTitle("Popular")
                                }}>Popular</DropdownItem>
                                <DropdownItem onClick={() => {
                                    setUrlParams("search.php");
                                    setChar("s");
                                    setTitle("Search Cocktails by Name")
                                }}>Search Cocktails by Name</DropdownItem>
                                <DropdownItem onChange={() => {
                                    setUrlParams("search.php");
                                    setChar("i");
                                    setTitle("Search Cocktails by Ingredient")
                                }}>Search Cocktails by Ingredient</DropdownItem>
                                <DropdownItem onChange={() => {
                                    setUrlParams("search.php");
                                    setChar("f");
                                    setTitle("Search Cocktails by First Letter")
                                }}>Search Cocktails by First Letter</DropdownItem>
                                <DropdownItem onClick={() => {
                                    setUrlParams("latest.php");
                                    setTitle("Latest");
                                }}>Latest</DropdownItem>
                                <DropdownItem onClick={() => {
                                    setUrlParams("randomselection.php");
                                    setTitle("Random Selection");
                                }}>Random Selection</DropdownItem>
                            </SplitButton>
                            <FormControl onChange={(item) => setParam(item.target.value)}/>
                        </InputGroup>
                    </div>
                    <div className={'col-4'}>
                        <h1 className={'text-center'}>Cocktail App</h1>
                    </div>
                    <div className={'col-4'}>
                        <a className={'btn btn-success text-end'} href={'https://pdrake.me'}>Home Page</a>
                    </div>
                </div>
            </div>
          </header>
  );
}

export default App;
