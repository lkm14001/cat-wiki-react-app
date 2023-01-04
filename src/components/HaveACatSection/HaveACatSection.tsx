import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

import flexImage1 from '../../assets/image2.png';
import flexImage2 from '../../assets/image1.png';
import flexImage3 from '../../assets/image3.png';

const HaveACatSection = () => {
  return (
        <Box component="div" sx={{
            padding:{
                xs:0,
                sm:10
            },
            
            display:"flex",
            justifyContent:"space-around",
            alignContent:"center",
            flexDirection:{
                xs:"column",
                md:"row",
            },
        }}>
            <Box component="div" sx={{
                width:455,
                marginBottom:3,
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                gap:6
            }}>
                <Typography sx={{
                    width:{
                        xs:325,
                        sm:430
                    },
                    color:"rgba(41, 21, 7, 1)",
                    lineHeight:'48px',
                    fontWeight:700,
                    fontSize:{
                        xs:"40px",
                        md:"42px",
                        lg:"45px",
                        xl:'48px'
                    }
                }}>Why should you have a cat?</Typography>
                <Typography sx={{
                    width:{
                        xs:330,
                        sm:450
                    },
                    fontWeight:500,
                    color:"egba(41,21,7,1)",
                    fontSize:"18px",
                }}>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</Typography>
                <Typography
            sx={{
              textTransform: "uppercase",
              display: {
                xs: "none",
                sm:"flex",
              },
              alignItems:"center",
              fontSize: {
                sm: "10px",
                md: "15px",
                xl: "18px",
              },
              fontWeight:600,
              color:"rgba(41, 21, 7, 0.6)",
            }}
          >
            see more 
          <TrendingFlatIcon sx={{marginBottom:"4px"}}/>
          </Typography>
            </Box>
            <Box component="div" sx={{
                display:"flex",
            }}>
                <Box component="div" sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-end",
                }}>
                    <Box component="div" sx={{
                        margin:1,
                        borderRadius:"24px",
                       backgroundImage:`url(${flexImage1})`,
                       width:{
                        xs:172,
                        sm:190,
                        md:220,
                        lg:250,
                        xl:272,
                       },
                       height:{
                        xs:105,
                        sm:115,
                        md:130,
                        lg:145,
                        xl:162
                       },
                       backgroundSize:"100% 100%",
                    }} />
                    <Box component="div" sx={{
                        margin:1,
                        borderRadius:"24px",
                        backgroundImage:`url(${flexImage2})`,
                        width:{
                            xs:122,
                            sm:135,
                            md:150,
                            lg:170,
                            xl:195,
                        },
                        height:{
                            xs:184,
                            sm:200,
                            md:230,
                            lg:265,
                            xl:293
                        },
                        bakcgroundSize:"100% 100%",
                    }} />
                </Box>
                <Box component="div" sx={{
                    margin:1,
                    borderRadius:"24px",
                    width:{
                        xs:150,
                        sm:170,
                        md:190,
                        lg:210,
                        xl:238
                    },
                    height:{
                        xs:242,
                        sm:265,
                        md:295,
                        lg:330,
                        xl:385
                    },
                    backgroundImage:`url(${flexImage3})`
                }} />
            </Box>
        </Box>

  )
}



export default HaveACatSection