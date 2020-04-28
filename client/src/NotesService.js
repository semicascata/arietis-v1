import axios from "axios";

const url = "oncrises/v1/notes/";

class NotesService {
  // Get Notes
  static getNotes() {

    return new Promise((resolve, reject) => {
      // Promise
      axios.get(url)
      .then((res) => {
        const data = res.data;
        resolve(
          data.map(note => ({
            ...note
          }))
        );
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
}

export default NotesService;
