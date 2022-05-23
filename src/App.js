// styled component globals
import GlobalsStyles from './globals/GlobalsStyles'

// components
import Header from './containers/Header'
import Section from './containers/Section';
import Footer from './containers/Footer';

// context
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
	return (
		<div>
			<UserProvider>
				<ThemeProvider>
					<GlobalsStyles/>
					<Header></Header>
					<Section></Section>
					<Footer></Footer>
				</ThemeProvider>
			</UserProvider>
		</div>
	);
}

export default App;
