import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  FormControl,
  Divider,
} from "@mui/material";
import ContentContainer from "../context/ContentContainer";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import Button from "./Button/Button.js";
import { ReactComponent as Cancel } from "../resources/images/Cancel.svg";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Snackbar from "./Snackbar.js";

const affiliationLevels = [
  {
    id: "1",
    name: "Level 1",
    value: "Level 1",
  },
  {
    id: "2",
    name: "Level 2",
    value: "Level 1",
  },
];

const permissions = [
  {
    id: "1",
    name: "Test 1",
    value: "Test 1",
  },
  {
    id: "2",
    name: "Test 2",
    value: "Test 2",
  },
];

export default function CreateNewRoleForm(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [roleData] = React.useState(location?.state?.data?.row);
  const formikRef = useRef();
  const [showAlert, setShowAlert] = React.useState(false);
  const validationSchema = Yup.object({
    roleName: Yup.string("").required("Role Name is required"),
    roleDescription: Yup.string("").required("Role Description is Required"),
    affiliationLevel: Yup.string("").required("Affiliation Level is Required"),
    permission: Yup.string("").required("Permission is Required"),
  });
  const handleSubmit = (values) => {
    setShowAlert(true);
    // navigate('/adminRoles')
  };
  return (
    <>
      <ContentContainer>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="cmp-form-title">Create New Role</div>
          <Cancel />
        </Box>
        <>
          <Divider
            sx={{
              marginTop: "22px",
            }}
          />
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "12px",
              lineHeight: "16px",
            }}
          >
            <span className="cmp-form-required-fields">*</span>Required Fields
          </Typography>
          <Box sx={{ paddingTop: "34px", paddingBottom: "32px" }}>
            <Formik
              validateOnMount={true}
              initialValues={{
                roleName: roleData?.roleName || "",
                roleDescription: roleData?.description || "",
                affiliationLevel: roleData?.affiliationLevel || "",
                permission: roleData?.permissions || "",
              }}
              validationSchema={validationSchema}
              validator={() => ({})}
              innerRef={formikRef}
              onSubmit={handleSubmit}
            >
              {({
                dirty,
                values,
                handleChange,
                setFieldValue,
                isSubmitting,
                handleSubmit,
                isValid,
              }) => {
                return (
                  <Form>
                    <Box sx={{ display: "flex" }}>
                      <div className="cmp-form-heading-number">1</div>
                      <Typography> Role Details</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <TextField
                        sx={{
                          marginRight: "66px",
                          marginTop: "32px",
                          width: "335px",
                        }}
                        id="roleName"
                        name="roleName"
                        label="* Role Name"
                        variant="outlined"
                        value={values.roleName}
                        onChange={handleChange}
                      />
                      <Box>
                        <TextField
                          id="roleDescription"
                          multiline
                          label="Description"
                          name="roleDescription"
                          variant="outlined"
                          maxRows={4}
                          value={values.roleDescription}
                          onChange={handleChange}
                          style={{ width: "335px", marginTop: "32px" }}
                          inputProps={{ maxLength: 500 }}
                        />
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            fontSize: "12px",
                          }}
                        >
                          {values.roleDescription.length}/500
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", marginTop: "32px" }}>
                      <div className="cmp-form-heading-number">2</div>
                      <Typography>Affiliation & Permissions</Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "32px" }}>
                      <FormControl>
                        <InputLabel
                        shrink={true}
                          id="demo-select-small"
                          sx={{
                            "& .MuiFormLabel-root-MuiInputLabel-root": {
                              top: "10px",
                            },
                          }}
                        >
                          Affiliation Level
                        </InputLabel>

                        <Select
                        defaultValue="Select"
                        displayEmpty
                        labelId="demo-select-small"
                        label="Affiliation Level"
                        notched={true}
                          sx={{ width: "325px", marginRight: "66px" }}
                          value={values.affiliationLevel}
                          onChange={(e, value) => {
                            setFieldValue("affiliationLevel", e.target.value);
                          }}
                          // input={<OutlinedInput />}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em>Select</em>;
                            }

                            return selected;
                          }}
                        >
                          {affiliationLevels.map((name) => (
                            <MenuItem key={name.id} value={name.name}>
                              {name.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl>
                        <InputLabel id="demo-select-small" shrink={true}>
                          Permissions
                        </InputLabel>

                        <Select
                        notched={true}
                        label= "Permissions"
                        labelId="demo-select-small"
                        defaultValue="Select"
                        displayEmpty
                          disabled={!values.affiliationLevel}
                         
                          sx={{ width: "325px", marginRight: "66px" }}
                          value={values.permission}
                          onChange={(e, value) => {
                            setFieldValue("permission", e.target.value);
                          }}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em>Select</em>;
                            }

                            return selected;
                          }}
                        >
                          {permissions.map((name) => (
                            <MenuItem key={name.id} value={name.name}>
                              {name.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    <Box className="cmp-form-footer">
                      <Button
                        label="Cancel"
                        variant="outlined"
                        color="black"
                        onClick={() => {
                          formikRef?.current?.resetForm();
                          navigate("/adminRoles");
                        }}
                      />
                      <Button
                        disabled={!isValid}
                        label="Save"
                        bgColor="#FFCD11"
                        variant="filled"
                        type="submit"
                      />
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
          {showAlert && (
            <Snackbar variant="success" message="Form Submitted Successfully" />
          )}
        </>
      </ContentContainer>
    </>
  );
}
