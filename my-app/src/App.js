import css from './components/css/NavBarForm.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.NavBar}>
   <NavBarForm />
    </div>
  );
}

export default App;