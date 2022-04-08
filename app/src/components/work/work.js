import styled from "styled-components";

const Container = styled.div`
    background-color: hsl(15, 100%, 70%);
    height: 30vh;
    width: 30vh;
    grid-area: work;
    padding-right: 15px;
    border-radius: 10px;
    align-items: flex-end;
    justify-content: end;
`
export const Img = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const Info = styled.div`
    height: 58%;
    width: 100%;
    background-color: hsl(235, 46%, 20%);
    border-radius: 10px;
    position: relative;
`
export default Container;
