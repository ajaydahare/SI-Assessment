import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TaskCard from "./TaskCard";

let steps = [
  { title: "Step 1", value: 1 },
  { title: "Step 2", value: 2 },
  { title: "Step 3", value: 3 },
  { title: "Step 4", value: 4 },
];
function Steps({ data }) {
  return (
    <Container>
      <Grid container spacing={5}>
        {steps.map((step) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={step.value}>
              <Box
                sx={{
                  borderRadius: "5px",
                  width: "100%",
                  minHeight: "100vh",
                  backgroundColor: "#E4E7EE",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                  p: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  align="left"
                  sx={{
                    width: "90%",
                    textTransform: "uppercase;",
                  }}
                  color="text.secondary"
                  component="p"
                >
                  {step.title}
                </Typography>
                {data.map((item, j) => {
                  if (item.step === step.value) {
                    return <TaskCard item={item} step={step} />;
                  }
                })}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Steps;
