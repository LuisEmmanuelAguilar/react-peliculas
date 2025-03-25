import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './utils/Menu';

function App() {


  return(
    <>
      <BrowserRouter>
        <Menu></Menu>
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>

            <Route path="/generos">
              <IndiceGeneros></IndiceGeneros>
            </Route>

          </Switch>        
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
