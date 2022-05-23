import Header from './containers/Header'
import Section from './containers/Section';
import { UserProvider } from './context/UserContent';
import GlobalsStyles from './globals/GlobalsStyles'
const App = () => {

	return (
		<div>
			<UserProvider>
				<GlobalsStyles />
				<Header></Header>
				<Section theme={{ colors: { background: "white", colors: "var(--primary-color)" } }}></Section>
			</UserProvider>
		</div>
	);
}

export default App;
