export const CharactersFetch = async(page = 1, limit = 8) => {
    try{

        const response = await fetch("https://rickandmortyapi.com/api/character?page=${page}&limit=${limit}");
        const data = await response.json();
        return data.items;

    }catch(error){
        console.log(`Error al obtener los personajes: ${error}`);
        return [];//Retorno un array vacio.
    }
}