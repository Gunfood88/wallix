import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Users = (props: any) => {
  const classes = useStyles();

  const users = [{ name: 'aymen', job: 'test' }]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user: any) => (
            <TableRow key={user.name}>
              <TableCell component="th" scope="user">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}
export default Users









