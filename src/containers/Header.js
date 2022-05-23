import styled from 'styled-components'
import { useContext } from 'react'
import StyledSpan from '../elements/StyledSpan'
import CircleImage from '../elements/CircleImage'
import Container from '../elements/Container'
import { PrimaryButtonStyle, LinkPrimaryButtonStyle, LinkSecondaryButtonStyle } from '../collections/buttons'
import { UserContext } from '../context/UserContext'

const Row = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 16px 0;
`;

const ContentArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const Header = ({ className }) => {
    let [user] = useContext(UserContext)

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
                            <li><LinkPrimaryButtonStyle href="/pdf/cv_jesusgonzales.pdf" download>DESCARGAR CV</LinkPrimaryButtonStyle></li>
                        </Row>
                        <LinkSecondaryButtonStyle>O LEE MIS ARTÍCULOS '{user.articlesFromDevto.length}'</LinkSecondaryButtonStyle>
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
    & h1 {
        color: var(--color-white);
    }
`