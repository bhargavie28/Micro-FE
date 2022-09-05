import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function PositionedSnackbar({variant, message}) {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

 

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical : 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      ><Alert  severity={variant}>{message}</Alert></Snackbar>
    </div>
  );
}
