import React from 'react';

function NoteList({ notes, onDeleteNote }) {
  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.key} style={{ marginBottom: '10px' }}>
            {note.value}
            <button onClick={() => onDeleteNote(note.key)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
