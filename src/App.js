import './app.css'
import Routes from './components/routes'
import Header from './components/header/header'
import Nav from './components/nav/nav'

function App() {
    return (
        <main className="App">
            <Header />
            <Nav />
            <Routes />
        </main>
    )
}

export default App
