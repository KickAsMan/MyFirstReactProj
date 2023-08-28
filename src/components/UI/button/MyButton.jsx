import React from 'react'
import classes from './MyButton.module.css'
import Button from '@mui/material/Button';
export default function MyButton({children, ...props}) {
  return (
    <Button {...props} className={classes.myBtn}>
        {children}
    </Button>
  )
}
