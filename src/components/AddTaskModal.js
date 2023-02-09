import {
  Box,
  Button,
  FormControl,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddTaskModal({ open, handleClose }) {
  console.log("modal render");

  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TASK", payload: { title: input } });
      handleClose();
    } else {
      setInputError("This field is required");
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h4"
          fontWeight="medium"
          textAlign="center"
        >
          Add Task
        </Typography>
        <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
          <OutlinedInput
            error={inputError}
            onChange={(e) => {
              setInput(e.target.value);
              setInputError("");
            }}
            inputProps={{
              "aria-label": "add",
            }}
            sx={{ background: "#F1F4F6" }}
          />
          {inputError && (
            <Typography
              id="modal-modal-title"
              variant="p"
              component="p"
              sx={{ color: "red" }}
            >
              {inputError}
            </Typography>
          )}

          <Button
            onClick={handleAdd}
            sx={{
              width: "100px",
              background: "#F1F4F6",
              mt: 3,
              color: "black",
            }}
          >
            Add
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default React.memo(AddTaskModal);
