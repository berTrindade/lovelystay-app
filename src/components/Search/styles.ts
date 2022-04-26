import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        height: 40px;
        border: 1px solid #E0E0E0;
        background-color: #FFF;
        padding: 10px;
        margin-bottom: 10px;
        font-family: 'Nunito', sans-serif;
        &::placeholder {
            font-size: 1rem;
        }
    }

    button {
        height: 40px;
        border: none;
        background-color: #dfad31;
        color: white;
        font-family: 'Nunito', sans-serif;
        cursor: pointer;
      }
`;