import Table from 'react-bootstrap/Table';

function TableBody() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tamil</td>
          <td>Arasan</td>
          <td>@tamil</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Harsha</td>
          <td>Nickl</td>
          <td>@harsha</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Naren</td>
          <td>ROy</td>
          <td>@naren</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableBody;   