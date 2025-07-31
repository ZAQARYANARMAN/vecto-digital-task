import filmsData from "../json/filmsData.json";
import { FilmDataType } from "../models/IData";

export const sortTrendingNow = () => {
    let data = JSON.parse(JSON.stringify(filmsData.TendingNow)) as FilmDataType[]
    let sortArr: FilmDataType[] = [];
    const filmsId = JSON.parse(sessionStorage.getItem("filmsId") || "[]");

    if (Array.isArray(filmsId)) {
        filmsId.reverse().forEach(id => {
            const film = data.find(filmInfo => id === filmInfo.Id);
            if (film) sortArr.push(film)
        })
    
        data = data.filter(filmInfo => !filmsId.includes(filmInfo.Id))
    }

    const sortArray = data.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()) // sort decreasing by Date
        .slice(0, 50 - sortArr.length);
        
    return [...sortArr, ...sortArray]
}

export const formatDuration = (durationInSeconds: number): string => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

    const h = hours > 0 ? `${hours}h ` : "";
    const m = minutes > 0 ? `${minutes}m` : "";

    return `${h}${m}`.trim();
};