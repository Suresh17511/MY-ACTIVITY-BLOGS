import React from 'react';
import './homepage.css';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core';
import {googleProvider} from '../../config/authMethods';
import socialMediaAuth from '../../service/auth';
const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    width: '50%',
    marginTop: 30,
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
}));
function HomePage() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  const classes = useStyles();
  return (
    <div className="homepage">
      <h1>My blog site</h1>
      <Button
        variant="outlined"
        color="primary"
        className={classes.buttonStyle}
      >
        SIGNUP WITH G-MAIL AND PASSWORD
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.buttonStyle}
      >
        SIGN-IN WITH G-MAIL AND PASSWORD
      </Button>
      <Button
        onClick={() => handleOnClick(googleProvider)}
        variant="outlined"
        color="primary"
        className={classes.buttonStyle}
        startIcon={
          <Avatar src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" />
        }
      >
        SIGN-IN WITH GOOGLE
      </Button>
    </div>
  );
}

export default HomePage;
