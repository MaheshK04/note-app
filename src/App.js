//import logo from "./logo.svg";
import AddNote from "./components/AddNote";
import classes from "./style.module.css";
import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  const [currentNote, setCurrentNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [currentEditedNote, setCurrentEditedNote] = useState(null);
  return (
    <div className={classes.App}>
      <AddNote
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        notesList={notesList}
        setNotesList={setNotesList}
        currentEditedNote={currentEditedNote}
        setCurrentEditedNote={setCurrentEditedNote}
      ></AddNote>
      <NoteList
        notesList={notesList}
        setCurrentEditedNote={setCurrentEditedNote}
        setCurrentNote={setCurrentNote}
        setNotesList={setNotesList}
      ></NoteList>
    </div>
  );
}

export default App;
