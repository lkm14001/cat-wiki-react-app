import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import logo from "../../assets/CatwikiLogo.svg";

const Header = () => {
  return (
    <>
      <Link to="/">
        <Box
          component="img"
          sx={{
            content: `url(${logo})`,
            display: "block",
          }}
        />
      </Link>
    </>
  );
};

export default Header;
