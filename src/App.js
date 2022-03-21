import Header from './components/Header'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'

// import Noice from './assets/noise.gif'

function App() {
	return (
		<div className="App">
			<div className="sections">
				<div className="bg"></div>

				<div className="content">
					<Header />
					<About />
					<Projects />
					<Clients />
					<Contact />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
