const BASE_URL =
  "http://localhost:3000/notes";

  //! GET NOTES
  export const getNotes =
  async () => {

    const response =
      await fetch(BASE_URL);

    const data =
      await response.json();

    return data;
};

//!POST NOTE
export const createNote =
  async (note) => {

    const response =
      await fetch(BASE_URL, {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(note)

      });

    return response.json();
};

//!DELETE NOTE
export const deleteNoteApi =
  async (id) => {

    await fetch(
      `${BASE_URL}/${id}`,
      {
        method: "DELETE"
      }
    );

};

//!UPDATE NOTE
export const updateNoteApi =
  async (note) => {

    const response =
      await fetch(
        `${BASE_URL}/${note.id}`,
        {

          method: "PUT",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(note)

        }
      );

    return response.json();

};