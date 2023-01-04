import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

interface breedCardsTypes {
  title:string,
  url:string,
  id:string
}

const BreedCards = (props:breedCardsTypes) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link style={{textDecoration:"none"}} to={`/breed/${props.id}`}>
        <Box
          component="div"
          sx={{
            borderRadius:{
              xs:"12px",
              sm:"15px",
              md:"24px"
            },
            width: {
              xs: 135,
              sm: 170,
              md: 190,
              lg: 200,
              xl: 220,
            },
            height: {
              xs: 135,
              sm: 170,
              md: 190,
              lg: 200,
              xl: 220,
            },
            backgroundImage:`url(${props.url})`,
            backgroundColor: "brown",
            backgroundSize:"100% 100%"
          }}
        />
        <Typography
          sx={{
            color: "rgba(41, 21, 7, 1)",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "16px",
              lg: "18px",
              xl: "18px",
            },
            marginTop: {
              xs: "10px",
              sm: "12px",
              md: "15px",
              lg: "18px",
              xl: "20px",
            },
            fontWeight:600
          }}
        >
          {props.title}
        </Typography>
        </Link>
      </Box>
    </>
  );
};

export default BreedCards;
