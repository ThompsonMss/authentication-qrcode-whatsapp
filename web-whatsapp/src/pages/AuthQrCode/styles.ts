import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--color-background);

    height: 100vh;

    header {

        background-color: var(--color-primary);

        height: calc(13.75rem - 3rem);

        padding-top: 3rem;
    }
`;

export const Package = styled.div`

    max-width: 980px;

    padding: 0 20px;

    margin: 0 auto;
`;

export const Header = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    gap: .9rem;

    img {

    }

    p {
        color: white;
        font-weight: bold;
        font-size: 1.5rem;

        text-transform: uppercase;
    }
`;

export const Card = styled.main`
    
    background-color: white;

    margin-top: -5.4rem;

    padding: 3rem;
    border-radius: 4px;

    box-shadow: 0 17px 50px 0 rgb(11 20 26 / 19%), 0 12px 15px 0 rgb(11 20 26 / 24%);

`;

export const DescOrientation = styled.div`

    display: flex;
    flex-direction: column;
    flex: 1 1 300px;

    h1 {
        color: #41525d;
        font-weight: 200;
        font-size: 1.75rem;
        margin-bottom: 2rem;
    }

    p{
        color: #41525d;
        font-size: 1.1rem;

        & + p {
            margin-top: 1.2rem;
        }
    }
`;

export const ContainerQrCode = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    flex: 1;

    margin-top: 4rem;
`;
