import React from "react";
import classes from "../style.module.css";
function AddNote({ currentNote, setCurrentNote, notesList, setNotesList,currentEditedNote,setCurrentEditedNote}) {
  function handleOnSubmit(event) {
    event.preventDefault();

    if (!!currentEditedNote) {
      const findCurrentEditedNoteIndex = notesList.findIndex(item => item.id === currentEditedNote.id)
      notesList[findCurrentEditedNoteIndex] = {
        ...notesList[findCurrentEditedNoteIndex],
        label:currentNote
      }
    }
    else {
      notesList.push({
        id: notesList.length + 1,
        label: currentNote,
      });
    }

    setNotesList(notesList);
    setCurrentNote("");
    setCurrentEditedNote(null)

  }
  return (
    <form onSubmit={handleOnSubmit} className={classes.form}>
      <input
        name="current-note"
        id="current-note"
        placeholder="Enter a Note"
        className={classes.input}
        value={currentNote || ""}
        onChange={(e) => setCurrentNote(e.target.value)}
      ></input>
      <button type="submit" className={classes.button}>
        {!!currentEditedNote ? "Edit Note" : "Add Note"}
      </button>
    </form>
  );
}

export default AddNote;
