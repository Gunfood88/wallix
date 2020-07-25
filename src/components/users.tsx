import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IUsers, IUser } from '../intefaces/user.interace';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Users = (props: any) => {
  const classes = useStyles();

  const users: IUser[] = [{ name: 'aymen', email: 'aymen@gmail.com', profile: 'test' }]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user: IUser) => (
            <TableRow key={user.name}>
              <TableCell align="center" component="th" scope="user">{user.name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.profile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}
export default Users









