import styled from "styled-components"
import fotos from "./fotos.json"

const Figure = styled.figure`   
width: ${(props) => (props.$expandida ? '90%' : '460px')};

`

const Imagem = () => {
    return (
        <Figure key={fotos.id} src={fotos.path}>
            <h3>titulo</h3>
            <footer>
                <p>fonte</p>
                <button>favorito</button>
                <button>Expandir</button>
            </footer>
        </Figure>
    )
}

export default Imagem