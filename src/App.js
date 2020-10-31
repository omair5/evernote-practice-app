import React from 'react';
import Navbar from './components/navbar/navbar';
import TextEditor from './components/textEditor/textEditor';
import Notes from './components/notes/notes'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'


function App() {
  return (
    <div >
      <Provider store={store}>
        <Navbar />
        <TextEditor />
        <Notes />
      </Provider>
    </div>
  );
}

export default App;

// REACT CUSTOM LOADERS
// https://reactjsexample.com/simple-and-accessible-loading-indicators-with-react/

// REACT ANIMATIONS 
// https://css-tricks.com/animating-between-views-in-react/
// https://www.npmjs.com/package/react-animated-css

// REACT USEFUL LINKS
// https://reactjsexample.com/