import { SxProps } from '@mui/material';

const app: SxProps = {
  color: '#d7d7ed',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#020253',
};
const title: SxProps = {
  fontSize: '4vh',
  marginBottom: '3vh',
};
const buttons: SxProps = {
  display: 'flex',
  gap: '2vh',
  mt: '3vh',
  color: '#d7d7ed',
};
const numbers: SxProps = {
  display: 'flex',
  width: '60%',
  color: '04572cf7',
};
const missingNumber: SxProps = {
  display: 'flex',
  listStyleType: 'none',
  padding: '0px',
  margin: '0px',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#737ab7',
  width: '9%',
  marginLeft: '2vh',
  color: '#d7d7ed',
  fontSize: '1.75vh',
  borderRadius: '20px',
  border: '2px solid #d7d7ed',
};
const inputNumber: SxProps = {
  width: '90%',
  height: '100%',
  color: '04572cf7',
  '& .MuiFormControl-root': {
    borderRadius: '20px',
    backgroundColor: '#3a3a8b',
    '& .MuiInputBase-root': {
      borderRadius: '20px',
      border: '2px solid #d7d7ed',
      '& .MuiInputBase-input': {
        color: '#d7d7ed',
        fontSize: '1.75vh',
      },
    },
  },
};

const calcButton: SxProps = {
  backgroundColor: '#04572cf7',
  "&:disabled" : {
    backgroundColor:'#324129',
    color: 'darkgray',
  }
}
const clearButton: SxProps = {
  backgroundColor: '#6e0025',

}


export default { app, title, buttons, numbers, missingNumber, inputNumber, calcButton , clearButton};
