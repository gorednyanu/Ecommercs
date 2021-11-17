import './App.css';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Cartscreen from './screens/Cartscreen';
import Productscreen from './screens/Productscreen';
import Homescreen from './screens/Homescreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';

function App() {

  const [sideToggle, setsideToggle] = useState(false);

  return (
    <Router>
      <Navbar click = {()=> setsideToggle(true)} />
      <SideDrawer show={sideToggle} click={()=> setsideToggle(false)} />
      <Backdrop show={sideToggle} click={()=> setsideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/product/:id" component={Productscreen} />
          <Route exact path="/cart" component={Cartscreen} />
        </Switch>
      </main>
      </Router>
  );
}
export default App;
