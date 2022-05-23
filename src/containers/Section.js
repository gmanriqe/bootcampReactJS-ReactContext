
import { useContext } from 'react'
import styled from 'styled-components'
import CardPost from '../blocks/CardPost'
import { UserContext } from '../context/UserContent'
import Container from '../elements/Container'

const ContentArea = styled.div`
    display: flex;
    flex-wrap: wrap;

    & article {
        margin-right: 2.1276595745%;
        margin-bottom: 20px;
    }
    & article:nth-child(3n+3) {
        margin-right: 0
    }
`

const Section = ({ className }) => {
    let articlesFromDevto = useContext(UserContext)
    console.log(articlesFromDevto)

    return (
        <section className={className}>
            <Container>
                <div>
                    <h2>Mis post en
                        <span> Dev.To</span>
                    </h2>
                    <ContentArea>
                        {
                            articlesFromDevto.map((article) => (
                                <CardPost key={article.id} article={article}></CardPost>
                            ))
                        }
                    </ContentArea>
                </div>
            </Container>
        </section>
    )
}

export default styled(Section)`
    background-color: ${props => props?.theme?.colors?.background || "black"};
    color: ${props => props?.theme?.colors?.colors || "#FFF"};
    padding: 100px 0;
`