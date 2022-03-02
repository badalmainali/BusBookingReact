import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Footer from './components/Footer';
import Bookingscreen from './screens/Bookingscreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Mainpage from './screens/Mainpage';
import ProfileScreen from './screens/ProfileScreen';
import AdminScreen from './screens/AdminScreen';
import Contactus from './components/Contactus';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/booking' exact element={<Homescreen />} />
          <Route path='/book/:busid/:fromdate/:todate' exact element={<Bookingscreen />} />
          <Route path='/register' exact element={<RegisterScreen />} />
          <Route path='/login' exact element={<LoginScreen />}/>
          <Route path='/' exact element={<Mainpage />} />
          <Route path='/contact' exact element={<Contactus/>} />
          <Route path='/aboutus' exact element={<AboutUs/>} />
          <Route path='/profile' exact element={<ProfileScreen />} />
          <Route path='/admin' exact element={<AdminScreen/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;