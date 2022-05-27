import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const fetchCoins = async () => {
    return await axios
        .get(`${BASE_URL}/coins`)
        .then((Response) => Response.data);
};

export const fetchCoinInfo = async (coinId: string) => {
    return await axios
        .get(`${BASE_URL}/coins/${coinId}`)
        .then((Response) => Response.data);
};

export const fetchPriceInfo = async (coinId: string) => {
    return await axios
        .get(`${BASE_URL}/tickers/${coinId}`)
        .then((Response) => Response.data);
};
