import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import axios from "axios";

function useFetch(url, option = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url, option);
            const result = res.data && res.data.products.length > 0 ? res.data.products : [];
            setData(result);
            setLoading(false);
        }
        catch (error) {
            setError(error);
            console.log("Error while fetching api", error);
        }
    }
    return {
        data,
        loading,
        error
    }
}

export default useFetch;