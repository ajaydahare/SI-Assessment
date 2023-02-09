import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Steps from "./Steps";
import AddTaskModal from "./AddTaskModal";

function Home() {
  const tasks = useSelector((store) => store);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (search) {
      let newData = tasks.filter((item) =>
        item.title.toLowerCase().includes(search)
      );
      setData(newData);
    } else {
      setData(tasks);
    }
  }, [tasks, search]);

  return (
    <>
      <Container
        sx={{
          pt: 4,
          pb: 6,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="Search"
            sx={{ background: "#f5f5f5" }}
          />
        </FormControl>

        <Button
          onClick={handleOpen}
          startIcon={<AddIcon />}
          sx={{ background: "#e0e0e0", my: 1.5, color: "black" }}
        >
          Add task
        </Button>
      </Container>
      <Steps data={data} />
      <AddTaskModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Home;
