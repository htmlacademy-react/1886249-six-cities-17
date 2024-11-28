import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

function Layout() {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default Layout;
