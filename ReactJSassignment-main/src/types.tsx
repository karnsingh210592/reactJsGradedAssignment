import {moviesData} from "./data/json/data";

export type tabsType = 'movies-in-theaters' | 'movies-coming' | 'top-rated-india' | 'top-rated-movies'
export type movieType =
    typeof moviesData['movies-in-theaters'][0] |
    typeof moviesData['movies-coming'][0] |
    typeof moviesData['top-rated-india'][0] |
    typeof moviesData['top-rated-movies'][0]
