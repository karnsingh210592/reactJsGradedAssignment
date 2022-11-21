import {moviesData} from "./data/json/data";
import {tabsType} from "./types";

export const tabsData: { label: string, value: tabsType }[] = [
    {label: 'Movies in Theatres', value: 'movies-in-theaters'},
    {label: 'Coming Soon', value: 'movies-coming'},
    {label: 'Top Rated Indian', value: 'top-rated-india'},
    {label: 'Top Rated Movies', value: 'top-rated-movies'},
]
export const TABS = tabsData.map(t => t.label)
export const utils = (searchKeyword: string) => {
    const updatedMovieList = {...moviesData}
    if (searchKeyword.length === 0) {
        return moviesData
    }
    tabsData.forEach(t => {
        // @ts-ignore
        return updatedMovieList[t.value] = updatedMovieList[t.value].filter(m => m.title.toLowerCase().startsWith(searchKeyword));
    })
    return updatedMovieList
}