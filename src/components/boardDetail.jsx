import { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  Box,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { useNavigate, useParams } from "react-router-dom";
import Container from './container';
import { useBoardState, useBoardDispatch, getBoard } from './../boardContext';
import './boardDetail.scss';

const DeleteButton = styled(Button)(({ theme }) => ({
  backgroundColor: "red",
  '&:hover': {
    backgroundColor: "red",
  },
}));

function BoardDetail() {
  let navigate = useNavigate();
  const state = useBoardState();
  const { data, loading, error } = state;
  const dispatch = useBoardDispatch();
  let { id } = useParams();
  useEffect(() => {
    getBoard(dispatch, id);
  }, []);

  const handleClickDeleteBtn = () => {
    dispatch({
      type: "DELETE",
      id: data.id
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
          <div>게시글 확인</div>
          <Box component="form" noValidate sx={{ width: 1 / 2, m: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="제목"
                  name="title"
                  value={data.title}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  minRows={8}
                  id="contents"
                  label="내용"
                  name="contents"
                  value={data.contents}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
            <div className="detail-button-group">
              <DeleteButton
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "red" }}
                onClick={handleClickDeleteBtn}
              >
                삭제
                      </DeleteButton>
              <Button
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate(`/board/edit/${id}`)}
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

export default BoardDetail;