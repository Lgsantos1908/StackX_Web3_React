import styled from "styled-components";

export const Container = styled.div`
    background: var(--dark-400);
    display: flex;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 5rem;
`;


export const LogoImage = styled.img`
    padding: 5px 8px;
    background: var(--dark-300);
    border-radius: 8px;
    cursor: pointer;
    transition: filter 0.2s;
         
        &:hover{
            filter: brightness(0.9);
        }
`;
