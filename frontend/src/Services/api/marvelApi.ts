import axios, { AxiosResponse } from 'axios';

const TMDB_API_KEY = "ca26bb0b7d85c958f98f7767df6a60b5";
const BASE_URL = 'https://api.themoviedb.org/3';

interface TMDBParams {
    [key: string]: string | number;
}

const getTMDBData = async <T>(endpoint: string, params: TMDBParams = {}): Promise<T> => {
    try {
        const requestParams = {
            ...params,
            api_key: TMDB_API_KEY,
        };

        const response: AxiosResponse<T> = await axios.get(`${BASE_URL}/${endpoint}`, {
            params: requestParams,
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching TMDB data:', error);
        throw error;
    }
};

export default getTMDBData;