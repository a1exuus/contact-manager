import { Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import ViewContact from './components/ViewContact/ViewContact';

function App() {
  return (
    <div className="App">
      <div style={{ margin: 50 }}>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path='/addContact' element={<AddContact />} />
          <Route path='/editContact/:id' element={<EditContact />} />
          <Route path='/viewContact/:id' element={<ViewContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
