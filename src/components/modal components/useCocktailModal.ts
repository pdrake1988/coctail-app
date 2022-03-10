import {useEffect, useState} from "react";
import CocktailDetails from "../interfaces/CocktailDetails";
import axios from "axios";

export default function useCocktailModal(id: number) {
    const [cocktailDetails, setCocktailDetails] = useState<CocktailDetails>();
    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php', {
            params: {
                i: id
            }
        }).then(res => setCocktailDetails(res.data))
            .catch(err => console.log(err));
    }, [id]);
    return cocktailDetails?.drinks[0];
}
