import "./App.css";

import Paper from "@mui/material/Paper";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const CalculatorButton = ({
  color,
  backgroundColor,
  buttonValue,
  hoverColor,
  opacity,
}: {
  color: string;
  backgroundColor: string;
  buttonValue: string;
  hoverColor: string;
  opacity: string;
}) => {
  return (
    <Button
      variant="contained"
      disableElevation={true}
      onClick={() => console.log(buttonValue)}
      sx={{
        borderRadius: 16,
        color: color,
        bgcolor: backgroundColor,
        width: 1,
        ":hover": {
          bgcolor: hoverColor,
          opacity: opacity,
        },
      }}
    >
      {buttonValue}
    </Button>
  );
};

function App() {
  return (
    <Fragment>
      <Paper
        elevation={0}
        sx={{
          bgcolor: "#1F1B2E",
          padding: 3,
        }}
      >
        <Grid container spacing={2} rowSpacing={2} sx={{ maxWidth: 300 }}>
          <Grid item xs={12}>
            <TextField
              className="calculator-input"
              variant="filled"
              id="outlined-size-small"
              value="something1234567890"
              sx={{
                width: "100%",
                '&&&:before': {
                  borderBottom: 'none',
                },
                '&&&:after': {
                  borderBottom: 'none',
                }
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="+"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="-"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="X"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="/"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="7"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="8"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="9"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="C"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="4"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="5"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="6"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="C"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="1"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="2"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="3"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="%"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="0"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="."
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
            />
          </Grid>
          <Grid item xs={6}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="="
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
            />
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export default App;
