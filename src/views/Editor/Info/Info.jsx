import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import YAML from 'json2yaml';
import {CopyToClipboard} from 'react-copy-to-clipboard';
var ymlText;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function OutlinedTextFields() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    // var test =
    // YAML.stringify({
    //   "json": [
    //     "rigid",
    //     "better for data interchange"
    //   ],
    //   "yaml": [
    //     "slim and flexible",
    //     "better for configuration"
    //   ],
    //   "object": {
    //     "key": "value",
    //     "array": [
    //       {
    //         "null_value": null
    //       },
    //       {
    //         "boolean": true
    //       },
    //       {
    //         "integer": 1
    //       }
    //     ]
    //   },
    //   "paragraph": "Blank lines denote\nparagraph breaks\n",
    //   "content": "Or we\ncan auto\nconvert line breaks\nto save space"})
    //   console.log(test);
   console.log(checked)
    setValues({ ...values,
       ['ymlText']:YAML.stringify({
    
      title: values.title,
      version: values.version,
      description: values.description,
      serviceurl: values.serviceurl,
      contactname: values.contactname,
      contactemail: values.contactemail,
      licenseurl: values.licenseurl,
      licensename:values.licensename,
      servers:checked.map((k,v)=>{

   return {'server':k}
      })

       }),['copied']:false});
    setOpen(true);
   // setValues({ ...values, ['ymlText']: 'event.target.value' });
  }

  function handleClose() {
    setOpen(false);
  }
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: '',
    version: '',
    description: '',
    serviceurl: '',
    contactname: '',
    contactemail: '',
    licenseurl: '',
    licensename:'',
    servers:'',
    copied:false,
    ymlText:'fhhgjhjghgkjkjkjk'
  });
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
<div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container   justify="flex-end"  xs={12}>    
         <Button  onClick={handleClickOpen} variant="contained" color="secondary" flexShrink={0}  sizeSmall className={classes.button}>
        Preview
       
      </Button></Grid>
        <Grid item xs={6}>
        <TextField
        id="outlined-name"
        label="Title"
        className={classes.textField}
        value={values.title}
        onChange={handleChange('title')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
        </Grid>
        <Grid item xs={6}>
        <TextField
        id="outlined-name"
        label="Version"
        className={classes.textField}
        value={values.version}
        onChange={handleChange('version')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
</Grid>
<Grid  xs={12}>
<TextField
        id="outlined-full-width"
        label="Description"
        style={{ margin: 8 }}
        fullWidth
        multiline
        rows="5"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.description}
        onChange={handleChange('description')}
      />

</Grid>

<Grid item xs={12}>

<TextField
        id="outlined-full-width"
        label="Terms of Service URL"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.serviceurl}
        onChange={handleChange('serviceurl')}
      />
</Grid>

<Grid item xs={6}>

<TextField
        id="outlined-name"
        label="Contact Name"
        className={classes.textField}
        value={values.contactname}
        onChange={handleChange('contactname')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
</Grid>
<Grid item xs={6}>
<TextField
        id="outlined-name"
        label="Contact Email"
        className={classes.textField}
        value={values.contactemail}
        onChange={handleChange('contactemail')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
</Grid>
<Grid item xs={6}>      
<TextField
        id="outlined-name"
        label="License URL"
        className={classes.textField}
        value={values.licenseurl}
        onChange={handleChange('licenseurl')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
      </Grid>
<Grid item  xs={6}>

<TextField
        id="outlined-name"
        label="License Name"
        className={classes.textField}
        value={values.licensename}
        onChange={handleChange('licensename')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />

</Grid>
<Grid  xs={12}>
<List className={classes.root}
  subheader={
    <ListSubheader component="div" id="nested-list-subheader">
      Servers
    </ListSubheader>
  }
>
      {["http://dev.example.com", "http://test.example.com", "http://prod.example.com"].map(value => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${value + 1}`} />
            <ListItemSecondaryAction>
              {/* <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton> */}
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>

</Grid>

</Grid>

<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            {/* <Button color="inherit" onClick={handleClose}>
              Copy
            </Button> */}
            <CopyToClipboard text={values.ymlText}
          onCopy={() =>
            setValues({ ...values, ['copied']: true })
         
           
           }>
           <Button color="inherit" >Copy to clipboard</Button>

        </CopyToClipboard>
        {values.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
          </Toolbar>
        </AppBar>
        <Typography variant="h6" className={classes.title}>
              
            </Typography>
         
            <Typography variant="h6" style={{'margin':'100px 100px '}} className={classes.title}>
            <TextField
        id="outlined-full-width"
        label="YAML"
        readOnly
        style={{ margin: 8 }}
        fullWidth
        multiline
        rows="80"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        value={values.ymlText}
        
      />
            </Typography>
           
      </Dialog>






</div>






    </form>
  );
}
