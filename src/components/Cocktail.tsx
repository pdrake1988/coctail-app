import {Button} from "react-bootstrap";
import React, {useState} from "react";
import CocktailModal from "./modal components/CocktailModal";

interface CocktailParams {
    id: number;
    name: string;
    image: string;
}
export default function Cocktail(props: CocktailParams) {
    const [show, setShow] = useState(false);
    return(
        <React.Fragment>
            <CocktailModal id={props.id} show={show} onClose={() => setShow(false)}/>
            <div className={'col-3'}>
                <Button onClick={() => setShow(true)}><img className={'img-fluid'} src={`${props.image}/preview`} alt={'Cocktail thumb'}/></Button>
                <h4 className={'text-center'}>{props.name}</h4>
            </div>
        </React.Fragment>
    )
}
