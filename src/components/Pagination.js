import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export default function PaginationControlled({ page, handleChange }) {
  return (
    <Stack spacing={2}>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination count={3} page={page} onChange={handleChange} />
      </Box>
    </Stack>
  );
}
