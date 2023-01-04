import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BreedSpecificCards from "./BreedSpecificCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface breedPageDataType {
  title: string;
  breed_id: string;
  url: string;
  desc: string;
  temperament: string;
  origin: string;
  lifeSpan: string;
  adaptability: number;
  affectionLevel: number;
  childFriendly: number;
  grooming: number;
  intelligence: number;
  healthIssues: number;
  socialNeeds: number;
  strangerFriendly: number;
}
interface characteristicCountType {
  count: number | undefined;
}
const BreedImageComponent = (props: characteristicCountType) => {
  const count = props.count!
  const remaining_count = 5 - props.count!;

  return (
    <>
      <Box component="div" sx={{ display: "inline-flex", gap: 1 }}>
        {count<=5 &&
          [...Array(props.count!)].map((ele, key) => (
            <Box
              component="div"
              sx={{
                width: 55,
                height: 12,
                borderRadius: 8,
                backgroundColor: "rgba(84, 68, 57, 1)",
              }}
            />
          ))
        }
        {
          remaining_count > 0 && [...Array(remaining_count)].map((ele, key) => (
            <Box
              component="div"
              sx={{
                width: 55,
                height: 12,
                borderRadius: 8,
                backgroundColor: "rgba(224, 224, 224, 1)",
              }}
            />
          ))
        }
        
      </Box>
    </>
  );
};

const BreedPage = () => {
  const { id } = useParams();
  const [breedPageData, setBreedPageData] = useState<breedPageDataType>();
  const [breedSpecificImages, setBreedSpecificImages] = useState<string[]>([]);

  useEffect(() => {
    let breedDetails: breedPageDataType;

    fetch("https://api.thecatapi.com/v1/images/" + id)
      .then((res) => res.json())
      .then((data) => {
        [data].forEach((ele: any) => {
          breedDetails = {
            title: ele.breeds[0].name,
            breed_id: ele.breeds[0].id,
            url: ele.url,
            desc: ele.breeds[0].description,
            temperament: ele.breeds[0].temperament,
            origin: ele.breeds[0].origin,
            lifeSpan: ele.breeds[0].life_span,
            adaptability: ele.breeds[0].adaptability,
            affectionLevel: ele.breeds[0].affection_level,
            childFriendly: ele.breeds[0].child_friendly,
            grooming: ele.breeds[0].grooming,
            intelligence: ele.breeds[0].intelligence,
            healthIssues: ele.breeds[0].health_issues,
            socialNeeds: ele.breeds[0].social_needs,
            strangerFriendly: ele.breeds[0].stranger_friendly,
          };
        });
        let breedImages: string[] = [];
        let queryString: string[] = [
          `limit=10`,
          `breed_ids=${breedDetails.breed_id}`,
        ];
        fetch(
          "https://api.thecatapi.com/v1/images/search?" + queryString.join("&")
        )
          .then((res) => res.json())
          .then((data) => {
            data.forEach((ele: any) => {
              breedImages.push(ele.url);
            });
            setBreedSpecificImages([...breedSpecificImages, ...breedImages]);
          });
        setBreedPageData({ ...breedPageData, ...breedDetails });
      });
  }, []);

  return (
    <>
      <Box
        component="div"
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: {
            xs: "center",
            md: "space-around",
          },
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          gap:{
            xs:5,
            md:2
          }
        }}
      >
        <Box
          component="div"
          sx={{
            borderRadius: {
              xs: "18px",
              sm: "20x",
              md: "24px",
            },
            width: {
              xs: 250,
              sm: 250,
              md: 280,
              lg: 320,
              xl: 370,
            },
            height: {
              xs: 250,
              sm: 250,
              md: 280,
              lg: 320,
              xl: 370,
            },
            backgroundImage: `url(${breedPageData?.url})`,
            backgroundSize: "100% 100%",
          }}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {
              sm: 480,
              md: 550,
              xl: 803,
            },
            gap: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "36px",
              },
              fontWeight: 600,
              color:"rgba(41, 21, 7, 1)"
            }}
          >
            {breedPageData?.title}
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 500, textAlign: "left",color:"rgba(41, 21, 7, 1)" }}
          >
            {breedPageData?.desc}
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
            Temperament:
            <Typography sx={{ fontWeight: 500, display: "inline" }}>
              {breedPageData?.temperament}
            </Typography>
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
            Origin:
            <Typography sx={{ fontWeight: 500, display: "inline" }}>
              {breedPageData?.origin}
            </Typography>
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
            Life Span:
            <Typography sx={{ fontWeight: 500, display: "inline",color:"rgba(41, 21, 7, 1)" }}>
              {breedPageData?.lifeSpan}
            </Typography>
          </Typography>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Adaptability: 
            </Typography>
            <BreedImageComponent count={breedPageData?.adaptability} />
          </Box>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Affection Level: 
            </Typography>
            <BreedImageComponent count={breedPageData?.affectionLevel} />
          </Box>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Child Friendly: 
            </Typography>
            <BreedImageComponent count={breedPageData?.childFriendly} />
          </Box>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Grooming: 
            </Typography>
            <BreedImageComponent count={breedPageData?.grooming} />
          </Box>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Intelligence: 
            </Typography>
            <BreedImageComponent count={breedPageData?.intelligence} />
          </Box>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Health Issues: 
            </Typography>
            <BreedImageComponent count={breedPageData?.healthIssues} />
          </Box>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Social Needs: 
            </Typography>
            <BreedImageComponent count={breedPageData?.socialNeeds} />
          </Box>
          <Box component="div" sx={{display:"flex",width:{md:510},justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{ fontSize: "16px", fontWeight: 700,color:"rgba(41, 21, 7, 1)" }}>
              Stranger Friendly: 
            </Typography>
            <BreedImageComponent count={breedPageData?.strangerFriendly} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          my: {
            xs: 3,
            sm: 4,
            md: 5,
          },
          display: "flex",
          flexDirection: "column",
          gap:5,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "36px" }, fontWeight: 600,color:"rgba(41, 21, 7, 1)" }}
        >
          Other Photos
        </Typography>
        <BreedSpecificCards breedImagesArray={breedSpecificImages} />
      </Box>
      {console.log(breedPageData)}
    </>
  );
};

export default BreedPage;
