import { Link, useParams } from "react-router-dom";
import jobs from "../Data/job";

export default function JobdDetails() {
  const { jobId } = useParams();

  const job = jobs.find((item) => item.id == Number(jobId));

  if (!job) {
    return (
      <>
        <h1>Job Not Found</h1>
        <Link to="/jobs">← Back to jobs</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/jobs">← Back to jobs</Link>
      <h1>{job.role}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>Build accessible and responsive UI</p>
    </>
  );
}
