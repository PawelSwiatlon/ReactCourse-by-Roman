import './Root.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // yarn add react-router react-router-dom - następnie import 
import pageOne from './pageOne/pageOne';
import pageTwo from './pageTwo/pageTwo';
import pageThree from './pageThree/pageThree';


function Root() {
  return (
    <BrowserRouter>
      <>
      <Switch>
        <Route exact path='/' component={pageOne}/>
        <Route path='/pageTwo' component={pageTwo}/>
        <Route path='/pageThree' component={pageThree}/>
        <Route path='/pageThree/:id' component={pageThree}/>
      </Switch>
      </>
    </BrowserRouter>
  );
}

export default Root;
