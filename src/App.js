import { Route, Switch } from 'react-router-dom'
import './app.css'
import Header from './components/header'
import Nav from './components/nav'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
    return (
        <main className="App">
            <Header />
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </main>
    )
}

export default App
