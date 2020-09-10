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

export const getCharacterById = (id) => async () => {
  try {
    await axios({
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
    }).then((result) => {
      console.log(result.data.data);
    });
  } catch (err) {
    console.error("Erro:", err);
  }
};
