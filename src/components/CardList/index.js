import {useContext} from 'react';
import {MovieContext} from "../../Movie";
import {Card} from '../Card';
import { StyledCardList } from './CardList.style';

export const CardList = () => {
    const {movieData, baseImageUrl} = useContext(MovieContext);

    return (
        <StyledCardList>
            { movieData && movieData.map(
                (movie, index) => (
                <Card
                    key={index}
                    title={movie.title}
                    // release_date={movie.release_date}
                    poster_path={baseImageUrl.concat(movie.poster_path)}
                    id={movie.id}
                    // poster_path={baseImageUrl + movie.poster_path}
                />)
            )}
        </StyledCardList>
    )
}