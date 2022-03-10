import {ListGroup} from "react-bootstrap";
import useCocktailModal from "./useCocktailModal";
interface DetailsListProps {
    id: number;
}
export default function CocktailIngredientsList(props: DetailsListProps) {
    const cocktailDetails = useCocktailModal(props.id);
    return (
        <ListGroup as={'ul'} className={'mx-auto'}>
            {cocktailDetails?.strIngredient1 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient1}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient2 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient2}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient3 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient3}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient4 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient4}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient5 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient5}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient6 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient6}0
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient7 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient8}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient8 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient8}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient9 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient9}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient10 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient10}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient11 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient11}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient12 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient12}
                </ListGroup.Item> }
            {cocktailDetails?.strIngredient13 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure13}
                </ListGroup.Item>}
            {cocktailDetails?.strIngredient14 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient14}
                </ListGroup.Item> }
            {cocktailDetails?.strIngredient15 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient15}
                </ListGroup.Item>}
        </ListGroup>
    );
}
