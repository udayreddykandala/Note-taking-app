import React, { useState } from 'react';
import { saveItem } from '../utils/storage';

function NoteForm({ onAddNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note) {
      const key = `note_${Date.now()}`;
      await saveItem(key, note);
      onAddNote({ key, value: note });
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your note here..." />
      <button type="submit">Save Note</button>
    </form>
  );
}

export default NoteForm;