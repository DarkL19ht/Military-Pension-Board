import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/profileSettings' element={<ProfileSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
