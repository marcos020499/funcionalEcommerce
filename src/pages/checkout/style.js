import style from "styled-components";

export const ContainerCheck = style.div`
    width: 62%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vw 20vw 0 20vw;
    padding: 2vw;
    text-align: center;
    border: 3px solid #572364;
    @media screen and (max-width: 768px) {
        width: 90%;
        margin: 2vw;
        display: flex;
        justify-content: space-between;
        min-height: 80vh;
    }
`;
export const Header = style.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;
export const Block = style.div`
    text-transform: capitalize;
    width: 23%;
`;
export const Total = style.div`
    font-size: 36px;
`;
