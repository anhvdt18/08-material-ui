import React from "react";
import { Grid } from "@mui/material";
// import Container from "@mui/material/Container";
import JobCard from "../components/JobCard";
import jobs from "../Jobs.json";

function HomePage({ page }) {
  let itemPerPage = 5 * page;

  return (
    <Grid
      container
      minHeight={"80vh"}
      sx={{
        background: "#0d0d0d",
        margin: 0,
        padding: 2,
      }}
    >
      {jobs.slice(itemPerPage - 5, itemPerPage).map((job) => (
        <Grid key={job.id} item xs={8} md={4}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePage;
