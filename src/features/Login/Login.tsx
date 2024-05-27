import Grid from "@mui/material/Grid";
import {Button, FormControl, FormControlLabel, FormGroup, FormLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import {useFormik} from "formik";

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(' formik: ', formik);
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
                                onChange={formik.handleChange}
                            />
                            <TextField type="password" label="Password" margin="normal"/>
                            <FormControlLabel label={'Remember me'} control={<Checkbox/>}/>
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