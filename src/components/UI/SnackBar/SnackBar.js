import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function SnackBar(props) {
    return (
        <div>
            <Snackbar 
        open={open} anchorOrigin={{ vertical: 'top',horizontal: 'right',}} autoHideDuration={3000} onClose={handleClose}
        // TransitionComponent={TransitionRight}
      >
      {/* <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert> */}
        <MuiAlert elevation={6}  variant="filled"  onClose={handleClose} severity="success" sx={{ width: '100%' }}>hi</MuiAlert>
      </Snackbar>
        </div>
    );
}

export default SnackBar;