import * as React from "react"
import {useState} from "react"
import {
    Box,
    ChakraProvider,
    Grid,
    GridItem,
    Input,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    theme,
} from "@chakra-ui/react"

import { moviesData} from './data/json/data';
import {movieType} from "./types";
import {TABS, tabsData, utils} from "./utils";
import {Card} from "./components/Card";

const TabHeaders = ({text}: {text: string}) => {
  return <Box>
    <Text px={5}>{text}</Text>
  </Box>
}

export const App = () => {
    const [currMoviesList, setCurrMoviesList] = useState<typeof moviesData>(moviesData);
    const [favs, setFavs] = useState<movieType[]>(JSON.parse(localStorage.getItem('favs') || '[]'));
    return <ChakraProvider theme={theme}>
        <Tabs isFitted>
            <TabList>
                {TABS.map(t => <Tab><TabHeaders text={t}/></Tab>)}
                <Tab>Favourites</Tab>
            </TabList>
            <Box py={2} my={1}>
                <Input onChange={e=>setCurrMoviesList(utils(e.target.value))} px={2} variant={'flushed'} placeholder='Search for movie titles...'/>
            </Box>
            <TabPanels>
                {tabsData.map((t: typeof tabsData[0]) =>
                    <TabPanel>
                        <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                            {currMoviesList[t.value].map(m => <GridItem><Card favs={favs} setFavs={setFavs} movieData={m}/></GridItem>)}
                        </Grid>
                    </TabPanel>
                )}
                <TabPanel>
                    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                        {favs.map(m => <GridItem><Card favs={favs} setFavs={setFavs} movieData={m}/></GridItem>)}
                    </Grid>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </ChakraProvider>
}
