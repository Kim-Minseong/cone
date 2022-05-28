import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchCoinInfo, fetchPriceInfo } from '../api';
import Chart from '../components/Chart';

interface ILocation {
    state: {
        coinId: string;
        coinName: string;
    };
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

const Wrapper = styled.div`
    padding: 0 5em;
`;

const CoinStyled = styled.div`
    margin: 5em 0;
    display: flex;
    justify-content: center;
`;

const Coin = () => {
    const {
        state: { coinId, coinName },
    } = useLocation() as ILocation;

    const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
        ['info', coinId],
        () => fetchCoinInfo(coinId)
    );
    const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
        ['price', coinId],
        () => fetchPriceInfo(coinId)
    );

    return (
        <>
            <Header></Header>
            <Wrapper>
                <CoinStyled></CoinStyled>
                <Chart></Chart>
            </Wrapper>
        </>
    );
};

export default Coin;
