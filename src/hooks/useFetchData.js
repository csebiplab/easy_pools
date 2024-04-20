import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/metaDatas`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseAPIUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
