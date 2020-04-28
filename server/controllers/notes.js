const Note = require("../models/Note");
const User = require("../models/User");

/* -------------------------------------------------*/
// @desc Notes Page
// @route GET /oncrises/v1/notes
// @acess Private
exports.getNotes = async (req, res, next) => {
  const notes = await Note.find({});
  // const sessionId = req.session.passport.user;
  // const user = await User.findById({_id: sessionId});

  if(!notes) {
    res.status(404).json({
      success: false,
      msg: "Cannot find any note"
    });
    console.log("There is no notes, check database...".cyan.bold);
  };

  res.status(200).json({
    success: true,
    numberOfNotes: `${notes.length}`,
    data: notes
  });
};

/* -------------------------------------------------*/
// @desc Single Note
// @route GET /oncrises/v1/notes/:id
// @acess Private
exports.getNote = async (req, res, next) => {
  const note = await Note.findById(req.params.id);

  if(!note) {
    res.status(404).json({
      success: false,
      msg: `Cannot find any note by the Id ${req.params.id}`
    });

  } else if(note) {
    res.status(200).json({
      success: true,
      note
    });
  };
};

/* -------------------------------------------------*/
// @desc Create New Note
// @route POST /oncrises/v1/notes/
// @acess Private
exports.createNote = async (req, res, next) => {
  const user = req.body.user;
  const { title, text } = req.body;

  let notesErr = [];

  // Validations
  if(title === null || title == "") {
    notesErr.push({
      msg: "Please, insert a note title"
    });
  };

  if(text === null || title == "") {
    notesErr.push({
      msg: "Please, insert a text"
    });
  };

  if(text.length > 1000) {
    notesErr.push({
      msg: "Text can have max 1000 characters, sorry..."
    });
  };

  if(notesErr.length > 0) {
    res.status(401).json({
      success: false,
      user: user.user,
      notesErr
    });

  } else {
    await Note.findOne({ title })
    .then(note => {
      if(note) {
        notesErr.push({
          msg: `The title of ${note.title} already exists on Notes list`
        });

      } else {
        const newNote = new Note({
          title,
          text
        });

        newNote.save()
        .then(tip => {
          console.log(`New note ${newNote.title} successfully created and stored on database!`.green.bold);
          res.status(200).json({
            success: true,
            msg: `New note ${newNote.title} created and stored on database`,
            newNote
          });
        })
        .catch(err => {
          console.log("Something goes wrong when trying to save this note...".red.bold);
          res.status(404).json({
            success: false,
            msg: "Something goes wrong when trying to save this note..."
          }); // res end
        }); // Catch end
      }
    });
  }
};

/* -------------------------------------------------*/
// @desc Update Note
// @route PUT /oncrises/v1/notes/:id
// @acess Private
exports.updateNote = async (req, res, next) => {
  const noteId = req.params.id;
  let note = await Note.findById(noteId);

  if(!note) {
    res.status(404).json({
      success: false,
      msg: `Note not found with Id of ${noteId}`
    });
    return false;
  };

  note = await Note.findByIdAndUpdate(noteId, req.body, {
    new: true,
    runValidators: true
  });

  console.log(`\nNote with Id ${noteId} updated successfully!`.green.bold);

  res.status(200).json({
    success: true,
    note
  });
};

/* -------------------------------------------------*/
// @desc Delete Note
// @route DELETE /oncrises/v1/notes/:id
// @acess Private
exports.deleteNote = async (req, res, next) => {
  const noteId = req.params.id;
  const note = await Note.findById(noteId);

  if(!note) {
    res.status(404).json({
      success: false,
      msg: `Note not found with Id of ${noteId}`
    });
  } else if(note) {
    note.remove();

    res.status(200).json({
      success: true,
      msg: "Note successfully deleted!"
    });

    console.log("\nNote deleted...".red.bold);
  };
};
