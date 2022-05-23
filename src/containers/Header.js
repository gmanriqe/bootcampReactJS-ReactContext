
import { useContext } from 'react'
import styled from 'styled-components'
import StyledSpan from '../elements/StyledSpan'
import CircleImage from '../elements/CircleImage'
import { PrimaryButtonStyle, LinkPrimaryButtonStyle, LinkSecondaryButtonStyle } from '../collections/buttons'
import Container from '../elements/Container'
import { UserContext } from '../context/UserContent'

const Header = ({ className }) => {
    let articlesFromDevto = useContext(UserContext)
    return (
        <header className={className}>
            <Container>
                <ContentArea>
                    <div>
                        <h1>Bienvenid@s, soy
                            <StyledSpan>Jesús Gonzales</StyledSpan>
                            Frontend Development
                        </h1>
                        <Row>
                            <li><PrimaryButtonStyle>MIS PROYECTOS</PrimaryButtonStyle></li>
                            <li><LinkPrimaryButtonStyle href="" target="_self">DESCARGAR CV</LinkPrimaryButtonStyle></li>
                        </Row>
                        <LinkSecondaryButtonStyle>O LEE MIS ARTÍCULOS ({articlesFromDevto.length})</LinkSecondaryButtonStyle>
                    </div>
                    <figure>
                        <CircleImage src="/img/avatar.jpeg" alt="Jesús Gonzales" />
                    </figure>
                </ContentArea>
            </Container>
        </header>
    )
}

export default styled(Header)`
    padding: 63px 0;
    background: var(--primary-color);
`

const Row = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem
`;

const ContentArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`