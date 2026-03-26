import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Layouts from './templates/Layouts';
import Home from './templates/Home';
import Profile from './templates/Profile';
import Contactus from './templates/Contactus';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contactus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
