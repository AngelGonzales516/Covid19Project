import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Covid from './components/Covid/Covid';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Switch>
          <Route path="/" exact>
              <Covid />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
