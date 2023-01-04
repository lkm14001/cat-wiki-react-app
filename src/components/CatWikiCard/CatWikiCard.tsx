import MainImage from "../../assets/HeroImagelg.png";
import MainImageSm from "../../assets/HeroImagesm.png";
import MainImagexl from "../../assets/HeroImagexl.png";
import CatWikiSearch from "./CatWikiSearch/CatWikiSearch";
import logo from "../../assets/CatwikiLogo.svg";

import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const CatWikiCard = () => {
  const styles: any = {
    catWikiSearch: {
      display: "flex",
      flexDirection: "column",
      width: {
        xs:150,
        sm:200,
        md:250,
        lg:300,
        xl: 320,
      },
      marginLeft: {
        xs:"40px",
        sm:"50px",
        md:"60px",
        lg:"70px",
        xl: "80px",
      },
      paddingTop: {
        xs:"40px",
        sm:"50px",
        md:"60px",
        lg:"70px",
        xl: "80px",
      },
    },
    catWikiContainer: {
      width: "100%",
      marginTop: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: {
        xs: 200,
        sm: 300,
        md: 350,
        xl: 500,
      },

      backgroundSize: "100% 100%",
      backgroundImage: {
        xs: `url(${MainImageSm})`,
        md: `url(${MainImage})`,
        xl: `url(${MainImagexl})`,
      },
    },
    moreBreedsContainer: {},
  };

  return (
    <>
      <Paper sx={styles.catWikiContainer}>
        <Box component="div" sx={styles.catWikiSearch}>
          <Box
            component="img"
            sx={{
              filter: "invert(1)",
              content: `url(${logo})`,
              width: {
                xs:80,
                sm:100,
                md:150,
                lg:220,
                xl: 309,
              },
            }}
          ></Box>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: {
                xs:'12px',
                sm:'16px',
                md:'18px',
                lg:'22px',
                xl: "24px",
              },
            }}
          >
            Get to know more about your cat breed
          </Typography>
          <CatWikiSearch />
        </Box>
      </Paper>
    </>
  );
};

export default CatWikiCard;
