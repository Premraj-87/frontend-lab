import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Create Context
const NotesContext = createContext();

// Provider
export const NotesProvider = ({ children }) => {

  // Load Notes from LocalStorage
  const [notes, setNotes] = useState(() => {

    try {

      const savedNotes =
        localStorage.getItem("notes");

      return savedNotes
        ? JSON.parse(savedNotes)
        : [];

    } catch (error) {

      console.error(
        "Failed to load notes:",
        error
      );

      return [];

    }

  });

  // Add Note
  const addNote = (text) => {

    const trimmedText = text.trim();

    if (!trimmedText) return;

    const newNote = {

      id: crypto.randomUUID(),

      text: trimmedText,

    };

    setNotes((prevNotes) => [
      ...prevNotes,
      newNote,
    ]);

  };

  // Delete Note
  const deleteNote = (id) => {

    setNotes((prevNotes) =>
      prevNotes.filter(
        (note) => note.id !== id
      )
    );

  };

  // Save Notes to LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );

  }, [notes]);

  return (

    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
      }}
    >

      {children}

    </NotesContext.Provider>

  );

};

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => {

  const context =
    useContext(NotesContext);

  if (!context) {

    throw new Error(
      "useNotes must be used inside NotesProvider"
    );

  }

  return context;

};