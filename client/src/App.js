import logo from './logo.svg';
import './App.css';
import AllStudents from './components/AllStudents';
import {Router, Link} from '@reach/router';
import OneStudent from './components/OneStudent';
import NewStudent from './components/NewStudent';

function App() {
  return (
    <div className="App">
      <h1>Student Tracker</h1>
      <Link className="btn btn-info m-3" to= "/">Home</Link>
      <Link className="btn btn-success" to= "/students/new">Enroll Student</Link>

      <Router>
        <AllStudents path="/"></AllStudents>
        <NewStudent path="/students/new"></NewStudent>
        <OneStudent path="/students/:id"></OneStudent>
      </Router>
    </div>
  );
}

export default App;
