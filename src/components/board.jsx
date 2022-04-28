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

import { useState } from "react";
import { Link } from "react-router-dom";

function Board() {
    const rowData = [
        {
            id: 1,
            title: "test-title1",
            contents: "내용1",
            createdBy: "user1",
            createdAt: "2022-04-23 13:34:24",
            recommend: "0",
            view: "15"
        },
        {
            id: 2,
            title: "test-title2",
            contents: "내용2",
            createdBy: "user1",
            createdAt: "2022-04-26 13:34:24",
            recommend: "3",
            view: "12"
        },
        {
            id: 3,
            title: "test-title3",
            contents: "내용3",
            createdBy: "user2",
            createdAt: "2022-04-24 13:34:24",
            recommend: "0",
            view: "25"
        }
    ]
    const [rows, setRows] = useState(rowData);

  return (
      <Container >
        <div className="board">
            <div className="board-header">
                <span className="title">React Board</span>
                <Link to="/board/create">
                    <Button size="small" variant="contained">Create</Button>
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
                            rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.createdBy}</TableCell>
                                    <TableCell>{row.createdAt}</TableCell>
                                    <TableCell>{row.recommend}</TableCell>
                                    <TableCell>{row.view}</TableCell>
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
