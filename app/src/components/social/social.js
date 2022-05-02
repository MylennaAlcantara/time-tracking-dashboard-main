import styled from "styled-components";

const Container = styled.div`
    background-color: hsl(264, 64%, 52%);
    height: 30vh;
    width: 30vh;
    grid-area: social;
    padding-right: 15px;
    border-radius: 10px;
    align-items: flex-end;
    justify-content: end;
`
export const Img = styled.div`
    height: 20%;
    display: flex;
    justify-content: flex-end;
    position: relative;

`
export const Info = styled.div`
    height: 80%;
    width: 108%;
    background-color: hsl(235, 46%, 20%);
    border-radius: 10px;
    position: relative;
`

export default Container;