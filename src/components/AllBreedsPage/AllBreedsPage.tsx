import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllBreedsPagination from "./AllBreedsPagination";

const AllBreedsPage = () => {
  interface Breed {
    breedImage: string;
    breedName: string;
    breedDescription: string;
    reference_image_id: string;
  }

  const [breedListData, setBreedListData] = useState<Breed[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/breeds?RAND=random&api_key=live_X2bnAn8lZvtL07wU9HDJTFPPOriHIu6CTlQPx37HhjTDYtGDvzfTnirgmlT9fCgS"
    )
      .then((res) => res.json())
      .then((data) => {
        let breedList: Breed[] = [];
        data.forEach((ele: any) => {
          if (ele.reference_image_id !== undefined) {
            fetch(
              "https://api.thecatapi.com/v1/images/" + ele.reference_image_id
            )
              .then((res) => res.json())
              .then((data) => {
                const breed: Breed = {
                  breedImage: data.url,
                  breedName: ele.name,
                  breedDescription: ele.description,
                  reference_image_id: ele.reference_image_id,
                };
                breedList.push(breed);
                setBreedListData([...breedList, ...breedListData]);
              });
          }
        });
      });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = breedListData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Box
        component="div"
        sx={{
          my: 3,

          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
          Top 10 Most Searched Breeds
        </Typography>
        {currentPosts.map((ele: any, key: any) => (
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              // justifyContent:{
              //     xs:"space-around",
              //     md:"flex-start"
              // },
              gap: 4,
            }}
          >
            <Link to={`/cat-wiki-react-app/breed/${ele.reference_image_id}`}>
              <Box
                component="div"
                sx={{
                  borderRadius: "24px",
                  width: {
                    xs: 250,
                    md: 200,
                  },
                  height: {
                    xs: 250,
                    md: 200,
                  },
                  backgroundImage: `url(${ele.breedImage})`,
                  backgroundSize: "100% 100%",
                }}
              />
            </Link>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: {
                  xs: 340,
                  sm: 550,
                  lg: 888,
                },
              }}
            >
              <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>{`${
                key + 1
              }. ${ele.breedName}`}</Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  texAlign: "justify",
                  width: {
                    xs: 300,
                    sm: 400,
                    md: 600,
                    lg: 700,
                    xl: 888,
                  },
                }}
              >
                {ele.breedDescription}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <AllBreedsPagination
        totalPosts={breedListData.length}
        page={currentPage}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AllBreedsPage;
