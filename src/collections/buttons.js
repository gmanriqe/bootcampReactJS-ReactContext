import styled from 'styled-components'

const PrimaryButtonStyle = styled.button`
    background-color: var(--color-transparent);
    display: block;
    padding: 16px 24px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 24px;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    cursor: pointer;
    &:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color)
    }
`

const LinkPrimaryButtonStyle = styled.a`
    background-color: var(--secondary-color);
    display: block;
    padding: 16px 24px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 24px;
    border: 2px solid var(--secondary-color)
`

const LinkSecondaryButtonStyle = styled.a`
    cursor: pointer;
    color: var(--color-white);
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    display: block;
`

const LinkTertearyButtonStyle = styled.a`
    cursor: pointer;
    color: ${props => (props.theme.colors && props.theme.colors.color_)};
    font-weight: bold;
    margin-top: 0.5em;
    text-decoration: underline;
    text-decoration-thickness: 2px;
`

export { 
    PrimaryButtonStyle,
    LinkPrimaryButtonStyle,
    LinkSecondaryButtonStyle,
    LinkTertearyButtonStyle
}