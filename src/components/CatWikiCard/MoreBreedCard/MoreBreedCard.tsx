import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import BreedCards from "./BreedCards/BreedCards";

import { Link } from 'react-router-dom';

import {useEffect, useState} from 'react';

const MoreBreedCard = () => {
  // 
  const [breedImages,setBreedImages] = useState<{title:string,url:string,id:string}[]>([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds?limit=5")
    .then((res) => res.json())
    .then(data => {
      let breedData:{title:string,url:string,id:string}[] = [];
      data.forEach((element: any) => {
        
        fetch("https://api.thecatapi.com/v1/images/"+element.reference_image_id)
        .then(res => res.json())
        .then(data => {
          const breedObj = {
            title:element.name,
            url:data.url,
            id:element.reference_image_id,
          }
          breedData.push(breedObj)
          setBreedImages([...breedData,...breedImages])
        })
      });
    })
  },[])
  return (
    <>
      <Box
        component="div"
        sx={{
          padding: {
            xs: "16px 29px",
            sm: "28px 40px",
            md: "22px 60px",
            lg:"24px 80px",
            xl: "30px 108px",
          },
          backgroundColor: "#E3E1DC",
          
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20,
        }}
      >
        <Typography
          sx={{
            color: "#291507",
            fontWeight: 600,
            fontSize: {
              xs: "15px",
              sm: "20px",
              md: "22px",
              lg: "24px",
              xl: "26px",
            },
          }}
        >
          Most Searched Breeds
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Typography
            sx={{
              color: "#291507",
              fontWeight: 700,
              fontSize: {
                xs: "20px",
                sm: "36px",
                md: "40px",
                lg: "45px",
                xl: "48px",
              },
              width: {
                xs: 200,
                sm: 300,
                md: 350,
                xl: 530,
              },
              lineHeight: "95%",
              marginTop: {
                xs: "30px",
                sm: "40px",
                md: "45px",
                xl: "50px",
              },
            }}
          >
            66+ Breeds For you to discover
          </Typography>
          <Link to="/cat-wiki-react-app/breed-list" style={{textDecoration:"none"}}>
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
          </Link>
        </Box>
        <Box component="div" sx={{
          marginTop:{
            xs:"26px",
            sm:"30px",
            md:"35px",
            lg:"45px"
          },
            display:"grid",
            // flexDirection:{
            //   xs:"column",
            //   md:"row"
            // },
            gridTemplateColumns:{
              xs:"repeat(1,1fr)",
              sm:"repeat(3,1fr)",
              md:"repeat(4,1fr)",
              lg:"repeat(5,1fr)"
            },
            gap:{
              xs:"10px",
              sm:"15px",
              md:"20px",
            },
            placeItems:"center center"
            // justifyContent:"space-between",
            // alignItems:"center"
        }}>
          {breedImages.map((ele,key)  => (
              <BreedCards title={ele.title} url={ele.url} key={key} id={ele.id}/>
          ))}
        </Box>
      </Box>

    </>
  );
};

export default MoreBreedCard;
