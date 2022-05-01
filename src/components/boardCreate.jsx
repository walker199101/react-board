import * as React from 'react';
import {
  Button,
  TextField,
  Grid,
  Box,
  Paper
} from '@mui/material';

import { useNavigate } from "react-router-dom";
import Container from './container';
import { useBoardState, useBoardDispatch } from './../boardContext';
import moment from 'moment';

function BoardCreate() {
  let navigate = useNavigate();
  const state = useBoardState();
  const dispatch = useBoardDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nowTime = moment().format('YYYY-MM-DD hh:mm:ss');
    
    dispatch({
      type: "CREATE",
      board: {
        id: state.data.length + 1,
        title: formData.get('title'),
        contents: formData.get('contents'),
        createdBy: "user1",
        createdAt: nowTime,
        recommend: 0,
        view: 0
      }
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
                {/* TODO: validation 추가하기 */}
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