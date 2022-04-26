import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1440px) {
        padding-bottom: 90px;
    }

    form {
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: auto;

        @media screen and (min-width: 568px) {
            height: auto;
            padding: 0 50px;
          }
      
          @media screen and (min-width: 768p) {
            height: 170px;
          }
      
          @media screen and (min-width: 1024px) {
            flex-direction: row;
            justify-content: center;
            height: 70px;
            padding: 0 70px;
          }
      
          @media screen and (min-width: 1440px) {
            height: 70px;
            padding: 0 250px;
            margin-top: 50px;
          }
      
          @media screen and (min-width: 1920px) {
            height: 100px;
            padding: 0 300px;
          }
    }

    input {
        height: 40px;
        border: 1px solid #E0E0E0;
        background-color: var(--light-color);
        padding: 10px;
        margin-bottom: 10px;
        font-family: 'Nunito', sans-serif;
    
        @media screen and (min-width: 568px) {
            margin-bottom: 20px;
        }
    
        @media screen and (min-width: 768px) {
            height: 40%;
            font-size: 1.2rem;
        }

        @media screen and (min-width: 1024px) {
            width: 70%;
            height: 100%;
            margin: 0;
        }

        @media screen and (min-width: 1440px) {
            font-size: 1.9rem;
        }
        &::placeholder {
            font-size: 1rem;
        }
    }

    button {
        height: 40px;
        border: none;
        background-color: var(--golden);
        color: var(--white);
        
        font-family: 'Nunito', sans-serif;
        cursor: pointer;

        @media screen and (min-width: 768px) {
            height: 40%;
            font-size: 1.2rem;
        }
    
        @media screen and (min-width: 1024px) {
            height: 100%;
            width: 20%;
            font-size: 1.5rem;
        }
    }
}
`;

export const ErrorMessage = styled.div`
  color: red;
  margin: 20px 0 0 0;
  text-align: center;
`