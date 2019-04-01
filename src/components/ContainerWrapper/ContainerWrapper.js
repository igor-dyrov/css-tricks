import styled from 'styled-components';

const ContainerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 0.1fr 1fr 0.1fr;
    height: 100%;
    width: 100%;
    margin: 0;
`;

export default ContainerWrapper;
