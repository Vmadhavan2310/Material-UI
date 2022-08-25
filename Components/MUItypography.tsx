
import {Typography,Stack} from '@mui/material';

export const MUItypography=()=>{
  return (
    <Stack>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3'>h3 heading</Typography>
        <Typography variant='h4'>h4 heading</Typography>
        <Typography variant='h5' component='h4'>h5 heading</Typography>
        <Typography variant='h6' color="warning">h6 heading</Typography>

        <Typography variant='subtitle1'>sub title 1</Typography>
        <Typography variant='subtitle2'>sub title 2</Typography>
        
        <Typography variant='body1' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error harum, nam dolore consectetur, soluta dolorem nobis porro, placeat fuga aliquam corporis sequi voluptatem. Quibusdam, labore accusamus ea nostrum error corporis.</Typography>

        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora ipsam deleniti. Quis totam blanditiis eum molestias sint maiores unde repudiandae in facilis, atque at magnam repellendus, consectetur, temporibus ab?</Typography>

        

    </Stack>
  )
}
