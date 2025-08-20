// This is to ensure we use a custom hook to avoid a reputation
// Does auto reFetch when necessary

import {useState, useEffect} from "react"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch: boolean = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
                setLoading(true);
                setError(null);

                const result = await fetchFunction();

                setData(result);
        }catch (err) {
            //@ts-ignore
            setError(err instanceof Error ? err: new Error("An Error Occurred"));
        } finally {
            setLoading(false);
        }
    }

    // Resetting the data
    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    // Checking before the components Loads
    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    // returning the data
    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;