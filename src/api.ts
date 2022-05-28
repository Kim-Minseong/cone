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

export const fetchCoinHistory = async (coinId: string) => {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 60;
    return await axios
        .get(
            `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
        )
        .then((Response) => Response.data);
};
