import { useState } from 'react';
import './boardEdit.scss';
import {
  Button,
  TextField,
  Grid,
  Box,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { useNavigate, useParams } from "react-router-dom";
import Container from './container';
import { useBoardState, useBoardDispatch } from './../boardContext';

const DeleteButton = styled(Button)( ({ theme }) => ({
  backgroundColor: "red",
  '&:hover': {
    backgroundColor: "red",
  },
}));

function BoardEdit() {
  let navigate = useNavigate();
  const board = useBoardState();
  const dispatch = useBoardDispatch();
  let { id } = useParams();
  let currentBoard;
  board.forEach((el) => {
    if (el.id === Number(id)) {
      currentBoard = el;
      return;
    }
  });
  const [title, setTitle] = useState(currentBoard.title);
  const [contents, setContents] = useState(currentBoard.contents);

  const handleClickDeleteBtn = () => {
    dispatch({
      type: "DELETE",
      id: currentBoard.id
    });
    navigate("/board");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    dispatch({
      type: "UPDATE",
      board: {
        ...currentBoard,
        title: data.get('title'),
        contents: data.get('contents')
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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: 1/2, m: 3  }}>
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
                      <DeleteButton
                      variant="contained"
                      sx={{ mt: 3, mb: 2, bgcolor: "red" }}
                      onClick={handleClickDeleteBtn}
                      >
                      삭제
                      </DeleteButton>
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