import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home'; // Import your Home component
import Profile from './Profile';
import Gigs from './Gigs';
import Portfolio from './Portfolio';
import SignUp from './Signup';
import Login from './Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/profile">
                      <Profile />
                    </Route>
                    <Route path="/gigs">
                      <Gigs />
                    </Route>
                    <Route path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route path="/signup">
                      <SignUp />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
