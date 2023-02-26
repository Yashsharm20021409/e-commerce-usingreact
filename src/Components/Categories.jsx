import styled from "styled-components"
import {categories} from '../data'
import CategoriesItem from "./CategoriesItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Heading = styled.h1`
    /* margin-bottom: px; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-size: 50px;
    font-weight: 400;
    /* margin-left: 22px; */
`

const Categories = () => {
  return (
    <>
    <Heading>Categories</Heading>
    <Container>
        
        {categories.map(item =>(
            <CategoriesItem item={item}/>
        ))}
    </Container>
    </>
  )
}

export default Categories