import {Stack,ToggleButtonGroup,ToggleButton} from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from 'react'




export default function MUItogleBtnGroup() {
    const [format,setFormat]=useState<string[]>([])
    const changeHandlerFormat=(event:React.MouseEvent<HTMLElement>,updatedFormats:string[])=>{
        setFormat(updatedFormats)
        
    }
    console.log(format)
  return (
    <Stack direction='row' >
        <ToggleButtonGroup value={format} onChange={changeHandlerFormat} size='small' color='primary' exclusive orientation='horizontal'>
            <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value='underlined'><FormatUnderlinedIcon/></ToggleButton>

        </ToggleButtonGroup>
    </Stack>
  )
}

