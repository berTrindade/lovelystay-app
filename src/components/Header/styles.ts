import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 0 20px;
    background-color: $light-color;
    box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.26);
    -webkit-box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.26);
    -moz-box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.26);


    svg {
        font-size: 1.5rem;
        margin: 10px;
        color: $main-color;

        @media screen and (min-width: $small-devices) {
        font-size: 2rem;
        }

        @media screen and (min-width: $large-devices) {
        font-size: 2.5rem;
        }

        &:hover {
        color: $background-color;
        }
    }
`;
