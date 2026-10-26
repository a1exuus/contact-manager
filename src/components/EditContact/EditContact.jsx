import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

function EditContact() {
    return (
        <Card style={{margin: 'auto', width: 500, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    EDIT CONTACT
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
                    <Button style={{margin: 'auto', marginTop: 20}} size='medium' variant='contained' color='primary'>
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default EditContact