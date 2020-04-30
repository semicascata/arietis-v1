const Note = require("../models/Note");
// const User = require("../models/User");

// @desc Notes Page
// @route GET /oncrises/v1/notes
// @acess Private
exports.getNotes = async (req, res, next) => {
  const notes = await Note.find({});

  if (!notes) {
    console.log("Something goes wrong, cannot send any data...".red.bold);

    res.status(404).send(notes);

  } else if (notes) {
    console.log(`\nSuccessfully got notes!
      Total of notes: ${notes.length}`.green.bold);

    res.status(200).send(notes);

  }
};

// @desc Single Note
// @route GET /oncrises/v1/notes/:id
// @acess Private
exports.getNote = async (req, res, next) => {
  const noteId = req.params.id;

  try {
    const note = await Note.findById(noteId);

    if (!note) {
      console.log(`Cannot find any note by the Id \"${noteId}\"`.red.bold);

      res.status(404).send({});

    } else if (note) {
      console.log(`Note with Id of ${noteId} found!
        Note title: ${note.title}`.green.bold);
      res.status(200).send(note);

    };

  } catch(err) {
    console.log(`Cannot find any note by the Id \"${noteId}\"`.red.bold);
    res.status(404).send(`Cannot find any note by the Id \"${noteId}\"`);
    return false;
  }
};

// @desc Create New Note
// @route POST /oncrises/v1/notes/
// @acess Private
exports.createNote = async (req, res, next) => {
  const {
    title,
    text
  } = req.body;

  let notesErr = [];

  // Validations
  if (title === null || title == "") {
    notesErr.push({
      msg: "Please, insert a note title"
    });
  };

  if (text === null || title == "") {
    notesErr.push({
      msg: "Please, insert a text"
    });
  };

  if (text.length > 1000) {
    notesErr.push({
      msg: "Text can have max 1000 characters, sorry..."
    });
  };

  if (notesErr.length > 0) {
    console.log(`${notesErr}`.red.bold);

    res.status(404).send(notesErr);

  } else {
    await Note.findOne({
        title
      })
      .then(note => {
        console.log(`${notesErr}`.cyan.bold);

        if (note) {
          notesErr.push({
            msg: `The title of \"${note.title}\" already exists on Notes list`
          });

        } else {
          const newNote = new Note({
            title,
            text
          });

          newNote.save()
            .then(tip => {
              console.log(`New note \"${newNote.title}\" successfully created and stored on database!`.green.bold);

              res.status(200).send(`New note \"${newNote.title}\" successfully created and stored on database!`);

            })
            .catch(err => {
              console.log("Something goes wrong when trying to save this note...".red.bold);

              res.status(404).send("Something goes wrong when trying to save this note...");

            });
        }
      });
  }
};

// @desc Update Note
// @route PUT /oncrises/v1/notes/:id
// @acess Private
exports.updateNote = async (req, res, next) => {
  const noteId = req.params.id;
  let note = await Note.findById(noteId);

  if (!note) {
    console.log(`Note not found with Id of \"${noteId}\"`);

    res.status(404).send(`Note not found with Id of \"${noteId}\"`);

    return false;
  };

  note = await Note.findByIdAndUpdate(noteId, req.body, {
    new: true,
    runValidators: true
  });

  console.log(`\nNote with Id \"${noteId}\" updated successfully!`.green.bold);

  res.status(200).send(`Note \"${note.title}\" updated!`);
};

// @desc Delete Note
// @route DELETE /oncrises/v1/notes/:id
// @acess Private
exports.deleteNote = async (req, res, next) => {
  const noteId = req.params.id;
  const note = await Note.findById(noteId);

  if (!note) {
    console.log(`Note not found with Id of \"${noteId}\"`.red.bold);

    res.status(404);

  } else if (note) {
    note.remove();
    console.log("\nNote deleted...".red.bold);

    res.status(204).send("Note deleted");
  };
};
