import {Link} from "react-router-dom"
import jobs from "../Data/job"

export default function JobsList(){
    return(
        <>
       <h1>Open Positions</h1>
       {jobs.map((item)=>(
        <div key={item.id}>
            <h2>{item.role}</h2>
            <p>{item.company}. {item.location}</p>
            <Link to={"/jobs/" + item.id}>View Details</Link>
        </div>
       ))}
        </>
    )
}