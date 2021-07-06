import {lazy,Suspense } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme,darkTheme } from './theme';
import {ThemeProvider} from "styled-components";
import useDarkMode from './hooks/useDarkMode'

const HomePage = lazy(() => import('./pages/Home'));
const ProjectPage = lazy(() => import('./pages/Project'));

function App() {

  const [theme,themeToggler] = useDarkMode();
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} themeToggler={themeToggler}>
      <GlobalStyles/>
      <Router>
        <Suspense fallback={<div style={{textAlign:'center',marginTop:96}}>Loading...</div>}>
        <Switch>
          <Route path="/projects/:name" >
            <ProjectPage/>
          </Route>
          <Route path="*">
            <HomePage onThemeToggler={themeToggler}/>
            <button onClick={themeToggler}>Switch Color</button>
          </Route>
        </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
