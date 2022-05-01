import { useState, useEffect } from 'react';
import './boardEdit.scss';
import {
  Button,
  TextField,
  Grid,
  Box,
  Paper,
} from '@mui/material';

import { useNavigate, useParams } from "react-router-dom";
import Container from './container';
import { useBoardState, useBoardDispatch, getBoard } from './../boardContext';

function BoardEdit() {
  let navigate = useNavigate();
  const state = useBoardState();
  const { data, loading, error } = state;
  const dispatch = useBoardDispatch();
  let { id } = useParams();

  useEffect(() => {
    getBoard(dispatch, id);
  }, []);

  const [title, setTitle] = useState(data.title);
  const [contents, setContents] = useState(data.contents);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    dispatch({
      type: "UPDATE",
      board: {
        ...data,
        title: formData.get('title'),
        contents: formData.get('contents')
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
          <div>게시글 수정</div>
          {/* TODO: validation 추가하기 */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 1 / 2, m: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="제목"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
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
                  value={contents}
                  onChange={e => setContents(e.target.value)}
                />
              </Grid>
            </Grid>
            <div className="btn-group">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                수정
                      </Button>
            </div>
          </Box>
        </Grid>
      </Paper>
    </Container>
  );
}

export default BoardEdit;