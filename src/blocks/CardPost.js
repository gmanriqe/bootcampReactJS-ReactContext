import styled from 'styled-components'

const InnerArticle = styled.article`
    width: 31.914893617%;
    max-width: 450px;
    border-radius: 12px;
    overflow: hidden;
    background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.background) || 'var(--secondary-color)'};;
    color: ${props => (props.theme && props.theme.colors && props.theme.colors.text) || 'var(--primary-color)'};
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #e6e6e6;

    & img {
        display: block;
        max-width: 100%;
    }
    div {
        padding: 15px 20px;
    }
`

const CardPost = ({ article }) => {
    return (
        <InnerArticle>
            <figure>
                <img src={article.social_image} alt="Post" />
            </figure>
            <div>
                <h3>{article.title}</h3>
                <a href={article.url}>Leer más</a>
            </div>
        </InnerArticle>
    )
}

export default CardPost