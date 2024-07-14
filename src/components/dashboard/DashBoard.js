import './DashBoard.css'
import Home from '../home/Home';
import Footer from '../../screens/footer/footer';
import Menu from '../../screens/menu/Menu';
import User from '../../screens/user/User';

function DashBoard() {
    return (
      <div className="dashboard-body">
        <div className="dashboard-header">
          <Menu />
          <Home />
          <User />
        </div>
        <Footer />
  
      </div>
  
    );
  }
  
  export default DashBoard;