import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width: 18rem;
    height: 24rem;
    border: 0.0625rem solid rgba(0,0,0,0.2);
    border-radius: 10px;
    box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    background-color: darkslategrey;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0.3rem 0.3rem 0.3rem rgba(0,0,0,0.3);
    }
`;

export const StyledMovieImage = styled.img`
    width: auto;
    height: 80%;
    border: solid orange;
    border-radius: 15px;
`;

export const StyledText = styled.p`
    color: orange;
    margin: 5%;
    font-size: 1.2rem;
`;

export const StyledHeading = styled.h1`
    color: white;
    font-size: 2rem;
`;

/* export const StyledRelease = styled.div`
    font-size: 0.7rem;
    color: white;
`; */