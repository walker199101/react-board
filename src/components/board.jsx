import './board.scss';
import Container from './container.jsx';
import CSSModule from './CSSModule';
import {
    Button
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Link } from "react-router-dom";
import { useBoardState, useBoardDispatch, getBoardList } from './../boardContext';
import moment from 'moment';
import { useEffect } from 'react';

function DataTable() {
    const state = useBoardState();
    const { data, loading, error } = state;
    const dispatch = useBoardDispatch();
    useEffect(() => {
        getBoardList(dispatch);
    }, [dispatch]);

    const columns = [
        {
            field: "id",
            headerName: "번호",
            flex: 1
        },
        {
            field: "title",
            headerName: "제목",
            flex: 2,
            renderCell: (params) =>
                <Link to={`/board/${params.getValue(params.id, "id")}`}>
                    {params.getValue(params.id, "title")}
                </Link>
        },
        {
            field: "createdBy",
            headerName: "작성자",
            flex: 1
        },
        {
            field: "createdAt",
            headerName: "등록일",
            flex: 1,
            renderCell: (params) =>
                // 이유는 모르겠지만 moment를 valueGetter와 함께 사용할 경우 call stack exceed 오류가 남
                <span>{moment(params.getValue(params.id, "createdAt")).format("YYYY-MM-DD")}</span>
        },
        {
            field: "recommend",
            headerName: "추천수",
            flex: 0.5
        },
        {
            field: "view",
            headerName: "조회수",
            flex: 0.5
        }
    ];
    return (
        <div style={{ height: 400, width: '100%', background: 'white', borderRadius: '5px' }}>
            <DataGrid
                rows={data}
                columns={columns}
                // TODO: 리스트 값 다시 리로드할 때 로딩 표시가 안 보임  
                loading={loading}
                error={error}
                // TODO: pageSize 변경이 안 되는 버그
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
                <CSSModule />
                <div className="board-header">
                    <span className="title"></span>
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
