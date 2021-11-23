import React ,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import DashboardapiCall from '../api/dashboardapiCall'

function Dashboard() {
    const {data,refetch} =DashboardapiCall()
    
  const columns=([
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Year', field: 'year'},
    {title: 'fee' , field: 'fee' }
   ])

   useEffect(() => {
      
   }, [refetch])
    return (
        <div>
            <MaterialTable
                title="Customer Roles"
                columns={columns}
                data={data}
            >
            </MaterialTable>           
        </div>
    )
}

export default Dashboard
