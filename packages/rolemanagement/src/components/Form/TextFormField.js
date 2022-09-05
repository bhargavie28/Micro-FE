import React from "react";
import {FilledInput, FormControl, FormLabel, Typography,} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {getIn} from "formik";

const TextFormField = ({field, formik}) => {
    const {
        fieldType = "text",
        name,
        label,
        helperText,
        icon,
        required,
        labelOutside,
        placeholder,
        replaceRegex,
        disabled,
    } = field;
    const {values, touched, errors, handleChange, handleBlur} = formik;

    return (
        <FormControl
            fullWidth
            sx={{
                marginBottom: "24px",
            }}
        >
            {labelOutside ? (
                <>
                    <FormLabel
                        // htmlFor={name}
                        // sx={{
                        //     marginBottom: "24px",
                        // }}
                    >
                        <Typography>{label}</Typography>
                    </FormLabel>
                    <FilledInput
                        placeholder={placeholder}
                        id={name}
                        name={name}
                        type={fieldType}
                        value={getIn(formik.values, name)}
                        onChange={(e) => {
                          if (!replaceRegex) {
                            handleChange(e);
                          } else {
                            const value = e.target.value;
                            formik.setFieldValue(name, value?.replace(replaceRegex, ''), true);
                            formik.setTouched({
                              ...formik.touched,
                              [name]: true
                            }, false);
                          }
                        }}
                        onBlur={handleBlur}
                        required={required}
                        error={
                            getIn(formik.touched, name) && Boolean(getIn(formik.errors, name))
                        }
                        helperText={helperText}
                        // color="black"
                        fullWidth
                        inputProps={{
                            style: {
                                padding: "16.5px 14px",
                            },
                        }}
                        endAdornment={
                            <InputAdornment position="end">{icon}</InputAdornment>
                        }
                    />
                </>
            ) : (
                <TextField
                    disabled={disabled}
                    id={name}
                    name={name}
                    type={fieldType}
                    helperText={helperText}
                    label={label}
                    required={required}
                    value={getIn(formik.values, name)}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      if (!replaceRegex) {
                        handleChange(e);
                      } else {
                        const value = e.target.value;
                        formik.setFieldValue(name, value?.replace(replaceRegex, ''), true);
                        formik.setTouched({
                          ...formik.touched,
                          [name]: true
                        }, false);
                      }
                    }}
                    error={
                        getIn(formik.touched, name) && Boolean(getIn(formik.errors, name))
                    }
                    variant="filled"
                    // color="black"
                    fullWidth
                    sx={{
                        "& .MuiFilledInput-root": {
                            backgroundColor: "#e5ebf0 !important",
                        },
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgba(38, 52, 139, 0.4)",
                        },
                        "& .MuiFormLabel-root.Mui-disabled": {
                            color: "rgba(38, 52, 139, 0.4)"
                        },
                        '& input[type=number]': {
                            '-moz-appearance': 'textfield'
                        },
                        '& input[type=number]::-webkit-outer-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0
                        },
                        '& input[type=number]::-webkit-inner-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">{icon}</InputAdornment>
                        ),
                    }}
                />
            )}
        </FormControl>
    );
};

export default TextFormField;