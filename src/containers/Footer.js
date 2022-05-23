// styled
import styled from 'styled-components'

// components
import { useContext } from 'react';
import Container from '../elements/Container'

// context
import { ThemeContext, darkTheme, lightTheme } from "../context/ThemeContext";

const Footer = ({ className }) => {

    const DarkModeSwitcher = () => {
        let [theme, setTheme] = useContext(ThemeContext);

        const switchTheme = () => {
            let newTheme = theme.type === "light" ? darkTheme : lightTheme;
            setTheme(newTheme);
        }

        return (
            <strong onClick={switchTheme}> MODO
            {
                theme.type === "light" ? " DARK" : " LIGHT"
            }
            </strong>
        )
    }

    return (
        <footer className={className}>
            <Container>
                <p>Gracias por visitar esta página -
                    <DarkModeSwitcher></DarkModeSwitcher>
                </p>
            </Container>
        </footer>
    )
}

export default styled(Footer)`
    background-color: var(--primary-color);
    padding: 20px 0;
    text-align: center;
    & strong {
        cursor: pointer;
    }
`