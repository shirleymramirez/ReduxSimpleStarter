import axios from 'axios';

const API_KEY = '329e51714e606b5e94d875af875cd4a4';

const URL_ROOT = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

//fetchWeather will be responsible for creating action that contains a request to the back end API
//takes in city, which is a string and uses it as part of the search query
export function fetchWeather(city) {
	const url = `${URL_ROOT}&q=${city},us`;

	//used axios library which uses ajax method in the form of get request to get the URL
	//and return a promise
	const request = axios.get(url);


	return {
		type: 'FETCH_WEATHER',
		payload: request
	};
}