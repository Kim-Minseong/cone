import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import { ICoin } from '../coin';
import styled from 'styled-components';

interface ILocation {
    state: {
        coinId: string;
        coinName: string;
    };
}

const Wrapper = styled.div`
    padding: 0 5em;
`;

const CoinStyled = styled.div`
    margin: 10em 0;
    display: flex;
    justify-content: center;
`;

const Coin = () => {
    const [loading, setLoading] = useState(true);

    // change object type usestate with typescript.
    const [coin, setCoin] = useState<ICoin>();
    const [price, setPrice] = useState();

    const {
        state: { coinId, coinName },
    } = useLocation() as ILocation;
    useEffect(() => {
        (async () => {
            await axios
                .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
                .then((Response) => setCoin(Response.data));
            await axios
                .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
                .then((Response) => setPrice(Response.data));
            setLoading(false);
        })();
    }, []);
    return (
        <>
            <Header></Header>
            <Wrapper>
                <CoinStyled>{coinName}</CoinStyled>
            </Wrapper>
        </>
    );
};

export default Coin;
