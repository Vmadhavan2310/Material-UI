import {Button,Stack,IconButton,ToggleButton,ToggleButtonGroup} from '@mui/material'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>


export default function MUIbutton() {
  return (
     <Stack display='block' className='container'>
        <Button variant='text' size='small' endIcon={<HourglassBottomIcon/>}>Text Button</Button>
        <Button variant='contained' href='https://www.google.com' target="_blank" color="warning" size='large'>Contained Button</Button>
        <Button variant='contained' size='medium' endIcon={<SendRoundedIcon/>}>Outline Button</Button>
        <IconButton aria-label='send' color='info' size='small'>
            <SendRoundedIcon/>
        </IconButton>
    </Stack> 
    
  )
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>