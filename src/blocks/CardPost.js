import styled from 'styled-components'

const InnerArticle = styled.article`
    width: 31.914893617%;
    max-width: 450px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    & h3 {
        color: var(--primary-color);
    }
    & img {
        display: block;
        max-width: 100%;
    }
    & a {
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: var(--secondary-color);
        padding: 16px 10px;
        text-align: center;
        display: block;
        width: 100%;
    }
    div {
        background-color: #FFF;
        padding: 15px 20px 60px;
    }
`

const CardPost = ({ article }) => {
    return (
        <InnerArticle>
            <figure>
                <img src={article.social_image} alt="Post" />
            </figure>
            <div>
                <h3>{article.description}</h3>
            </div>
            <a href={article.url}>LEER MÁS</a>
        </InnerArticle>
    )
}

export default CardPost