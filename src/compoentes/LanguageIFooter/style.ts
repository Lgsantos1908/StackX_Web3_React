import styled from 'styled-components'

export const Container = styled.div`
        margin-top: 5rem;
        padding: 1rem 5rem;
        display: flex;
        align-items: center;
        justify-content:center;
    button {
        height: 3.1rem;
        background: var(--dark-400);
        border-radius: 0.8rem;
        border: none;
        padding: 1.5rem;
        margin-left: 3rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }


        img {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
        }
        p {
            font-size: 1.2rem;
            color: var(--white-400);
        }
    }  
`;