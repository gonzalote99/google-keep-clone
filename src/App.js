import React, {useState} from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Count from './components/Count';
import CreateArea from './components/CreateArea';
import Note from './components/Note';


 function App() {
   const [notes, setNotes] = useState([]);

   function addNote(newNote) {
     setNotes((prevValue) => {
       return[...prevValue, newNote];
     });
   }

   function deleteNotes(id) {
     setNotes((prevValue) => {
       return[...prevValue.filter((note, index) => index !== id)];
     });
   }
   



  return (
    <div className='App'>
    <Header />
      <Count 
       count={
         notes.length === 0 ?
         'no notes': `${notes.length} notes `
       }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note 
         key={index}
         id={index}
         title={note.title}
         content={note.content}
         onDelete={deleteNotes}
        />
      ))}
    <Footer />
    </div>
  );
}


export default App;