import React ,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import DashboardapiCall from '../api/dashboardapiCall'
import axios from 'axios'
import {Line} from 'chart.js'

function Dashboard() {
    //const {data,refetch,postdata} =DashboardapiCall()
    const [data,setData]=useState([])
    const[chartdata,setChartData]=useState([])
    const getData=()=>{
        axios.get(url)
        .then(function (response) {
            // handle success
            setData(response.data)
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
    const url='http://localhost:3000/student';
  const columns=([
    { title: 'VendorName', field: 'VendorName' , validate :rowData => rowData.VendorName===undefined || rowData.VendorName==="" ? "Required":true},
    { title: 'Email', field: 'email' ,validate :rowData => rowData.email===undefined || rowData.email==="" ? "Required":true},
    { title: 'phone', field: 'phone',validate :rowData => rowData.phone===undefined || rowData.phone==="" ? "Required":true},
    {title: 'payment' , field: 'payment' ,validate :rowData => rowData.payment===undefined || rowData.payment==="" ? "Required":true}
   ])

   useEffect(() => {
    getData()
   }, [])


   const chart=()=>{
       setChartData({
           lables: ['monday' ,'tuesday','wed','thursday','friday'],
           datasets:[
               {
               label : 'Order Status',
               data:[32,45,12,76,69],
               backgroundColor :[
                   'blue'
               ]
               }
           ]
       })
   }

    return (
        <div>
            <MaterialTable
                title="Customer Roles"
                columns={columns}
                data={data}
                options={{actionsColumnIndex:-1 , addRowPosition :"first"}}
                editable={{
                    onRowAdd: (newData)=>new Promise((resolve,reject)=>{
                        console.log(newData);
                        axios.post(url, 
                            newData
                          )
                          .then(resp=>{getData()                           
                          resolve()
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                    }),
                    onRowUpdate:(newData,oldData)=>new Promise((resolve,reject)=>{
                        console.log(newData);
                        axios.put(url+"/"+oldData.id, 
                            newData
                          )
                          .then(resp=>{getData()                           
                          resolve()
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                    }),
                    onRowDelete:(oldData)=>new Promise((resolve,reject)=>{
                      
                        axios.delete(url+"/"+oldData.id, 
                            
                          )
                          .then(resp=>{getData()                           
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
