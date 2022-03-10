import CocktailUrlParams from "../interfaces/CocktailUrlParams";

export default function cocktailReducer(prevState: CocktailUrlParams, paramType: string) {
    let state = {...prevState}
    switch (paramType) {
        case 'Popular Cocktails':
            state.baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php";
            break;
        case 'Latest Cocktails':
            state.baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";
            break;
        case 'Random Selection of Cocktails':
            state.baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";
            break;
        case 'Search Cocktails by Name':
            state.baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php";
            state.urlParam = 's';
            break;
        case 'Search Cocktails by First Letter':
            state.baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php";
            state.urlParam = 'f';
            break;
        case 'Search Cocktails by Ingredient':
            state.baseUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php";
            state.urlParam = 'i';
            break;
        default:
            state.baseUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php';
    }
    return state;
}
