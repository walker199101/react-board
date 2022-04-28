import './board.scss';
import Container from './container.jsx';
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@mui/material';

import { Link } from "react-router-dom";
import { useBoardState } from './../boardContext';

function Board() {
  const boardData = useBoardState();

  return (
      <Container >
        <div className="board">
            <div className="board-header">
                <span className="title">React Board</span>
                <Link to="/board/create" style={{ textDecoration: "none" }}>
                    <Button size="small" variant="contained">새 글 쓰기</Button>
                </Link>
            </div>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>날짜</TableCell>
                        <TableCell>추천</TableCell>
                        <TableCell>조회</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            boardData.map((board) => (
                                <TableRow key={board.id}>
                                    <TableCell>{board.id}</TableCell>
                                    <TableCell>
                                        <Link to={`/board/edit/${board.id}`}>
                                            {board.title}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{board.createdBy}</TableCell>
                                    <TableCell>{board.createdAt}</TableCell>
                                    <TableCell>{board.recommend}</TableCell>
                                    <TableCell>{board.view}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </Container>
  );
}

export default Board;
