import {Modal} from "react-bootstrap";
import CocktailIngredientsList from "./CocktailIngredientsList";
import useCocktailModal from "./useCocktailModal";
import CocktailMeasureList from "./CocktailMeasureList";

interface CocktailModalProps {
    id: number;
    show: boolean;
    onClose(hide: boolean): void;
}
export default function CocktailModal(props: CocktailModalProps) {
    const cocktailDetails = useCocktailModal(props.id);
    return (
        <Modal show={props.show}
               onHide={props.onClose}
               backdrop={"static"}
               keyboard={false}>
            <Modal.Header closeButton={true}>
                <div className={'d-flex flex-row'}>
                    <Modal.Title className={'mx-3'}>{cocktailDetails?.strDrink}</Modal.Title>
                    <img className={'mx-3 img-fluid'} src={cocktailDetails?.strDrinkThumb + '/preview'}
                         alt={ cocktailDetails?.strDrink}/>
                </div>
            </Modal.Header>
            <Modal.Body className={'d-flex flex-row'}>
                <CocktailIngredientsList id={props.id}/>
                <CocktailMeasureList id={props.id}/>
            </Modal.Body>
            <Modal.Footer>
                <p className={'text-center'}>{cocktailDetails?.strInstructions}</p>
            </Modal.Footer>
        </Modal>
    );
}
