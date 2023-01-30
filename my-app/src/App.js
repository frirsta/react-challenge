import css from './components/css/NavBarForm.module.css';
import Sidebar from './components/Sidebar';
import NavbarForm from './components/NavbarForm';

function App() {
  return (
    <div className={css.NavBar}>
   <NavbarForm />
    </div>
  );
}

export default App;