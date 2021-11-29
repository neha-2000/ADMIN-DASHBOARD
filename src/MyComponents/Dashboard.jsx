import React, { useState, useEffect } from 'react'
import MaterialTable  from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
import DashboardapiCall from '../api/dashboardapiCall'
import axios from 'axios'
import { Line } from 'chart.js'
import Materialtable from './Materialtable'
import Vendor from './Vendors/Vendor'
import Topbar from './Topbar'

const empList = [
  {
    "id": 3,
    "name": "Riya",
    "email": "raj@gmail.com",
    "year": 1999,
    "fee": 12000,
    "phone": "12345",
    "VendorName": "rohit",
    "payment": "5000"
  },
  {
    "id": 4,
    "name": "Avi",
    "email": "raj@gmail.com",
    "phone": "12345",
    "VendorName": "raju",
    "year": 2000,
    "fee": 12000
  },
  {
    "name": "pallavi",
    "email": "pallu@gmail.com",
    "phone": "12345",
    "VendorName": "rajya",
    "year": "1999",
    "fee": "455667",
    "id": 6
  },
  
  


]

function Dashboard() {
  //const {data,refetch,postdata} =DashboardapiCall()
  
  const [data, setData] = useState([])
  
 

  const getData = () => {
    axios.get(url)
      .then(function (response) {
        // handle success
        setData(response.data)
         console.log(response);
        
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
  const url = 'http://localhost:3000/student';
  const columns = ([
    { title: 'VendorName', field: 'VendorName', validate: rowData => rowData.VendorName === undefined || rowData.VendorName === "" ? "Required" : true },
    { title: 'Email', field: 'email', validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true },
    { title: 'phone', field: 'phone', validate: rowData => rowData.phone === undefined || rowData.phone === "" ? "Required" : true },
    { title: 'payment', field: 'payment', validate: rowData => rowData.payment === undefined || rowData.payment === "" ? "Required" : true },
    { title: 'year', field: 'year', validate: rowData => rowData.year === undefined || rowData.year === "" ? "Required" : true },
   
  ])

  useEffect(() => {
     getData()
    
   
 
    // console.log("data2",data2)
  }, [])


  

  return (
    <div>
      <Topbar/>
      <Vendor/>
      {/* <Materialtable/>
       */}
      
       
      <MaterialTable
        title="Customer Roles"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
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
      >
      </MaterialTable>
    </div>
  )
}

export default Dashboard
