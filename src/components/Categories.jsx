import React from 'react';
import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
display: flex;
padding: 10px;`;

const Categories = () => {
    return (
        <>
            <Container>
                {categories.map(item => (item.id < 4 &&
                        <CategoryItem item={item} key={item.id}/>
                    )
                )}
            </Container>
            <Container>
                {categories.map(item => (item.id > 3 && item.id < 7 &&
                        <CategoryItem item={item} key={item.id}/>
                    )
                )}
            </Container>
        </>
    );
};

export default Categories;