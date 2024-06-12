import Grid from "@mui/material/Grid";
import {Button, FormControl, FormControlLabel, FormGroup, FormLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import {useFormik} from "formik";
import {loginTC} from "./auth-reducer";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {Navigate} from "react-router-dom";

type ErrorType = {
    email?: string
    password?: string
}

export type LoginType = {
    email: string
    password: string
    rememberMe?: boolean,
    captcha?: boolean
}

//

export const Login = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: ErrorType = {}
            const emailIsNotValid = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);
            const passwordIsNotValid = !/^(?=.*[A-Z]+)(?=.*[!@#$^&*()_\-=+]{2,})(?=.*[0-9]+)(?=.*[a-z]+).{8,}$/g.test(values.password);
            console.log(' passwordIsNotValid: ', passwordIsNotValid);
            console.log(' formik.values.password: ', values.password);

            if (!values.email.length) {
                errors.email = 'Required';
            } else if (emailIsNotValid) {
                errors.email = 'Invalid email address';
            }

            if (values.password.length < 4) {
                errors.password = 'Required min 4 characters long';
            }

            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    });

    console.log('login');

    if (isLoggedIn) {
        return <Navigate to="/todolists"/>
    }

    return (
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <FormControl>
                    <FormLabel>
                        <p>
                            To log in get registered
                            <a href={'https://social-network.samuraijs.com/'} target={'_blank'}>
                                here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                error={!!(formik.touched.email && formik.errors.email)}
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email && <div style={{color: 'crimson '}}
                                                                                 className="alert alert-danger">{formik.errors.email}</div>}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                error={!!(formik.touched.password && formik.errors.password)}
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password && <div style={{color: 'crimson '}}
                                                                                       className="alert alert-danger">{formik.errors.password}</div>}

                            <FormControlLabel label={'Remember me'} control={<Checkbox
                                checked={formik.values.rememberMe}
                                {...formik.getFieldProps('rememberMe')}
                            />}/>
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </form>
                </FormControl>
            </Grid>
        </Grid>
    )
}

 