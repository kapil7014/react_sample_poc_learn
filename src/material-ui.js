import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ChildComponent from "./child-component";
import { useParams } from "react-router-dom";
import useWindowSize from "./hooks/use-window-size";

const MaterialUi = () => {
  const { id, username } = useParams();
  const { width, height } = useWindowSize();

  return (
    <>
      <Stack spacing={10} direction="row">
        <Button className="customButton" variant="text">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <div className="row">
        <ChildComponent id={id} name={username} email=""></ChildComponent>

        <div className="col-12">
          <p>Width: {width}</p>
          <p>Height: {height}</p>
        </div>
      </div>
    </>
  );
};

export default MaterialUi;
