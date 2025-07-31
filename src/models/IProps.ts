import React from "react"
import { FilmDataType } from "./IData"

export type TrendingNowProps = {
    setFilmId: (value: string) => void,
    setForRendering?: React.Dispatch<React.SetStateAction<boolean>>,
    forRendering?: boolean,
}

export type BlockProps = TrendingNowProps & {
    image: string,
    id: string,
}

export type FeaturedMovieProps = {
    filmId: string
}

export type ListProps = TrendingNowProps & {
    title: string,
    data: FilmDataType[] | null,
    children?: React.ReactNode
}