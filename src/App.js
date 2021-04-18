import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Step2 } from './components/Step2';
import { Header } from './components/Header';
import { Step1 } from './components/Step1';
import { Step3 } from './components/Step3';
import { Result } from './components/Result';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={Step1} />
          <Route path='/step2' component={Step2} />
          <Route path='/step3' component={Step3} />
          <Route path='/result' component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
