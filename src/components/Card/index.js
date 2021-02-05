import React from 'react';
import {useHistory} from 'react-router-dom';
// import "./Card.style.css";

// import {Image} from '../Image';
import {StyledCardWrapper, StyledText, StyledRelease, StyledMovieImage} from "./Card.style";

// (1)
// const cardStyle = {
//     color: "red"
// }

// export const Card = ({title, poster_path, release_data}) => {
//     return (
//         <StyledCardWrapper>
//             <StyledMovieImage src={poster_path} alt={"Movie Poster"}/>
//             <StyledText>{title}</StyledText>
//             <StyledRelease>Release Date: {release_date}</StyledRelease>
//         </StyledCardWrapper>
//     )
// }

export const Card = (props) => {
    const history = useHistory();

    return (
        // <div style={cardStyle}> (1)

        // (2)
        // <div style={{color: 'red'}}>

        // (3)
        // <div className='card-wrapper'>
        //     <p>CARD</p>
        // </div>

        // (4)
        <StyledCardWrapper onClick={()=>history.push(`/detail/${props.id}`)}>
            <StyledMovieImage src={props.poster_path} alt={"Movie Poster"}/>
            <StyledText>{props.title}</StyledText>
            {/* <StyledRelease>Release Date: {props.release_date}</StyledRelease> */}
        </StyledCardWrapper>
    )
}

// object styling (1)
// inline styling (2)
// CSS Stylesheet (3)
// style component (4)
