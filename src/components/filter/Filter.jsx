import React, { useState } from "react";
import "./filter.css";
import {Button, Search, Segment} from "semantic-ui-react";

function Filter({allItems, childToParent}){

    let allData = allItems;
    function filtrar(section,result){
        return result.filter(item => item.section === section)
    }

    return(
        <Segment.Inline id="filterButtons">
            <Button id="btn1" className="filter button"
                    onClick={(e)=>{
                        childToParent(allData)
                    }}>All Products</Button>

            <Button id="btn2" className="filter button"
                    onClick={(e)=>{
                            childToParent(filtrar("skin", allData))
                    }}>Skin Care</Button>

            <Button id="btn3" className="filter button"
                    onClick={(e)=>{
                        childToParent(filtrar("body", allData))
                    }}>Body Care</Button>

            <Button id="btn4" className="filter button"
                    onClick={(e)=>{
                        childToParent(filtrar("perfume", allData))
                    }}>Perfume</Button>

            <Button id="btn5" className="filter button"
                    onClick={(e)=>{
                        childToParent(filtrar("makeup", allData))
                    }}>Make Up</Button>
            {/*<Search/> need to be done*/}
        </Segment.Inline>
    )
}
export default Filter;