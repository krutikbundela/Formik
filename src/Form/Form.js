import React from "react";
import { Box, TextField, Paper, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { submitSchema } from "./Schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: submitSchema,
      onSubmit: (values, action) => {
        console.log("on submit values", values);
        action.resetForm();
        alert(
          `name :${values.name}\n email:${values.email} \n password:${values.password} \n confirmpassword  :  ${values.confirmpassword}`
        );
      },
    });
  // console.log("errors",errors);

  return (
    <>
      {/* <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "100%",
          backgroundColor: "red",
        }}
      > */}
      <Typography
        variant="h5"
        align="center"
        textAlign="center"
        color="primary.dark"
        component="h5"
        fontSize={40}
        fontWeight={300}
        // sx={{ width: { sm: "100%", md: "25rem" } }}
      >
        Form With Validation
      </Typography>
      <hr width={500} />
      {/* </Box> */}

      <Paper
        elevation={12}
        sx={{
          marginTop: 10,
          paddingLeft: { sm: 5, md: 5, lg: 20 },
          paddingRight: { sm: 5, md: 5, lg: 20 },
          ml: "auto",
          mr: "auto",
          mb: 2,
          width: { sm: "80%", md: "80%", lg: 500 },
        }}
      >
        <Box
          sx={{
            marginTop: 10,
            marginBottom: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              autoComplete="name"
              name="name"
              fullWidth
              label="Enter Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ mt: 6 }}
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ mt: 4 }}
            />

            <TextField
              fullWidth
              label="password"
              name="password"
              type="password"
              autoComplete="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ mt: 4 }}
            />

            <TextField
              fullWidth
              label="confirm Password"
              name="confirmpassword"
              type="password"
              autoComplete="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmpassword && Boolean(errors.confirmpassword)}
              helperText={touched.confirmpassword && errors.confirmpassword}
              sx={{ mt: 4 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 7 }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Paper>
    </>
  );
};

export default Form;
