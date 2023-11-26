import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    max-width: 1448px;
    margin: 0 auto;
    padding: 1rem   5rem;
    
    display: flex;
    align-items: center;
    flex-direction:column;

    

    h1 {
        width: 793px;
        margin-top: 2.5rem;
        color: var(--white);
        text-align: center;
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
    }
`;

export const SkillsList = styled.div`
    width: 793px;
    height: 173px;
    margin-top: 4.5rem;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #9D4B00;
    background: var( --dark-400);

    ul {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        display: flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
    }    

    li{
        color: var(--white-400);
        font-family: Inter;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: 160%;
    }
`;