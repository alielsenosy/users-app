import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import uuid from "react-uuid";
import Button from "@mui/material/Button";

import AddData from "../AddData/AddData";
import EditData from "../EditData/EditData";
import ShowData from "../ShowData/ShowData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({
  data,
  deletaUser,
  setNewUser,
  EditUser,
}) {
  return (
    <TableContainer component={Paper}>
      <AddData addUser={setNewUser} />

      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Street</StyledTableCell>
            <StyledTableCell align="left">Suite</StyledTableCell>
            <StyledTableCell align="center">Show/Delete/Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <StyledTableRow key={uuid()}>
              <StyledTableCell align="left"> {user.name} </StyledTableCell>
              <StyledTableCell align="left">{user.phone}</StyledTableCell>
              <StyledTableCell align="left"> {user.email} </StyledTableCell>
              <StyledTableCell align="left">
                {user.address.street}
              </StyledTableCell>
              <StyledTableCell align="left">
                {user.address.suite}
              </StyledTableCell>

              <StyledTableCell sx={{ display: "flex" }} align="right">
                <ShowData data={user} />
                <EditData EditUser={EditUser} data={user} />
                <Button
                  variant="contained"
                  color="error"
                  onClick={(e) => deletaUser(e, user.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
