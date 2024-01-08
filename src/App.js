import React from "react";
import { Button, Chip, Divider, Grid, Paper } from "@mui/material";
import SearchAppBar from "./components/SearchAppBar";
import JobCard from "./components/JobCard";
import jobs from "./Jobs.json";
import BasicPagination from "./components/Pagination";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Grid container spacing={2} m={1}>
        {jobs.slice(0, 5).map((job) => (
          <Grid key={job.id} item xs={8} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination />
    </div>
  );
}

export default App;
