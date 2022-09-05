import * as React from "react";
import { Table, Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactComponent as EditIcon } from "../../resources/images/EditIcon.svg";
import { ReactComponent as DeleteIcon } from "../../resources/images/DeleteIcon.svg";
import { useNavigate } from "react-router-dom";

export default function BasicTable({ cols, rows }) {
  const navigate = useNavigate();

  return (
    <Box>
      <TableContainer component={Paper} sx={{ marginTop: "32px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {cols.length &&
                cols.map((name) => (
                  <TableCell colSpan={1} sx={{ fontWeight: "bold" }}>
                    {name}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.roleName}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.affiliationLevel}</TableCell>
                <TableCell>{row.permissions}</TableCell>
                <TableCell>
                  <EditIcon
                    onClick={() =>
                      navigate("/createRole", { state: { data: { row } } })
                    }
                  />{" "}
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
