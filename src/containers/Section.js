// styled
import styled from 'styled-components'

// components
import { useContext } from 'react'
import CardPost from '../blocks/CardPost'
import DevChange from '../blocks/DevChange'
import Container from '../elements/Container'

// context
import { UserContext } from '../context/UserContext'
import { ThemeContext } from '../context/ThemeContext'

const ContentArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;

    & article {
        margin-right: 2.1276595745%;
        margin-bottom: 20px;
    }
    & article:nth-child(3n+3) {
        margin-right: 0
    }
`

const InnerContainer = styled.div`
    padding: 60px 0;
    background-color: ${props => (props.theme.colors && props.theme.colors.background_)};
    & h2 {
        color: ${props => (props.theme.colors && props.theme.colors.color_)};
        margin-bottom: 15px;
        & span {
            color: var(--secondary-color);
            text-decoration: underline;
        }
    }
`;

const Section = () => {
    let [user] = useContext(UserContext)
    let [theme] = useContext(ThemeContext);

    return (
        <InnerContainer theme={theme}>
            <Container>
                <div>
                    <h2>MIS POST EN {' '}
                        <span>Dev.To</span>
                    </h2>
                    <DevChange />
                    <ContentArea>
                        {
                            user.articlesFromDevto.map(article => (
                                <CardPost key={article.id} article={article}></CardPost>
                            ))
                        }
                    </ContentArea>
                </div>
            </Container>
        </InnerContainer>
    )
}

export default Section;