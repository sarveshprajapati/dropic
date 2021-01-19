import { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Model';
import Title from './components/Title';
import UploadForm from './components/UploadForm';


function App() {
  const [selected,setSelected]=useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelected={setSelected} />
      {selected && <Modal selected={selected} setSelected={setSelected} />}
      
    </div>
  );
}

export default App;
