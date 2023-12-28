import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)} marginTop={10}>
        <Stack direction={"column"} spacing={3} maxWidth={400} marginX={"auto"}>
          <Typography
            textAlign={"center"}
            variant="h6"
            fontWeight={400}
            color={"gray"}
            letterSpacing={1.2}
          >
            Login to your account
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Email"
            {...register("email")}
          />
          <FormControl variant="outlined">
            <InputLabel required htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              required
              {...register("password")}
            />
          </FormControl>
          <Button variant="contained" size="large" type="submit">
            Sign In
          </Button>
          <Typography
            textAlign={"right"}
            fontSize={14}
            textTransform={"capitalize"}
            sx={{
              color: (theme) => theme.palette.primary.main,
              textDecoration: "underline",
            }}
          >
            forgot password?
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
