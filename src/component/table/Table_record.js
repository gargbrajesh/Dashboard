import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Input from './Controls/Input'
import Controls from "./Controls/Controls";
import SearchIcon from "@material-ui/icons/Search";
import TableHeader from "./TableHeader";
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  Container,
  Toolbar,
  InputAdornment,
  TableSortLabel,
} from "@material-ui/core";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function Table_record() {
  const useStyle = makeStyles((theme) => ({
    root: {
      maxWidth: "80vw",
      backgroundColor: theme.palette.primary[500],
      paddingTop: theme.spacing(2),
    },
    table: {
      marginTop: theme.spacing(2),
      "& thead th": {
        fontWeight: "600",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
      },
      "& tbody td": {
        fontWeight: "300",
      },
      "& tbody tr:hover": {
        backgroundColor: "#fffbf2",
        cursor: "pointer",
      },
    },
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    searchInput: {
      width: "75%",
    },
  }));

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [filterFn, setFilterFn] = useState("");
  const [rowPerPage, setRowPerPage] = useState(8);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
        console.log(resp);
      });
  }, []);
  const classes = useStyle();
  const onChangePage = (event, nextPage) => {
    setPage(nextPage);
  };
  const onChangeRowsPerPage = (e) => {
    setRowPerPage(e.target.value);
  };
  const handleSearch = (e) => {
    setFilterFn(e.target.value);
  };

  const createSortHandler = (property) => (e) => {
    handleRequestSort(e, property);
  };
  return (
    <Container className={classes.root}>
      <Toolbar>
        <Controls.Input
          label="Search Employees"
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHeader
            order={order}
            orderBy={orderBy}
            createSortHandler={createSortHandler}
          />
          <TableBody>
            {stableSort(data, getComparator(order, orderBy))
              .filter((item) => {
                if (filterFn == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(filterFn.toLowerCase())
                ) {
                  return item;
                }
              })
              .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
              .map((data) => (
                <TableRow>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.company.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[8, 10, 15, 20]}
          count={data.length}
          rowsPerPage={rowPerPage}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          component="div"
        />
      </TableContainer>
    </Container>
  );
}
export default Table_record;
