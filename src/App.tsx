import "./App.css";

import Paper from "@mui/material/Paper";
import { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as math from "mathjs";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const CalculatorButton = ({
  color,
  backgroundColor,
  buttonValue,
  hoverColor,
  opacity,
  onClick,
}: {
  color: string;
  backgroundColor: string;
  buttonValue: string;
  hoverColor: string;
  opacity: string;
  onClick: Function;
}) => {
  return (
    <Button
      variant="contained"
      disableElevation={true}
      onClick={() => onClick()}
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

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [openError, setOpenError] = useState(false);
  const [isOutput, setIsOutput] = useState(false);

  const addCharacter = (newCharacter: string) => {
    if (isOutput) {
      setInputValue(newCharacter);
      setIsOutput(false);
    } else {
      setInputValue(inputValue + newCharacter);
    }
  };
  

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
              variant="outlined"
              disabled
              multiline
              maxRows={3}
              value={inputValue}
              sx={{
                width: "100%",
                "&&&:before": {
                  borderBottom: "none",
                },
                "&&&:after": {
                  borderBottom: "none",
                },
              }}
            />
            <Snackbar
              open={openError}
              autoHideDuration={4000}
              onClose={() => setOpenError(false)}
            >
              <Alert
                onClose={() => setOpenError(false)}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Error! Check calcutor input
              </Alert>
            </Snackbar>
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="+"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => addCharacter(" + ")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="-"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => addCharacter(" - ")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="X"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => addCharacter(" * ")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="/"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => addCharacter(" / ")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="7"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("7")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="8"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("8")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="9"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("9")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="AC"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => setInputValue("")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="4"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("4")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="5"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("5")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="6"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("6")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="DEL"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => {
                if (isOutput) {
                  setInputValue('');
                  setIsOutput(false);
                  return;
                }
                
                if (inputValue[inputValue.length - 1] === " ") {
                  setInputValue(inputValue.slice(0, inputValue.length - 3));
                } else {
                  setInputValue(inputValue.slice(0, inputValue.length - 1));
                }
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="1"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("1")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="2"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("2")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="3"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("3")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="%"
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => addCharacter(" % ")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="0"
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter("0")}
            />
          </Grid>
          <Grid item xs={3}>
            <CalculatorButton
              color="#110B11"
              buttonValue="."
              backgroundColor="#F0FDFD"
              hoverColor="#F0FDFD"
              opacity="0.75"
              onClick={() => addCharacter(".")}
            />
          </Grid>
          <Grid item xs={6}>
            <CalculatorButton
              color="#F0FDFD"
              buttonValue="="
              backgroundColor="#36A7AB"
              hoverColor="#2F7274"
              opacity="1.0"
              onClick={() => {
                try {
                  let results = math.evaluate(inputValue);
                  setInputValue(results.toString());
                  setIsOutput(true);
                } catch {
                  setOpenError(true);
                }
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default App;
