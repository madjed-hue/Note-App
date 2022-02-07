import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { indigo } from "@mui/material/colors";
import { FormControlLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
    display: "block !important",
  },
  btn: {
    background: indigo[500],
  },
});

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          label="Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel
              value="todos"
              control={<Radio />}
              label="Todods"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Fab type="submit" color="primary" variant="contained">
          <SendIcon />
        </Fab>
      </form>
    </Container>
  );
};

export default Create;
