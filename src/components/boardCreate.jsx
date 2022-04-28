import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import Container from './container';

function BoardCreate() {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      title: data.get('title'),
      contents: data.get('contents'),
    });
    navigate("/board");
  }
  return (
    <Container >
        <Paper variant="outlined" sx={{ my: { xs: 4, md: 6 }, p: { xs: 4, md: 6 } }}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <div>새로 글쓰기</div>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 1/2, m: 3  }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="title"
                        label="제목"
                        name="title"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        multiline
                        minRows={8}
                        id="contents"
                        name="contents"
                        label="내용"
                        />
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    글쓰기
                    </Button>
                </Box>
            </Grid>
        </Paper>
      </Container>
  );
}

export default BoardCreate;