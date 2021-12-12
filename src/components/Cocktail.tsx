import {Button} from "react-bootstrap";
interface Params {
    id: number;
    name: string;
    image: string;
}
export default function Cocktail(props: Params) {
    return(
        <div className={'col-3'}>
            <a><img className={'img-fluid'} src={`${props.image}/preview`} alt={'Cocktail thumb'}/></a>
            <h4 className={'text-center'}>{props.name}</h4>
        </div>
    )
}
