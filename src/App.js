import React from 'react';
import Navbar from './components/navbar/navbar';
import TextEditor from './components/textEditor/textEditor';
import Notes from './components/notes/notes'
import './App.css'


function App() {
  return (
    <div >
      <Navbar />
      <TextEditor />
      <Notes />
    </div>
  );
}

export default App;
