import React from 'react'
import { Table } from 'reactstrap'

function EsternTable() {
  return (
    <Table striped bordered hover responsive className="container  ">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Region</th>
            <th>District</th>
            <th>Name of Your School</th>
            <th>Treining Venue</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>India </td>
            <td>Bhavnagar</td>
            <td>Abc School</td>
            <td>Abc Ground</td>
            <td>10-05-2021</td>
            <td>07.30 AM</td>
            <td>15-07-2021</td>
          </tr>

          <tr>
            <td>2</td>
            <td>India </td>
            <td>Surat</td>
            <td>Gajera School</td>
            <td>Gajera Ground</td>
            <td>01-05-2021</td>
            <td>07.00 AM</td>
            <td>15-07-2021</td>
          </tr>
          <tr>
            <td>3</td>
            <td>India </td>
            <td>Bhavnagar</td>
            <td>Abc School</td>
            <td>Abc Ground</td>
            <td>10-05-2021</td>
            <td>07.30 AM</td>
            <td>15-07-2021</td>
          </tr>
          <tr>
            <td>4</td>
            <td>India </td>
            <td>Anad</td>
            <td>Anad High School</td>
            <td>Anad Ground</td>
            <td>01-05-2021</td>
            <td>07.00 AM</td>
            <td>15-07-2021</td>
          </tr>
          <tr>
            <td>5</td>
            <td>India </td>
            <td>Bhavnagar</td>
            <td>Abc School</td>
            <td>Abc Ground</td>
            <td>10-05-2021</td>
            <td>07.30 AM</td>
            <td>15-07-2021</td>
          </tr>
        </tbody>
      </Table>
  )
}

export default EsternTable