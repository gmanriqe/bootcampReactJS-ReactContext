import styled from 'styled-components'
import StyledSpan from '../elements/StyledSpan'
import CircleImage from '../elements/CircleImage'
import  {PrimaryButtonStyle, LinkPrimaryButtonStyle} from '../collections/buttons'

const Header = ({ className }) => {
    return (
        <header className={className}>
            <div>
                <h1>Bienvenid@s, soy
                    <StyledSpan>Jesús Gonzales</StyledSpan>
                    Frontend Development
                </h1>
                <Row>
                    <li><PrimaryButtonStyle>MIS PROYECTOS</PrimaryButtonStyle></li>
                    <li><LinkPrimaryButtonStyle href="" target="_self">DESCARGAR CV</LinkPrimaryButtonStyle></li>
                </Row>
            </div>
            <figure>
                <CircleImage src="/img/avatar.jpeg" alt="Jesús Gonzales" />
            </figure>
        </header>
    )
}
export default styled(Header)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 63px 0;
`

const Row = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem
`;