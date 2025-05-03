import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import FindDoctor from './pages/FindDoctor';
import Appointment from './pages/Appointment';
import Emergency from './pages/Emergency';
import Dashboard from './pages/Dashboard';
import './assets/css/Home.css'
import MedicineList from './pages/MedicineList';
import Departments from './pages/departments';
import AdminPatients from './pages/AdminPatients';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <br/>
    </div>

  
    <Navbar className="navbar"/>
    <div className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path='*' element={<Home/>}></Route>
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path="/medicines" element={<MedicineList/>}/>
        <Route path='/departments' element={<Departments/>}></Route>
        <Route path="/admin-patients" element={<AdminPatients />} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
