import { Box } from "@mui/material";

interface breedImagesArrayType {
  breedImagesArray:string[],
}


const BreedSpecificCards = (props:breedImagesArrayType) => {
  return (
    <>
      <Box component="div" sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:4,
        justifyContent:"center"
      }}>
        {
          props.breedImagesArray.map((ele,key) => (
            <Box
          component="div"
          key={key}
          sx={{
            borderRadius:"24px",
            width: {
              xs: 190,
              sm: 200,
              md: 220,
              lg: 278,
            },
            height: {
              xs: 190,
              sm: 200,
              md: 220,
              lg: 278,
            },
            backgroundImage: `url(${ele})`,
            backgroundSize:"100% 100%"
          }}
        />
          ))
        }
      </Box>

    </>
  );
};

export default BreedSpecificCards;
