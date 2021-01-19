import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Login from './component/Login';
// import Navbar from "./component/Navbar";
import Register from './component/Register';
// import PrivateRoute from './component/PrivateRoute';
// import SideBar from './component/SideBar';
import Content1 from './component/Content1';
import Content2 from './component/Content2';
import Content3 from './component/Content3';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Content1} />
        <Route exact path="/content1" component={Content1} />
        <Route exact path="/content2" component={Content2} />
        <Route exact path="/content3" component={Content3} />
       
      </div>
    </Router>
  );
}

export default App;
