import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <Stack
        display={"flex"}
        gap={2}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h1">404!</Typography>
        <Typography variant="h6" maxWidth={"400px"} textAlign={"center"}>
          The page you are looking for is not here.
        </Typography>

        <Link to="/">
          <Button variant="contained" onClick={() => navigate("/login")}>
            Go back to the home page
          </Button>
        </Link>
        <p>
          Error: <i>{error.statusText || error.message}</i>
        </p>
      </Stack>
    </div>
  );
}
