import { useEffect, useState } from "react";
// import axios from 'axios'

import { cardsMock } from './ApiMocks'

const useApi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData(cardsMock)
        //delete when u  will use 
        setLoading(true)
        setError(null)
    })

    // useEffect(() => {
    //   const abortCont = new AbortController();

    //   setLoading(true);
    //   fetch(url, { signal: abortCont.signal })
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw Error("could not fetch that data");
    //       }
    //       res.json();
    //     })
    //     .then((data) => {
    //       setData(data);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       if (err.name === "AbortError") {
    //         console.log("fetch aborted");
    //       } else {
    //         setLoading(false);
    //         setError(err.message);
    //       }
    //     });

    //   return () => abortCont.abort();
    // }, [url]);

    return { data, loading, error };
};

export const API = {
    useApi,
};

// VARIANTA DE fetch cu promise (async, await)

// const useFetchh = async (url) =>{
//   setLoading(true)
//   try {
//     const response = await fetch(url)
//     const data = await response.json()

//     console.log(data)
//     setLoading
//   } catch (error) {
//     console.log(error)
//     setLoading(false)
//   }
// }

// VARIANTA DE get cu AXIOS

// const getData = async () => {
//     try {
//         const { data } = await axios.get(url)
//         return data
//     } catch (error) {
//         console.log('err in axiox', error)
//         return
//     }
// }


// O METODA DE POST

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const blog = { title, body, author };

//   fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(blog),
//   }).then(() => {
//     console.log("add new blog");
//   });
// };

// O METODA DE DELETE

// fetch(url, {
//   method: 'DELETE'
// }).then(()=>{

// })

