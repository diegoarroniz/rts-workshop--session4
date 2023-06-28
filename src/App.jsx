import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [memory, setMemory] = useState([]);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  //save counter in memory
  const save = () => {
    setMemory([counter, ...memory]);
  };

  return (
    <div>
      <div>
        <h1>React Counter</h1>
      </div>
      <div className="card">
        <Button
          onClick={() => increase()}
          variant="outlined"
          className="spaceBtns"
        >
          +
        </Button>
        <p>Count is {counter}</p>
        <Button onClick={() => decrease()} variant="outlined" className="spaceBtns">
          -
        </Button>
        
        <div>
        <div className="btn__container">
          <Button data-testid="reset" onClick={() => reset()} variant="contained">
            Reset
          </Button>
          <Button data-testid="save" onClick={() => save()} variant="contained" sx={{ bgcolor: 'green' }}>
            Save Data
          </Button>
        </div>
          <TableContainer
            component={Paper}
            sx={{ width: 300, margin: '2rem auto' }}
          >
            <Table sx={{ width: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell role="columnheader">Data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {memory.map((row) => (
                  <TableRow
                    key={0}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" role="cell">
                      {row}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
