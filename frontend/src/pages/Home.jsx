import { useState } from "react";
import { useDispatch} from 'react-redux';
import { Button, TextField } from "@material-ui/core";
import { searchToy, addToy, remove } from "../store/actions/toy.action"
import { CustomPaginationActionsTable } from '../cmps/table'



const Home = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [deleteInput, setDeleteInput] = useState('');
    
    const handleInputChange = event => {
        console.log(event.target.id);
        (event.target.id === "search") ? setSearchInput(event.target.value) : setDeleteInput(event.target.value)
    };

    function searchPokemon() {
        dispatch(searchToy(searchInput));
    }
    
    function deletePokemon() {
        dispatch(remove(deleteInput))
    }

    function addPokemon() {
        console.log("2", searchInput);
        dispatch(addToy(searchInput));
    }


    // function handleChange ( target ) {
    //     const field = target.name;
    //     const value = target.type === 'number' ? +target.value : target.value;
    //     this.setState((prevState) => ({
    //         user: { ...prevState.user, [field]: value || '' },
    //     }));
    // };
    // let pokemonName = "";
    // searchedToy = (!searchedToy) ? null : searchedToy


    return (
        <section className="home-page">
            <h1>Editor</h1>
            <form>
                <TextField id="search" label="search Input" value={searchInput} onChange={handleInputChange} />
                <Button variant="contained" onClick={searchPokemon}>search</Button>
                <Button variant="contained" onClick={addPokemon}>add to gallery</Button>
            </form>
            <TextField id="remove" label="remove Input" value={deleteInput} onChange={handleInputChange} />
            <Button variant="contained" onClick={deletePokemon}>delete</Button>

            <section>
                <CustomPaginationActionsTable />
            </section>
        </section>



    )
}

export default Home;