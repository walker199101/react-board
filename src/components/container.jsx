import './container.scss';
import {
  Alert,
  AlertTitle
} from '@mui/material';
import { useBoardState } from './../boardContext';

function Container({ children }) {
  const state = useBoardState();
  const { error } = state;
  return (
    <div className="container">
      { error && 
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      }
      {children}
    </div>
  );
}

export default Container;
