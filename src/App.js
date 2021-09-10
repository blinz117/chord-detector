import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedMic, selectMic] = useState(0);

  const start = () => {
    setIsRecording(true);
  };

  return (
    <div className="App">
      <Typography variant="h1">Chord Detector</Typography>
      {isRecording ? (
        <div>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Microphone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedMic}
              onChange={(event) => selectMic(event.target.value)}
            >
              <MenuItem value={0}>Mic 0</MenuItem>
              <MenuItem value={1}>Mic 1</MenuItem>
              <MenuItem value={2}>Mic 2</MenuItem>
            </Select>
          </FormControl>
        </div>
      ) : (
        <Button variant="contained" color="primary" onClick={start}>
          Start
        </Button>
      )}
    </div>
  );
}
