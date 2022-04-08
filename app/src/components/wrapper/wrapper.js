import styled from 'styled-components';

const Container = styled.div`
    height: 50vh;
    width: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
    "profile work play study"
    "profile exercise social self-care";
    row-gap: 1.5rem;
    column-gap: 1.5rem;   
    @media (max-width: 500px){
        height: 50vh;
        width: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(7, 1fr);
        grid-template-areas:
        "profile"
        "work"
        "play"
        "study"
        "exercise"
        "social"
        "self-care";
    }
`
    

export default Container;