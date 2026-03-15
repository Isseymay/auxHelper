import {individual, reformatIndividual} from "./individual_search_element";
import {getAllTracks} from "../../backend/search.js";
import {addSong} from "../../backend/add_song.js"


export async function allSearchResults(searchString: string){
    
    try{
        const results = await getAllTracks(searchString);


        return (
        <div className="searchResults">
            <h1>Search Results</h1>
            {results.map((item: any) =>(
                individual(reformatIndividual(item))
            ))}
        </div>
    )
    } catch (error){
        console.error("Error getting search results for "+searchString, error);
        return null;
    }

    
}