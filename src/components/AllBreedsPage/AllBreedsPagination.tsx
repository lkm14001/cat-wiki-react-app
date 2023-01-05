import Pagination from "@mui/material/Pagination";

interface paginationProps {
  totalPosts: number;
  postsPerPage: number;
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const AllBreedsPagination = (props: paginationProps) => {
  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    props.setCurrentPage(value);
  };

  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Pagination
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 4,
        "& .MuiPaginationItem-page.Mui-selected":
          {
            backgroundColor: "black",
            color: "white",
          },
      }}
      count={pages.length}
      shape="rounded"
      size="large"
      page={props.page}
      onChange={handlePageChange}
    />
  );
};

export default AllBreedsPagination;
