import axios from "axios";

const url = "https://rickandmortyapi.com/graphql";

export const getCharacters = () => async () => {
  try {
    await axios({
      url,
      method: "post",
      data: {
        query: `{
            characters {
                results {
                    id
                    image
                    name
                    status
                }
            }
        }`,
      },
    }).then((result) => {
      console.log(result.data.data);
    });
  } catch (err) {
    console.error("Erro:", err);
  }
};

export const getCharacterById = (id) => async () => {
  try {
    await axios({
      url,
      method: "post",
      data: {
        query: `{
              character(id: ${id}) {
                  id
                  name
                  status
                  image
                  episode {
                      name
                  }
              }
          }`,
      },
    }).then((result) => {
      console.log(result.data.data);
    });
  } catch (err) {
    console.error("Erro:", err);
  }
};
