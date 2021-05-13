import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [values, setValues] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };  
  }, []);

  useEffect(() => {
    setValues({
      data: null,
      loading: true,
      error: null
    });
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted.current) {
          setValues({
            data,
            loading: false,
            error: null
          });
        };
      });
  }, [url, setValues]);

  return [ values ];
}
