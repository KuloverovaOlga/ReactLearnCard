
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

const useFetch = () => {
  const [process, setProcess] = useState('idle');

  const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
    setProcess('loading');

    try {
      const res = await fetch(url, { method, body, headers });

      if (!res.ok) {
        throw new Error(`error status: ${res.status}`);
      }

      const data = await res.json();
      setProcess('confirmed');
      return data;
    } catch (e) {
      setProcess('error');
      toast.error(e.message)
      throw e;
    }
  }, []);

  return { request, process, setProcess };
};

export default useFetch;
