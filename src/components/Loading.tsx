import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

const Loading = () => {
    return (
        <LoadingContainer>
            <Spinner />
        </LoadingContainer>
    );
};

export default Loading;
