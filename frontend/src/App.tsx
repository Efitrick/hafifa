import { Box, Button } from '@mui/material';
import { useState } from 'react';
import Style from './app.style.ts';
import { MuiOtpInput } from 'mui-one-time-password-input';
import axios from 'axios';
''
const App: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [missingNumber, setMissingNumber] = useState<string>();
  const [isDisable, setIsDisable] = useState<boolean>(true);

  const handleChange = (newValue: string) => {
    if (!isNaN(parseInt(newValue[newValue.length - 1])) || newValue.length === 0) {
      setId(newValue);
      console.log(id);
      console.log(newValue);

      if (newValue.length < 8) {
        setIsDisable(true);
      } else {
        setIsDisable(false);
      }
    }
  };
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id?.length === 8) {
      setMissingNumber(
        (
          await axios.post(`http://localhost:8080/ids/`, {
            params: {
              identityDocument: id,
            },
          })
        ).data.missingNumber,
      );
    }
  };

  return (
    <Box sx={Style.app} component="form" onSubmit={submitHandler}>
      <Box sx={Style.title}> find the last digit </Box>
      <Box sx={Style.numbers}>
        <MuiOtpInput
          length={8}
          value={id}
          onChange={handleChange}
          TextFieldsProps={{
            inputProps: {
              inputMode: 'numeric',
              pattern: '[0-9]',
            },
          }}
          sx={Style.inputNumber}
        />
        <Box sx={Style.missingNumber}> {missingNumber}</Box>
      </Box>
      <Box sx={Style.buttons}>
        <Button type="submit" sx={Style.calcButton} variant="contained" disabled={isDisable}>
          calculate
        </Button>
        <Button
          variant="contained"
          sx={Style.clearButton}
          onClick={() => {
            setId('');
            setMissingNumber('');
          }}
        >
          clear
        </Button>
      </Box>
    </Box>
  );
};

export default App;
