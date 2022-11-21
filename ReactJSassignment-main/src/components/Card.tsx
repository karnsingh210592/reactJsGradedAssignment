import {movieType} from "../types";
import * as React from "react";
import {LinkBox} from "@chakra-ui/react";
import {
    Box, Button,
    Text,
    Image, LinkOverlay,
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons";

export const Card = ({movieData, favs, setFavs}: {movieData: movieType, favs: movieType[], setFavs:  React.Dispatch<React.SetStateAction<movieType[]>>}) => {
    return <LinkBox >
        <LinkOverlay href={`/movies/${movieData.title}`}></LinkOverlay>
        <Box boxSize='sm'>
          <Image  boxSize='100%' objectFit='fill' src={movieData.posterurl} alt={movieData.title} />
        </Box>
        <Box>
            <Text color={'gray.400'} fontSize={'xl'} my={5}>{movieData.title}</Text>
        </Box>
        <Button
            onClick={()=> {
                if(!favs.includes(movieData)) {
                    setFavs([...favs, movieData])
                    localStorage.setItem('favs', JSON.stringify([...favs, movieData]))
                }
                else {
                    setFavs(favs.filter(f => f.title !== movieData.title))
                    localStorage.setItem('favs', JSON.stringify(favs.filter(f => f.title !== movieData.title)))
                }
            }}
            rightIcon={<StarIcon boxSize={6} color={favs.map(f => f.title).includes(movieData.title) ? 'red.400': ''}/>}
            aria-label={'Add to Favourites'}>
            {
                favs.map(f => f.title).includes(movieData.title) ?
                <Text color={'gray.300'}>Remove from favourites</Text>:
                <Text color={'gray.300'}>Add to Favourites</Text>
            }
        </Button>
    </LinkBox>
}