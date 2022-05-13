import React from "react";
import { styled } from '@mui/material/styles';
import { TextField, Button, Grid, Container, IconButton, InputAdornment, Box } from "@mui/material";
import {
  //useSelector,
  useDispatch,
} from "react-redux";
import Arion_logo from "../assets/arion_logo.png";
import Background from "../assets/background.jpg";
// import "../../styles/login.css";
import { USER_INFO_SET } from "../actions/types";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Footer from "../container/footer"
import variables from "../styles/variables";

const BackgroundGrid = styled(Grid)({
  flex: 1,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Background})`,
});
const SubmitButton = styled(Button)(({ theme }) => ({
  background: variables.Darkblue,
  color: variables.White,
  borderRadius: 3,
  border: 0,
  height: 48,
  margin: theme.spacing(3, 0, 2),
  "&:hover": { background: variables.Hover_Darkblue },
}));

export default function Login() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    Email: "guest",
    Password: "guest",
    showPassword: false,
  });

  const error = {
    Email: false,
    EmailMsg: "",
    Password: false,
    PasswordMsg: "",
  };

  const handleLogin = () => {
    console.log(data);

    dispatch({
      type: USER_INFO_SET,
      payload: { Userinfo: { Email: data.Email }, Token: "faketoken" },
    });
  };
  const handleClickShowPassword = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  return (
    <div  >
      <Grid container component="main" sx={{ height: "100vh" }} >
        <BackgroundGrid>
          <Container component="main" fixed maxWidth="sm">
            <Box mt={"96px"} display="flex" flexDirection="column" alignItems="center">
              <Box component="img" sx={{ width: 400, height: "auto" }} src={Arion_logo} alt="logo" />
            </Box>
            <Box component="form" width={"100%"} mt={"-24px"} alignItems="center" noValidate>
              <TextField
                variant="filled"
                margin="normal"
                fullWidth
                id="Email"
                value={data.Email}
                // defaultValue={data.Email}
                error={error.Email}
                helperText={error.EmailMsg}
                onChange={(event) =>
                  setData({ ...data, Email: event.target.value })
                }
                placeholder="Email"
                InputProps={{
                  // paddingBottom: 10, paddingLeft: 20
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: variables.Darkblue }}></PersonIcon>
                    </InputAdornment>
                  ),
                }}

              />
              <TextField
                variant="filled"
                margin="normal"
                fullWidth
                placeholder="Password"
                name="password"
                id="password"
                type={data.showPassword ? 'text' : 'password'}
                value={data.Password}
                onChange={(event) =>
                  setData({ ...data, Password: event.target.value })
                }
                InputProps={{
                  // paddingBottom: 10, paddingLeft: 20
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyRoundedIcon sx={{ color: variables.Darkblue }} />
                    </InputAdornment>
                  ),
                  endAdornment: (<InputAdornment position="end">
                    <IconButton
                      style={{ marginTop: "12px" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    >
                      {data.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>)
                }}
              // autoComplete="current-password"
              />
              <SubmitButton
                onClick={handleLogin}
                fullWidth
                variant="contained"
              >
                LOGIN
              </SubmitButton>
            </Box>
          </Container>
          <Footer />
        </BackgroundGrid>
      </Grid>


    </div>
  );
}
