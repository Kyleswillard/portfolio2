import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
const Routes = () => {
    return (
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
    )
}

export default Routes
