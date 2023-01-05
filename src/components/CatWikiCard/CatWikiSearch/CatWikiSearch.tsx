import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useEffect,useState } from 'react';

const CatWikiSearch = () => {
  const data = ["leela", "krishna", "mohan"];
  // const [searchData,setSearchData] = useState<{name:string,id:string}[]>([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => {
      let searchDetails:{name:string,id:string}[] = [];
      data.forEach((ele:any) => {
        const search = {
          name:ele.name,
          id:ele.reference_image_id
        }
        searchDetails.push(search)
      })
      // setSearchData([...searchDetails,...searchData])
    })
  },[])
  
  return (
    <>
      <Autocomplete
        options={data}
        sx={{
          marginTop: {
            xs: 1,
            sm: 2,
            md: 3,
            xl: 4,
          },
          width: {
            xs: 120,
            sm: 120,
            md: 220,
            lg: 280,
            xl: 380,
          },
          
          backgroundColor: "white",
          outline: "none",
          border: "none",
          borderRadius: {
            xs:4,
            md:8,
            lg:10
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        selectOnFocus={false}
        PaperComponent={({ children }) => (
          <Paper
            sx={{
              borderRadius: 4,
              marginTop: {
                xs: 1,
              },
            }}
          >
            {children}
          </Paper>
        )}
        popupIcon={<SearchIcon sx={{ marginRight: 2 }} />}
        renderInput={(params) => (
          <TextField {...params} placeholder="Eneter Your breed" sx={{}} />
        )}
      />
      {/* {console.log(searchData)} */}
    </>
  );
};

export default CatWikiSearch;
