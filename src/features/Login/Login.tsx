import Grid from "@mui/material/Grid";
import {Button, FormControl, FormControlLabel, FormGroup, FormLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

export const Login = () => {
    return(
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
                    <FormGroup>
                        <TextField label="Email" margin="normal" />
                        <TextField type="password" label="Password" margin="normal" />
                        <FormControlLabel label={'Remember me'} control={<Checkbox />} />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}