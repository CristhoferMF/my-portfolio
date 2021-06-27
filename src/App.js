
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import ProjectPage from './pages/Project';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/projects/:name" >
          <ProjectPage/>
        </Route>
        <Route path="*">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
