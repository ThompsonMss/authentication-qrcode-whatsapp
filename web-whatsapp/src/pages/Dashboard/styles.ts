import styled from "styled-components";

export const Container = styled.div`

    background-color: var(--color-card);

    height: 100vh;

    header {

        display: flex;
        align-items: center;
        justify-content: center;

        height: 13.75rem;
        
        background-color: var(--color-primary);
        padding: 0 20px;

        h1 {
            color: white;
            font-size: 2rem;
            font-weight: 400;
        }
    }


    main {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: calc(100vh - 13.75rem);

        padding: 0 20px;

        gap: 2rem;

        p {
            font-size: 2rem;
            text-align: center;
            color: #3e3e3e;

            @media (max-width: 768px){
                font-size: 1.5rem;
            }
        }

        button {

            outline: none;
            border: none;

            width: 100px;
            height: 60px;
            border-radius: 8px;
            background-color: #ccc;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            &:hover {
                background-color: #ddd;
            }

            span {
                font-size: 1.2rem;
                text-transform: uppercase;
                color: #3e3e3e;
            }
        }
    }

`;

export const ContainerLoad = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;

    background-color: var(--color-card);
`;