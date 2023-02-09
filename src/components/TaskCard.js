import {
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch } from "react-redux";

function TaskCard({ item, step }) {
  const dispatch = useDispatch();
  const handleLeftClick = (item) => {
    let updatedTask = item;
    updatedTask["step"] = updatedTask["step"] - 1;
    dispatch({ type: "EDIT_TASK", payload: updatedTask });
  };

  const handleRightClick = (item) => {
    let updatedTask = item;
    updatedTask["step"] = updatedTask["step"] + 1;
    dispatch({ type: "EDIT_TASK", payload: updatedTask });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  return (
    <Card
      key={item.title}
      sx={{
        width: "95%",
        minHeight: "150px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="delete">
            <DeleteOutlinedIcon
              sx={{ cursor: "pointer", color: "#ff5722" }}
              onClick={() => handleDelete(item.id)}
            />
          </IconButton>
        }
        title={<Typography color="text.secondary">{item.title}</Typography>}
      />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          sx={{
            color: "#757575",
            visibility: step.value === 1 ? "hidden" : "visible",
          }}
          onClick={() => handleLeftClick(item)}
        >
          <ArrowCircleLeftOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "#757575",
            visibility: step.value === 4 ? "hidden" : "visible",
          }}
          onClick={() => handleRightClick(item)}
        >
          <ArrowCircleRightOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default TaskCard;
