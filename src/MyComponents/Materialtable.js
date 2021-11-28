import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { Checkbox, Select, MenuItem } from '@material-ui/core'
import axios from 'axios';

const url = 'http://localhost:3000/student';

// const empList = [
//     { "id": 3,
//       "name": "Riya",
//       "email": "raj@gmail.com",
//       "year": 2019,
//       "fee": 12000,
//       "city": "pune",
//       "VendorName": "rohit",
//       "payment": "5000"
//     },
//     {
//       "id": 4,
//       "name": "Avi",
//       "email": "raj@gmail.com",
//       "city": "pune",
//       "VendorName": "raju",
//       "year": 2019,
//       "fee": 12000
//     },
//     {
//       "name": "pallavi",
//       "email": "pallu@gmail.com",
//       "city": "nagpur",
//       "VendorName": "rajya",
//       "year": "1999",
//       "fee": "455667",
//       "id": 6
//     },      
//   ]
function Materialtable() {
  const [year, setYear] = useState('all');
  const [city, setCity] = useState('all');
  const [filter, setFilter] = useState(true);
  const [empList, setEmpList] = useState([])
  
  const [filteredData, setFilteredData] = useState(empList);
  const columns = ([
    { title: 'VendorName', field: 'VendorName', validate: rowData => rowData.VendorName === undefined || rowData.VendorName === "" ? "Required" : true },
    { title: 'Email', field: 'email', validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true },
    { title: 'city', field: 'city', validate: rowData => rowData.city === undefined || rowData.city === "" ? "Required" : true },
    { title: 'payment', field: 'payment', validate: rowData => rowData.payment === undefined || rowData.payment === "" ? "Required" : true },
    { title: 'year', field: 'year', validate: rowData => rowData.year === undefined || rowData.year === "" ? "Required" : true },

  ])
  // console.log(filteredData)

  const handleChange = () => {
    setFilter(!filter)
  }

  const getData = () => {
    axios.get(url)
      .then(function (response) {
        // handle success
        setEmpList(response.data)
      // console.log("Filtered data" ,filteredData)
      //  console.log(response);
        console.log("Response:",response?.data?.data?.name)
        //setFilteredData(data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    //  setFilteredData(year==='all'?empList:empList.filter(dt=>dt.year===year))
    getData()
    setFilteredData(city === 'all' ? empList : empList.filter(dt => dt.city === city))

  }, [year, city])
  return (
    <div>

      <MaterialTable
        title="Employee Data"
        data={filteredData}
        columns={columns}
        options={{
          filtering: filter,
          actionsColumnIndex: -1,
          addRowPosition: "first"

        }}
        editable={{
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            console.log(newData);
            axios.post(url,
              newData
            )
              .then(resp => {
                getData()
                resolve()
              })
              .catch(function (error) {
                console.log(error);
              });
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            console.log(newData);
            axios.put(url + "/" + oldData.id,
              newData
            )
              .then(resp => {
                getData()
                resolve()
              })
              .catch(function (error) {
                console.log(error);
              });
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {

            axios.delete(url + "/" + oldData.id,

            )
              .then(resp => {
                getData()
                resolve()
              })
              .catch(function (error) {
                console.log(error);
              });
          })
        }}
        actions={[
          {
            icon: () => <Checkbox
              checked={filter}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />,
            tooltip: "Hide/Show Filter option",
            isFreeAction: true
          },
          {
            icon: () => <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{ width: 100 }}
              value={city}
              // onChange={(e)=>setYear(e.target.value)}
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value={"all"}><em>All</em></MenuItem>
              <MenuItem value={'pune'}><em>pune</em></MenuItem>
              <MenuItem value={'nagpur'}><em>nagpur</em></MenuItem>
              
            </Select>,
            tooltip: "Filter Year",
            isFreeAction: true
          }
        ]}
      />
    </div>
  )
}

export default Materialtable
