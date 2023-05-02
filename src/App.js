import './App.css';
import { Routes,Route ,Link} from 'react-router-dom';
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import AdminLogin from './components/AdminLogin';
import GetStarted from './components/GetStarted';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Skill Probe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"  to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"  to="/leader-board">Leader Board</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"  to="/admin-dashboard">Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/get-started' element={<GetStarted/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/leader-board' element={<LeaderBoard/>} />
        <Route path='/admin-dashboard' element={<AdminLogin/>} />
      </Routes>
    </div>
  );
}

export default App;
