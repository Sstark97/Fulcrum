import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL =
  "https://swapi.dev/api/";

const useFetchAPI = (endPoint) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {
        fetchAPI(endPoint);
    }, [])
    

    const fetchAPI = async (endPoint) => {
        try {
            const resp = await axios.get(endPoint);
            const { results } = resp.data;
            setResponse(results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error };

};

export default useFetchAPI;