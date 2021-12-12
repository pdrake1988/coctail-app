import {FormControl, InputGroup, SplitButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import React, {useState} from "react";
import ErrorModal from "./ErrorModal";
interface Params {
    paramType: string;
    urlParam: string;
    char: string;
    setUrlParam(param: string): void;
    setParamType(param: string): void;
    setChar(char: string): void;
}
export function Header(props: Params) {
    const [title, setTitle] = useState("Popular Cocktails");
    const [show, setShow] = useState(false);
    function changeParams(url: string, type: string): void {
        switch (type) {
            case "Popular Cocktails":
                props.setParamType("Popular");
                props.setUrlParam("");
                props.setChar("");
                break;
            case "Search Cocktails by Name":
                props.setParamType("Search");
                props.setUrlParam(url);
                props.setChar("s");
                break;
            case "Search Cocktails by Ingredient":
                props.setParamType("Search");
                props.setUrlParam(url);
                props.setChar("i");
                break;
            case "Search Cocktails by First Letter":
                props.setParamType("Search");
                props.setUrlParam(url);
                props.setChar("f");
                break;
            case "latest Cocktails":
                props.setParamType("Latest");
                props.setUrlParam("");
                props.setChar("");
                break;
            case "Random Selection of Cocktails":
                props.setParamType("Random");
                props.setUrlParam("");
                props.setChar("");
                break;
            default:
                setShow(true);
        }
    }
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <InputGroup className={'text-start'}>
                        <SplitButton variant={'danger'} title={title} onClick={() => changeParams(props.urlParam, title)}>
                            <DropdownItem onClick={() => {
                                setTitle("Popular Cocktails");
                            }}>Popular Cocktails</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Search Cocktails by Name");
                            }}>Search Cocktails by Name</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Search Cocktails by Ingredient");
                            }}>Search Cocktails by Ingredient</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Search Cocktails by First Letter");
                            }}>Search Cocktails by First Letter</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Latest Cocktails")
                            }}>Latest Cocktails</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Random Selection of Cocktails");
                            }}>Random Selection</DropdownItem>
                        </SplitButton>
                        <FormControl onChange={(item) => props.setUrlParam(item.target.value)}/>
                    </InputGroup>
                    <ErrorModal show={show} setShow={() => setShow(false)}/>
                </div>
                <div className={'col-4'}>
                    <h1 className={'text-center'}>Cocktail App</h1>
                </div>
                <div className={'col-4'}>
                    <a className={'btn btn-success text-end'} href={'https://pdrake.me'}>Home Page</a>
                </div>
            </div>
        </div>
    )
}
