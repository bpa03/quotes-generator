import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [values, setValues] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };  
  }, []);

  useEffect(() => {
    setValues({
      data: null,
      loading: true
    });
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted.current) {
          setValues({
            data: data.data,
            loading: false,
          });
        };
      });
  }, [url, setValues]);

  return [ values ];
}
