import './board.scss';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Board() {
    const rows = [
        {
            id: 1,
            title: "test-title1",
            contents: "내용1",
            createdBy: "user1",
            createdAt: "2022-04-23 13:34:24",
            updatedAt: "2022-04-26 15:14:14"
        },
        {
            id: 2,
            title: "test-title2",
            contents: "내용2",
            createdBy: "user1",
            createdAt: "2022-04-26 13:34:24",
            updatedAt: "2022-04-28 15:14:14"
        },
        {
            id: 3,
            title: "test-title3",
            contents: "내용3",
            createdBy: "user2",
            createdAt: "2022-04-24 13:34:24",
            updatedAt: "2022-04-27 15:14:14"
        }
    ]
  return (
    <div className="board">
        <h2 className="title">React Board</h2>
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>title</TableCell>
                    <TableCell>createdBy</TableCell>
                    <TableCell>createdAt</TableCell>
                    <TableCell>updatedAt</TableCell>
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
                                <TableCell>{row.updatedAt}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default Board;
