import { useState, useEffect } from "react";
import axios from "axios";

/*function LoadImages() {
    const [state, setState] = useState([]);
    useEffect(()=>{
        axios
        .get("https://api.unsplash.com/photos/?client_id=wc7YVgFvqL8Y_IQOMOaE3UQK9j863Rtny6DdzKsJFC8")
        .then((data) => {
            // console.log(data);
            setState(data.data)
        });
    }, [1]);
    return state;
}*/

function SearchImages(query) {
    // console.log("hi"+query); 
    const [state, setState] = useState([]);
    useEffect(()=>{
        axios
        .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=wc7YVgFvqL8Y_IQOMOaE3UQK9j863Rtny6DdzKsJFC8")
        .then((data) => {
            // console.log(data);
            // console.log(data.data.results)
            setState(data.data.results)
        });
    }, [query]);
    return state;
}


// export {LoadImages, SearchImages}
export {SearchImages}