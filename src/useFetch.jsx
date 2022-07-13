// import React, {useEffect, useState} from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState([
//     {
//         id: 1,
//         name: 'name 1',
//         price: 123.12,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates ex facilis laboriosam. Architecto odio fugit corporis, commodi vero molestiae quos delectus reiciendis. Repellat nostrum laboriosam placeat error nobis aut.',
//         location: 'Suceava',
//         img: 'url',
//     },
//     {
//         id: 2,
//         name: 'name 2',
//         price: 123.12,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates ex facilis laboriosam. Architecto odio fugit corporis, commodi vero molestiae quos delectus reiciendis. Repellat nostrum laboriosam placeat error nobis aut.',
//         location: 'Bucuresti',
//         img: 'url',
//     },
//     {
//         id: 3,
//         name: 'name 3',
//         price: 123.12,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates ex facilis laboriosam. Architecto odio fugit corporis, commodi vero molestiae quos delectus reiciendis. Repellat nostrum laboriosam placeat error nobis aut.',
//         location: 'Cluj',
//         img: 'url',
//     },
//     {
//         id: 4,
//         name: 'name 4',
//         price: 123.12,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates ex facilis laboriosam. Architecto odio fugit corporis, commodi vero molestiae quos delectus reiciendis. Repellat nostrum laboriosam placeat error nobis aut.',
//         location: 'Timisoara',
//         img: 'url',
//     },
//     {
//         id: 5,
//         name: 'name 5',
//         price: 123.12,
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates ex facilis laboriosam. Architecto odio fugit corporis, commodi vero molestiae quos delectus reiciendis. Repellat nostrum laboriosam placeat error nobis aut.',
//         location: 'Iasi',
//         img: 'url',
//     },
// ]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   const abortCont = new AbortController();

//   //   setLoading(true);
//   //   fetch(url, { signal: abortCont.signal })
//   //     .then((res) => {
//   //       if (!res.ok) {
//   //         throw Error("could not fetch that data");
//   //       }
//   //       res.json();
//   //     })
//   //     .then((data) => {
//   //       setData(data);
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       if (err.name === "AbortError") {
//   //         console.log("fetch aborted");
//   //       } else {
//   //         setLoading(false);
//   //         setError(err.message);
//   //       }
//   //     });

//   //   return () => abortCont.abort();
//   // }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;

// // VARIANTA DE fetch cu promise (async, await)

// // const useFetchh = async (url) =>{
// //   setLoading(true)
// //   try {
// //     const response = await fetch(url)
// //     const data = await response.json()

// //     console.log(data)
// //     setLoading
// //   } catch (error) {
// //     console.log(error)
// //     setLoading(false)
// //   }
// // }


// // O METODA DE POST 

// // const handleSubmit = (e) => {
// //   e.preventDefault();

// //   const blog = { title, body, author };

// //   fetch(url, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(blog),
// //   }).then(() => {
// //     console.log("add new blog");
// //   });
// // };

// // O METODA DE DELETE

// // fetch(url, {
// //   method: 'DELETE'
// // }).then(()=>{

// // })