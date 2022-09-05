import React from "react";
import EnhancedTableHead from "./Form/DataTable.js";
import Button from "./Button/Button.js";
import { Box, Divider } from "@mui/material";
import ContentContainer from "../context/ContentContainer.js";
import Searchbar from "./Searbar.js";
import Pagination from "./Pagination.js";
import { useNavigate } from "react-router-dom";
function AdminRoles() {
  const navigate = useNavigate();
  const cols = [
    "Role Name",
    "Description",
    "Affiliation level (Dealer/Cat)",
    "Permissions Currently Granted",
    "",
  ];
  const rows = [
    {
      id: "1",
      roleName: "Admin",
      description: "Admin",
      affiliationLevel: "Dealer",
      permissions: "Test",
    },
    {
      id: "2",
      roleName: "Admin",
      description: "Admin",
      affiliationLevel: "CAT",
      permissions: "Test",
    },
    {
      id: "3",
      roleName: "Admin",
      description: "Admin",
      affiliationLevel: "CAT",
      permissions: "Test",
    },
    {
      id: "4",
      roleName: "Admin",
      description: "Admin",
      affiliationLevel: "CAT",
      permissions: "Test",
    },
  ];

  return (
    <Box>
      <ContentContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Searchbar placeholder={"Search roles"} />
          </div>
          <div>
            <Box sx={{ display: "flex" }}>
              <Pagination count={rows.length} />
              <Button variant="outlined" label="Filter" color="black" />
              <Button
                variant="contained"
                label="Create New Role"
                bgColor="#FFCD11"
                color="black"
                onClick={() => navigate("/createRole")}
              />
            </Box>
          </div>
        </Box>
        <Divider
          sx={{
            marginTop: "22px",
          }}
        />
        <EnhancedTableHead cols={cols} rows={rows} />
      </ContentContainer>
    </Box>
  );
}

export default AdminRoles;
