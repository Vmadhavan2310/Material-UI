import {Stack,TextField,InputAdornment,IconButton} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Assets/Components.css'
import { ChangeEvent, useState } from 'react';
export default function MUItextField() {
    const[pwd,setpwd]=useState('')
    
    console.log(pwd)
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row' >
            <TextField variant='outlined' label='First Name' type='password'  autoComplete='on' size='small'
            color='warning' className='test' helperText="Enter only Uppercase"/>
            <TextField variant='standard' label='Last Name' defaultValue="Hello world" InputProps={{
                readOnly:false,
            }} size='small'/>
            <TextField type='number' variant='filled' label='Number' InputLabelProps={{
                shrink:true,
            }} size='small'/>
            <Stack direction='row'>
            <TextField variant='outlined' label="password" InputProps={{
                endAdornment:<InputAdornment position='end'>
                    <IconButton>
                    <VisibilityIcon/>
                    </IconButton>
                    </InputAdornment>,
            }} type={pwd?'password':'string'} value={pwd} onChange={(e)=>setpwd(e.target.value)} error={!pwd} helperText={!pwd?"Required":"Don't share the password"} />
            </Stack>
        </Stack>
    </Stack>
  )
}
