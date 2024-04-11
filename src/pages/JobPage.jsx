import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };

//What is useParams:
//Imagine a route in your React app that changes based on
//something in the URL (like /products/123 for product 123).
//The useParams hook lets you grab that specific value (123 in this case)
//directly within your component, so you can display content unique to that situation.
// <--------------------------------------O-------------------------------------->

//This is the useEffect code version of the code above done with Data Loaders:

//name of state, function name of state.
// const [job, setJob] = useState(null);
// const [loading, setLoading] = useState(true); //spinner effect when info fetched from API.
//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJob();
//   }, []);
//   return loading ? <Spinner /> : <h1>{job.title}</h1>;
// }
// export default JobPage;
