import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header`
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderStyled>
            <img src="/img/logo.png" alt="" />
            <CampoTexto></CampoTexto>
        </HeaderStyled>
    )
}

export default Cabecalho