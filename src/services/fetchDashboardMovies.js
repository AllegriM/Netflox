import { API_URL, API_KEY } from "data/API_DATA"

export const specificMovieData = (apiResponse) => {
    if (Array.isArray(apiResponse)) {
        const movies = apiResponse.map(movie => {
            const { poster_path, backdrop_path } = movie;
            const url_image_poster = `https://image.tmdb.org/t/p/original${poster_path}`
            const url_image_backdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`
            return { ...movie, url_image_poster, url_image_backdrop }
        })
        return movies
    }
}

export const getPopularList = async () => {
	const page1Url = `${API_URL}/movie/popular?api_key=${API_KEY}`;
	const page1Response = await fetch(page1Url);
	const popularList = await page1Response.json();
	return specificMovieData(popularList.results);
};

export const getNowPlayingList = async () => {
	const page1Url = `${API_URL}/movie/now_playing?api_key=${API_KEY}`;
	const page1Response = await fetch(page1Url);
	const nowPlayingList = await page1Response.json()
	return specificMovieData(nowPlayingList.results)
};

export const getUpcomingList = async () => {
	const page1Url = `${API_URL}/movie/upcoming?api_key=${API_KEY}`;
	const page1Response = await fetch(page1Url);
	const upcomingList = await page1Response.json();
	return specificMovieData(upcomingList.results);
};

export const getTopRatedList = async () => {
	const page1Url = `${API_URL}/movie/top_rated?api_key=${API_KEY}`;
	const page1Response = await fetch(page1Url);
	const topRatedList = await page1Response.json();
	return specificMovieData(topRatedList.results);
};

export const fetchDashboardInfo = async () => {
	const [popularList, nowPlayingList, upcomingList, topRatedList] = await Promise.all([
		getPopularList(),
		getNowPlayingList(),
		getUpcomingList(),
		getTopRatedList(),
	]);
    
	return { popularList, nowPlayingList, upcomingList, topRatedList };
};