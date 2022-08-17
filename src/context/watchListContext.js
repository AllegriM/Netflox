import { createContext, useEffect, useState } from "react"
import { collection, deleteDoc, doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";



export const watchListContext = createContext()

function WatchListContextProvider({ children }) {

    const db = getFirestore()
    const [watchList, setWatchList] = useState([])

    const onChange = () => {
        const q = collection(db, "watchlist")
        return onSnapshot(q, (querySnapshot) => {
            const movies = [];
            querySnapshot.forEach((movie) => {
                movies.push(movie.data());
            })
            return setWatchList(movies) 
        })
    }

    const addMovieToWatchList = async ({ movieID, moviePoster }) => {
            const movieAdded = {
                movieID,
                moviePoster
            }
            await setDoc(doc(db, "watchlist", `${movieID}`), movieAdded)
            onChange()
        }

        const removeMovieFromWatchList = async (movieID) => {
            await deleteDoc(doc(db, "watchlist", `${movieID}`));
            onChange()
        }

        useEffect(() => {
            addMovieToWatchList
            removeMovieFromWatchList
            onChange
            
        }, [addMovieToWatchList, removeMovieFromWatchList, onChange])

        return (
            <watchListContext.Provider value={{
                watchList,
                onChange,
                addMovieToWatchList,
                removeMovieFromWatchList
            }}>
                {children}
            </watchListContext.Provider>
        )
    }

    export default WatchListContextProvider