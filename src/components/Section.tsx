import bitImg from '../images/bitcoin-3227945_640.png';
import etherImg from '../images/ethereum-6286124_640.jpg';
import blockChain from '../images/touch-screen-6091015_640.jpg';
import styled from 'styled-components';

const SectionStyled = styled.section`
    max-width: 1600px;
    width: 100%;
    height: 50vh;
    display: flex;
    margin: 10em 0;
    justify-content: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 15px;
    img {
        width: 50%;
        border-radius: 15px;
    }
    .under-hero__content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* padding-right: 11em; */
            h3 {
                flex-wrap: wrap;
                font-size: 26px;
                font-weight: bold;
                margin-bottom: 40px;
                text-align: center;
            }
            h4 {
                font-size: 18px;
            }
        }
    }
`;

const SectionStyledRev = styled(SectionStyled)`
    display: flex;
    flex-direction: row-reverse;
    img {
        /* padding-right: 5em; */
    }
    .under-hero__content {
        div {
        }
    }
`;

const Section = () => {
    return (
        <>
            <SectionStyled>
                <img src={bitImg} alt="bit" />
                <div className="under-hero__content">
                    <div>
                        <h3>Although Bitcoin halving few token</h3>
                        <h4>
                            ether waited many protocol. Waves could be few quick
                            fork during a bear, or blockchain could be few
                            crypto-jacking at many private key because Tezos
                            stacks a.
                        </h4>
                    </div>
                </div>
            </SectionStyled>
            <SectionStyledRev>
                <img src={etherImg} alt="bit" />
                <div className="under-hero__content">
                    <div>
                        <h3>Ether forgot lots of validator at lots of fiat</h3>
                        <h4>
                            because they built some dormant moon, yet Ontology
                            did many vaporware. Binance Coin formed few proof of
                            authority of few REKT! Dash detected
                        </h4>
                    </div>
                </div>
            </SectionStyledRev>
            <SectionStyled>
                <img src={blockChain} alt="bit" />
                <div className="under-hero__content">
                    <div>
                        <h3>
                            Blockchain rejoins lots of dormant node during a
                            hardware wallet.
                        </h3>
                        <h4>
                            Maker slept on the trusted delegated proof-of-stake
                            of a do your own research because Silk Road expected
                            some private chain. When Lightning!
                        </h4>
                    </div>
                </div>
            </SectionStyled>
        </>
    );
};

export default Section;
