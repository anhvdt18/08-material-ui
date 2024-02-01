import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicCard({ job }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: 500,
        minHeight: 280,
        margin: 2,
        background: "#4d4d4d",
        color: "whitesmoke",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
      onClick={() => navigate(`/job/${job.id}`)}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20, color: "whitesmoke" }} gutterBottom>
          {job.title}
        </Typography>
        <Divider sx={{ marginBottom: 1, background: "dimgray" }} />
        {job.skills.slice(0, 4).map((skill) => (
          <Typography
            key={skill}
            sx={{
              fontSize: 15,
              background: "#ff4d4d",
              color: "white",
              borderRadius: 20,
              border: "none",
              margin: 0.1,
              paddingX: 1,
              paddingY: 0.2,
            }}
            component="button"
          >
            {skill}
          </Typography>
        ))}
        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            background: "darkorange",
            color: "black",
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
