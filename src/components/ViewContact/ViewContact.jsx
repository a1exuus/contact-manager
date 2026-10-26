import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ViewContact() {
    return (
        <Card style={{margin: 'auto', width: 500, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    CONTACT INFO
                </Typography>
                <form>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="name" label='Name' />
                    </div>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="email" label='Email' />
                    </div>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="dateCreated" label='DateCreated' />
                    </div>
                    <div>
                        <TextField style={{width: 400, marginTop: 10}} id="dateModified" label='DateModified' />
                    </div>
                </form>
                <Link to='/'>
                    <ArrowBackIcon style={{marginTop: 20}} size='large' />
                </Link>
            </CardContent>
        </Card>
    )
}

export default ViewContact