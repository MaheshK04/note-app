import classes from '../style.module.css'


function NoteList({ notesList, setCurrentEditedNote, setCurrentNote ,setNotesList}) {
  function handleEdit(getCurrentItem) {
    setCurrentEditedNote(getCurrentItem)
    setCurrentNote(getCurrentItem.label)
  }

  function handleDelete(getCurrentId) {
    setNotesList(notesList.filter(item => item.id !== getCurrentId))
  }
  return (
    <ul className={classes.noteList}>
      {notesList && notesList.length > 0 ? (
        notesList.map((noteItem) => (
          <li key={noteItem.id}>
            <label>{noteItem.label}</label>
            <div>
              <button onClick={()=>handleEdit(noteItem)}>Edit</button>
              <button onClick={()=>handleDelete(noteItem.id)}>Delete</button>
            </div>
          </li>
        ))
      ) : (
        <div className={classes.noNotes}>No Notes Added</div>
      )}
    </ul>
  );
}

export default NoteList;
