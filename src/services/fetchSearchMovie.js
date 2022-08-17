import { API_KEY } from "data/API_DATA";

export const fetchSearchMovie = async (keyword) => {
	const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`);
	const data = await response.json();
	return data;
};