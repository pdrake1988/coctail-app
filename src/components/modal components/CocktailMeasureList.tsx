import useCocktailModal from "./useCocktailModal";
import {ListGroup} from "react-bootstrap";

interface CocktailMeasureListProps {
    id: number;
}
export default function CocktailMeasureList(props: CocktailMeasureListProps) {
    const cocktailDetails = useCocktailModal(props.id);
    return (
        <ListGroup as={'ul'} className={'mx-auto'}>
            {cocktailDetails?.strMeasure1 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure1}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure2 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure2}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure3 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure3}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure4 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure4}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure5 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure5}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure6 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure6}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure7 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure7}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure8 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure8}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure9 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure9}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure10 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure10}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure11 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure11}
                </ListGroup.Item> }
            {cocktailDetails?.strMeasure12 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure12}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure13 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure13}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure14 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strIngredient14}
                </ListGroup.Item>}
            {cocktailDetails?.strMeasure15 !== null &&
                <ListGroup.Item as={'li'} className={'text-center'}>
                    {cocktailDetails?.strMeasure15}
                </ListGroup.Item>}
        </ListGroup>
    )
}
