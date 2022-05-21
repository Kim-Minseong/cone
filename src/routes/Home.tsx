import styled from 'styled-components';
import { ICoin } from '../coin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Section from '../components/Section';

const Wrapper = styled.div``;

const Title = styled.h1`
    font-size: 32px;
`;

const CoinList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 20px 30px;
    justify-items: center;
    a {
        width: 100%;
    }
`;
const Coin = styled.div`
    background-color: red;
    width: 100%;
    height: 200px;
`;

const Home = () => {
    const [coins, setCoins] = useState<ICoin[]>([]);
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     axios
    //         .get('https://api.coinpaprika.com/v1/coins')
    //         .then((Response) => setCoins(Response.data.slice(0, 12)));
    //     setLoading(false);
    // }, []);
    return (
        <Wrapper>
            <Header></Header>
            <Section></Section>
            Article
            {/* {loading ? (
                'loading...'
            ) : (
                <CoinList>
                    {coins.map((coin) => (
                        <Link to={`/coins/${coin.id}`} key={coin.id}>
                            {coin.name}
                            <Coin></Coin>
                        </Link>
                    ))}
                </CoinList>
            )} */}
        </Wrapper>
    );
};

export default Home;
