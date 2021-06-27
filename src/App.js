import {lazy,Suspense } from 'react'
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/Home'));
const ProjectPage = lazy(() => import('./pages/Project'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{textAlign:'center',marginTop:96}}>Loading...</div>}>
      <Switch>
        <Route path="/projects/:name" >
          <ProjectPage/>
        </Route>
        <Route path="*">
          <HomePage/>
        </Route>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
