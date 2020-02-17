import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import products from '../data/products'

dom.watch()

library.add(faSearch)





export default function Search() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(products)

    useEffect(()=>{
        let searchTerm = search.toLowerCase();
        let filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        setResults(filtered);
    },[search])

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(search);
        //make some call to backend
        setSearch('');
    }

    console.log('results', results)
    return (
        <div>
            <Container onSubmit={onSubmit}>
                <Input placeholder="search" onChange={handleChange} value={search}/>
                <Icon className="fas fa-search" onClick={(e)=>onSubmit(e)}></Icon>
            </Container>
            <ResultsContainer>
                {search && results.map(result=><p>{result.name}</p>)}
            </ResultsContainer>
        </div>
    )
}

const ResultsContainer = styled.div`
    z-index: 100;
`;

const Icon = styled.i`
    // border: 1px solid red;
    font-size: 1.2rem;
    cursor: pointer;
`;

const Container = styled.form`
    border-radius: 15px;
    background: #EFEFEF;
    border: 1px solid rgba(34, 34, 34, 0.5);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    margin: 2% auto;
    &:focus-within{
        -webkit-box-shadow: inset 17px 21px 27px -24px rgba(0,0,0,0.1);
        -moz-box-shadow: inset 17px 21px 27px -24px rgba(0,0,0,0.1);
        box-shadow: inset 17px 21px 27px -24px rgba(0,0,0,0.1);
        background: #f1f1f1;
    }
`;

const Input = styled.input`
    width: 80%;
    border: none;
    margin-left: 1%; 
    outline: none;
    background: transparent;
    padding: 2% 0 2% 6%;
    font-size: 1.2rem;
`;
