import styled from "styled-components";

const Container = styled.div`
    display: flex;
`

const Titulo1 = styled.h1`
    color: red;
`

const Country = () => {
    return (
        <Container>
        <Titulo1>Country</Titulo1>
        </Container>
    );
}

export default Country;