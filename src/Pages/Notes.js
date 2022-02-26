import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import NoteCard from "../Components/NoteCard";
import Masonry from "react-masonry-css";
import { useAlert } from "react-alert";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://not-web-app.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const alert = useAlert();
  const handleDelete = async (id) => {
    await fetch(`https://not-web-app.herokuapp.com/notes/${id}`, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    alert.success("Note Deleted Successfully");
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
};

export default Notes;
