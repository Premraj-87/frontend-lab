/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState
} from "react";

export const NotesContext =
  createContext();

export const NotesProvider =
({ children }) => {

  const [notes, setNotes] =
    useState([]);
 
    //! Add Note Function
  const addNote = (text) => {

    const newNote = {
      id: Date.now(),
      text
    };

    setNotes((prevNotes) => [
      ...prevNotes,
      newNote
    ]);
  };

  const deleteNote = (id) => {

    setNotes((prevNotes) =>
      prevNotes.filter(
        (note) => note.id !== id
      )
    );

  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () =>
  useContext(NotesContext);