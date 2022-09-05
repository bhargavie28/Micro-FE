import React, { useRef, useState } from "react";
import FormContainer from "./Form/FormContainer";
import {Box, Button, Divider} from "@mui/material"
import Email from '@mui/icons-material/Email';
import Password from '@mui/icons-material/RemoveRedEye';import * as Yup from "yup";
import { Formik } from "formik";
import ContentContainer from "../context/ContentContainer";
import {useNavigate} from "react-router-dom";


const validationSchema = Yup.object({
    username: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .max(320)
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
});
function LoginForm(){
   const navigate = useNavigate();
    const formikRef = useRef();
    return(
        <>
        <Divider />
        <Box sx={{
            width: {
                xs: 140,
                lg: 500
            },
            justifyContent: "center",
            display: "flex",
            //  maxWidth: "600px",
            margin: "24px auto 0"
        }}>
        
            <ContentContainer>
            <Formik
                    initialValues={{
                        id: 'login',
                        username: '',
                        password: '',
                        domain: ''
                    }}
                    validationSchema={validationSchema}
                    innerRef={formikRef}
                    // onSubmit={handleSubmit}
                >
                    <FormContainer
                        formFields={[
                            {
                                type: "text",
                                name: "username",
                                label: "Email",
                                required: false,
                                icon: <Email />,
                            },
                            {
                                type: "password",
                                name: "password",
                                label: "Password",
                                required: false,
                                icon: <Password />,
                            }
                        ]}
                        formId = "login-form"
                        showSubmit={false}
                    />
                </Formik>
                <Button variant="outlined" onClick={()=> {navigate("/adminRoles")}}>Submit</Button>
            </ContentContainer>
        </Box>
</>
    )
}

export default LoginForm;