
import styled from 'styled-components'

import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { LinkTertearyButtonStyle } from '../collections/buttons'
import { ThemeContext } from '../context/ThemeContext'

const SwitchText = styled.div`
    & p {
        color: ${props => (props.theme.colors && props.theme.colors.paragraph_)};
    }
`

const DevChange = () => {
    let [user, setUser] = useContext(UserContext)
    let [theme] = useContext(ThemeContext);

    const handlerClickUserName = () => {
        const newUsername = user.devToUserName === 'gmanriqe' ? 'microsoft' : 'gmanriqe'
        setUser({ ...user, devToUserName: newUsername })
    }

    return (
        <SwitchText theme={theme}>
            <p>También puedes: {' '}
                <LinkTertearyButtonStyle theme={theme} onClick={handlerClickUserName}>
                    Ver los
                    {
                        user.devToUserName === 'gmanriqe' ? ' de mi empresa' : ' mios'
                    }
                </LinkTertearyButtonStyle>
            </p>
        </SwitchText>
    )
}

export default DevChange;