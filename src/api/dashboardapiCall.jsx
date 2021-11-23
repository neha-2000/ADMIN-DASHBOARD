import React ,{useState} from 'react'


import useAxios from 'axios-hooks'
const DashboardapiCall=()=> {
   
    
    const url='http://localhost:3000/student'
    const [{data,loading,error},refetch]=useAxios(url)
    if (loading) return <p>loading</p>
    if(error) return <p>Error</p>
    console.log(data)

    return {refetch,data};
    
}

export default DashboardapiCall
