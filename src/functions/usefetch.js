import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 403) {
                    throw Error('403 - Forbidden.');
                } else if (response.status === 404) {
                    throw Error('404 - Not found.');
                } else if (response.status === 405) {
                    throw Error('405 - Method not allowed.');
                } else if (response.status === 500) {
                    throw Error('500 - Internal server error.');
                } else if (response.status === 503) {
                    throw Error('503 - Service unavailable.');
                } else if (response.status === 504) {
                    throw Error('504 - Gateway timeout.');
                }
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setErrors(error.message);
                setLoading(false);
            });
    }, [url]);

    return {
        data,
        isLoading,
        errors
    }
}

export default useFetch;