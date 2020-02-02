import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 200px;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    // border: 1px solid red;
    margin: 4%;
    padding: 2%;
`;

const SubDiv = styled.div`
    // border: 1px solid red;
    height: 50%;
    margin: 0;
`;

const Button = styled.button`
    border: none;
    background: dodgerblue;
    color: white;
    width: 60%;
    padding: 6% 0;
`;

export default function Product(props) {
    const {product, add, button, remove} = props;


    return (
        <Container>
            <SubDiv>
                <h1>{product.name}</h1> 
            </SubDiv>
            <SubDiv>
                <p>${product.price}</p>
                <Button onClick={(e)=>{
                    if (button==='add to cart'){
                        add(product)
                    } else {
                        console.log('from button remove')
                        remove(product);
                    }
                        

                }}>{button}</Button>
            </SubDiv>
        </Container>
    )
}


