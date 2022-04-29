import './board.scss';
import Container from './container.jsx';
import {
    Button
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Link } from "react-router-dom";
import { useBoardState } from './../boardContext';
import moment from 'moment';

function DataTable() {
  const boardData = useBoardState();
  const columns = [
    {
        field: "id",
        headerName: "번호",
        width: 150,
        renderCell: (params) => 
        <Link to={`/board/${params.getValue(params.id, "id")}`}>
            {params.getValue(params.id, "title")}
        </Link>
    },
    {
        field: "title",
        headerName: "제목",
        width: 150
    },
    {
        field: "createdBy",
        headerName: "작성자",
        width: 150
    },
    {
        field: "createdAt",
        headerName: "날짜",
        width: 150,
        valueGetter: (params) => 
            // 이유는 모르겠지만 키 이름이 createdAt의 경우는 called stack exceed 오류가 남
            moment(params.getValue(params.id, "createdTime")).format("YYYY-MM-DD")
    },
    {
        field: "recommend",
        headerName: "추천수",
        width: 150
    },
    {
        field: "view",
        headerName: "조회수",
        width: 150
    }
  ];
  console.log(boardData);
    return (
        <div style={{ height: 400, width: '100%', background: 'white', borderRadius: '5px' }}>
            <DataGrid
                rows={boardData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
            />
        </div>
    );
}

function Board() {
  return (
      <Container >
        <div className="board">
            <div className="board-header">
                <span className="title">React Board</span>
                <Link to="/board/create" style={{ textDecoration: "none" }}>
                    <Button size="small" variant="contained">새 글 쓰기</Button>
                </Link>
            </div>
            <DataTable />
        </div>
    </Container>
  );
}

export default Board;
