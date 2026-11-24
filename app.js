const poKemon_number = document.getElementById("pknum");
const poKemon_name = document.getElementById("pkname");
const poKemon_img = document.getElementById("pkimg");

const pokemon_form = document.getElementById("form");
const poKemon_input = document.getElementById("input");

const poKemon_prev = document.getElementById("bnt-prev");
const poKemon_next = document.getElementById("bnt-next");
let searchPokemon = 1;

const fetchpokemon = async (pokemon) => {
    const APIResponte = await fetchp
    ('https://pokeapi.co/api/v2/pokemon/${poKemon}');
    if(APIResponse.status ===200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async(pokemon) => {
    const data = await fetchpokemon(pokemon);
    if (data)
}