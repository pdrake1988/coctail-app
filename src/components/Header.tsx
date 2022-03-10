import {FormControl, InputGroup, SplitButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import React, {useRef, useState} from "react";

interface Params {
    setParams(paramType: string): void
}
export function Header(props: Params) {
    const [title, setTitle] = useState("Popular Cocktails");
    const searchParam = useRef<HTMLInputElement | null>(null);
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <InputGroup className={'text-start'}>
                        <SplitButton variant={'danger'} title={title} onClick={() =>
                            props.setParams(title)}>
                            <DropdownItem onClick={() => {
                                setTitle("Popular Cocktails");
                            }}>Popular Cocktails</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Search Cocktails by Name");
                            }}>Search Cocktails by Name</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Search Cocktails by First Letter");
                            }}>Search Cocktails by First Letter</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Search Cocktails by Ingredient");
                            }}>Search Cocktails by Ingredient</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Latest Cocktails");
                            }}>Latest Cocktails</DropdownItem>
                            <DropdownItem onClick={() => {
                                setTitle("Random Selection of Cocktails");
                            }}>Random Selection</DropdownItem>
                        </SplitButton>
                        <FormControl ref={searchParam}/>
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
    )
}
