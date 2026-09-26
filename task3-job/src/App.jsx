import JobdDetails from "./Pages/JobsDetails";
import JobsList from "./Pages/JobsList";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Find your next job</h1>} />

          <Route path="/jobs" element={<JobsList />} />

          <Route path="/jobs/:jobId" element={<JobdDetails />} />

          <Route path="/about" element={<h1>About Our Job Portal</h1>} />

          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
