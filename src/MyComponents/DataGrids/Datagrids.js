import React, { useState, useEffect } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import axios from 'axios';


const url = 'http://localhost:3000/student';

function Datagrids() {

  const [empList, setEmpList] = useState([])

  const columns = ([
    { title: 'Id', field: 'id', validate: rowData => rowData.id === undefined || rowData.id === "" ? "Required" : true },
    { title: 'VendorName', field: 'VendorName', validate: rowData => rowData.VendorName === undefined || rowData.VendorName === "" ? "Required" : true },
    { title: 'Email', field: 'email', validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true },
    { title: 'city', field: 'city', validate: rowData => rowData.city === undefined || rowData.city === "" ? "Required" : true },
    { title: 'payment', field: 'payment', validate: rowData => rowData.payment === undefined || rowData.payment === "" ? "Required" : true },
    { title: 'year', field: 'year', validate: rowData => rowData.year === undefined || rowData.year === "" ? "Required" : true }
  ])

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 10,
  });

  const getData = () => {
    axios.get(url)
      .then(function (response) {
        setEmpList(response.data)
        console.log("Response:", response?.data?.data?.name)

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {

      });
  }

  useEffect(() => {
    //  setFilteredData(year==='all'?empList:empList.filter(dt=>dt.year===year))
    getData()


  }, [])

  //   <DataGridPro
  //   columns={[
  //     { field: 'id' },
  //     { field: 'username' },
  //     { field: 'age', disableReorder: true },
  //   ]}
  //   rows={rows}
  // />
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={empList}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  )
}

export default Datagrids
