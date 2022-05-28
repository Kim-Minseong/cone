import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import Loading from './Loading';

interface ICoinHistory {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

const Chart = () => {
    const { coinId } = useParams();
    const { isLoading, data } = useQuery<ICoinHistory[]>(
        ['ohlcv', coinId],
        () => fetchCoinHistory(coinId!)
    );
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            data: data?.map((price) => [
                                new Date(price.time_open).getTime(),
                                price.open.toFixed(2),
                                price.high.toFixed(2),
                                price.low.toFixed(2),
                                price.close.toFixed(2),
                            ]) as any,
                        },
                    ]}
                    options={{
                        plotOptions: {
                            candlestick: {
                                colors: {
                                    upward: '#DF7D46',
                                    downward: '#3C90EB',
                                },
                            },
                        },
                        // chart: {
                        //     width: '500',
                        //     height: '500',
                        // },
                        grid: { show: false },

                        xaxis: {
                            axisTicks: { show: false },
                            labels: { show: false },
                        },
                    }}
                />
            )}
        </>
    );
};

export default Chart;
