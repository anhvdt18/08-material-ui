import React from "react";
import jobs from "../Jobs.json";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  if (!job)
    return (
      <Typography variant="h6" marginY={3}>
        No Job, search again!
      </Typography>
    );
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h6" marginY={3}>
        {job.title}
      </Typography>
    </Container>
  );
}

export default DetailPage;
