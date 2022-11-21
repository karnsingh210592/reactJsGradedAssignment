import {useParams} from "react-router-dom";
// @ts-ignore
import {flatMoviesData} from "../data/json/data";
import {Badge, Box, ChakraProvider, Flex, HStack, Image, Link, Stack, Text, theme} from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import * as React from "react";

export const MoviePage = () => {
    const {title} = useParams()
    // @ts-ignore
    const movieData = flatMoviesData.filter(m => m.title === title)[0]
    return <ChakraProvider theme={theme}>
        <Box px={20}>
            <Box pt={10} pb={10}>
                <Link href={'/'}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} color={'blue.300'}>
                        <ChevronLeftIcon/> Back to Home
                    </Text>
                </Link>

            </Box>
            <Flex>
                <Box w='500px'>
                    <Image boxSize='100%' objectFit='fill' src={movieData.posterurl} alt={movieData.title}/>
                </Box>
                <Box ml={10} color={'gray.400'}>
                    <Text fontWeight={'bold'} fontSize={'4xl'} as={'h1'}>
                        {movieData.title} ({movieData.year})
                    </Text>
                    <HStack mb={2}>
                        <Badge as='span' fontSize={'s'}>{movieData.duration}</Badge>
                        <Badge as='span' fontSize={'s'}>{movieData.contentRating}</Badge>
                    </HStack>
                    <Box></Box>
                    {movieData.genres.map((g: string) => <Badge mt={2} mr={2} colorScheme='green'
                                                                fontSize={'1rem'}>{g}</Badge>)}
                    <Badge ml={10} mt={2} fontSize={'1rem'}
                           colorScheme={'yellow'}>IMDb: {movieData.imdbRating || 'N/A'}</Badge>
                    <Stack mt={5}>
                        <Text fontSize={'xl'} fontWeight={'bold'}>Starring: {movieData.actors.join(', ')}</Text>
                        <Box>
                            Released on: {movieData.releaseDate}
                        </Box>
                        <Box>
                            {movieData.storyline}
                        </Box>
                        <Box>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    </ChakraProvider>
}