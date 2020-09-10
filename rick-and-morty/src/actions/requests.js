import axios from "axios";

const url = "https://rickandmortyapi.com/graphql";

export const getCharacters = async () => {
  try {
    const response = await axios({
      url,
      method: "post",
      data: {
        query: `{
            characters {
                results {
                    id
                    image
                    status
                    name
                }
            }
        }`,
      },
    });

    return response.data.data.characters.results;
  } catch (err) {
    console.error("Erro:", err);
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios({
      url,
      method: "post",
      data: {
        query: `{
              character(id: ${id}) {
                  id
                  image
                  name
                  status
                  episode {
                      name
                  }
              }
          }`,
      },
    });

    return response.data.data.character;
  } catch (err) {
    console.error("Erro:", err);
  }
};
