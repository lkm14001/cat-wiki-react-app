import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import logo from '../../assets/CatwikiLogo.svg';

const Footer = () => {
  return (
    <Box component="div" sx={{
        padding:2,
        borderTopLeftRadius:"24px",
        borderTopRightRadius:"24px",
        backgroundColor:"black",
        color:"white",
        display:"flex",
        justifyContent:{
            xs:"flex-start",
            sm:"space-around",
        },
        flexDirection:{
            xs:"column",
            sm:"row"
        },
        alignItems:"center"
    }}>
        <Box component="img" sx={{
            content:`url(${logo})`,
            filter:"invert(1)",
        }} />
        <Box component="div" sx={{
            
        }}>
            <Typography sx={{
                fontSize:{
                    xs:"12px",
                    md:"18px"
                }
            }}>Created by Leela Krishna Mohan - devChallenge.io 2022</Typography>
        </Box>
    </Box>
  )
}

export default Footer