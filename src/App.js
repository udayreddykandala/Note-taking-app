import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import FileUploader from './components/FileUploader';
import FileList from './components/FileList';
import FileViewer from './components/FileViewer';
import { getAllItems, removeItem } from './utils/storage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [activeView, setActiveView] = useState('home'); // Adjusted to show home by default
  const [notes, setNotes] = useState([]);
  const [files, setFiles] = useState([]);
  const [viewingFile, setViewingFile] = useState(null);

  useEffect(() => {
    const initApp = async () => {
      const items = await getAllItems();
      setFiles(items.filter(item => item.key.startsWith('file_')));
      setNotes(items.filter(item => item.key.startsWith('note_')));
    };
    initApp();
  }, [isLoggedIn]); // Ensuring the effect runs only when the login status changes

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = async (key) => {
    await removeItem(key); // Remove the note from storage
    setNotes(notes.filter(note => note.key !== key)); // Update the state to reflect the change
  };
  

  const handleFileUpload = (newFile) => {
    setFiles([...files, newFile]);
  };

  const handleViewFile = (file) => {
    setViewingFile(file);
  };

  const handleDeleteFile = async (key) => {
    await removeItem(key);
    setFiles(files.filter(file => file.key !== key));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#282c34', color: '#ffffff', minHeight: '100vh' }}>
      {activeView === 'home' && !isLoggedIn && !isSignedUp ? (
        <div>
          <h1>Welcome to the Note-Taking and File Uploading App</h1>
          <p>This application helps with your daily tasks by allowing you to take notes and manage files efficiently.</p>
          <button onClick={() => setActiveView('login')} style={{ marginRight: '10px' }}>Login</button>
          <button onClick={() => setActiveView('signup')}>Sign Up</button>
        </div>
      ) : activeView === 'login' ? (
        <Login onLogin={() => {
          setIsLoggedIn(true);
          setActiveView('dashboard');
        }} />
      ) : activeView === 'signup' ? (
        <SignUp onSignUp={() => {
          setIsSignedUp(true);
          setActiveView('login');  // Directs user to login after signing up
        }} />
      ) : (
        <div>
          <h1>Note-Taking App</h1>
          <NoteForm onAddNote={handleAddNote} />
          <NoteList notes={notes} onDeleteNote={onDeleteNote}/>
          <FileUploader onFileUpload={handleFileUpload} />
          <FileList files={files} onView={handleViewFile} onDelete={handleDeleteFile} />
          {viewingFile && <FileViewer file={viewingFile} />}
        </div>
      )}
    </div>
  );
}

export default App;
