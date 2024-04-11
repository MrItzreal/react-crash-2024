import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
  //name of state, function name of state.
  const [jobs, setJobs] = useState([]); //info fetched from API we go inside empty [].
  const [loading, setLoading] = useState(true); //spinner effect when info fetched from API.

  //NOTE: useEffect takes both a "function" and "dependency array".
  //In most cases, an empty [] inside an use-effect
  //is ok, since this avoids an infinite loop.
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "/api/jobs?_limit=3" //shows 3 postings in home page (/api over http because of proxy).
        : "/api/jobs"; //shows all postings in jobs page (/api over http because of proxy).
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs "}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

//useEffect Hook: allows components to have have side effects
//the side effect we want is one that fetches data when the component is rendered.
//And when we get the job list from the API we want to put
//them in "state" thus why we brought in useState.
