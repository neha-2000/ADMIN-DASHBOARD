import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { Checkbox, Select, MenuItem } from '@material-ui/core'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import {Typography } from '@material-ui/core';
import VendorsHook from './VendorsHook';


// const user=[
//     {name:"nehali",id:"1",age:"22"},
//     {name:"pallu",id:"2",age:"16"},
//     {name:"nehali",id:"3",age:"23"},
// ]

function getUniqueCitys(arr,comp){
    const unique=arr
    .map(e=>e[comp])
    .map((e,i,final)=>final.indexOf(e)===i && i)
    .filter(e=>arr[e])
    .map(e=>arr[e]);
    
    return unique;
}


function Vendor() {
    const{url,columns,handleChange,getData,handleBulkdelete,exportAllSelectedRows,year,city,filter,vendorList,filteredData,setCity,setFilteredData,selectedRows,setSelectedRows}=VendorsHook()
    const uniqueCity=getUniqueCitys(vendorList,"city")
    useEffect(() => {
        //  setFilteredData(year==='all'?empList:empList.filter(dt=>dt.year===year))
        getData()
        console.log("Unique",uniqueCity)
        setFilteredData(city === 'all' ? vendorList : vendorList.filter(dt => dt.city === city))
    }, [ city])

    const downloadExcel=()=>{

    }
    return (
        <div>
             <Typography variant="h4" color="primary" style={{ padding: "10px" }}>
             Vendors Data
          </Typography>
            <MaterialTable
                style={{marginTop: "10px" }}
               title="Check here"
                data={filteredData}
                columns={columns}
                onSelectionChange={(rows) => setSelectedRows(rows)}
                options={{
                    // filtering: filter,
                    actionsColumnIndex: -1,
                    addRowPosition: "first",
                    // selection: true
                    columnsButton:true

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
                        icon: ()=> <CloudDownloadIcon />,
                        tooltip: "Export to Excel",
                        onClick:()=>downloadExcel(),
                        isFreeAction: true
                    },

                    // {
                    //     icon: 'delete',
                    //     tooltip: "Delete all seleted Rows",
                    //     onclick: () => handleBulkdelete()
                    // }
                    // ,
                    // {
                        // icon: () => <CloudDownloadIcon />,
                        // tooltip: "Export all seleted data",
                        // onClick: () => exportAllSelectedRows()
                    // },
                    // {
                    //     icon: () => <Checkbox
                    //         checked={filter}
                    //         onChange={handleChange}
                    //         inputProps={{ 'aria-label': 'primary checkbox' }}
                      //  />,
                        // tooltip: "Hide/Show Filter option",
                        // isFreeAction: true
                    // },
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
                            {
                                uniqueCity.map(list => {
                                    return (
                                        <MenuItem key={list.id} value={list.city}><em>{list.city}</em></MenuItem>
                                    )
                                })
                            }

                             {/* <MenuItem value={'pune'}><em>pune</em></MenuItem>
                             <MenuItem value={'nagpur'}><em>nagpur</em></MenuItem> */}

                        </Select>,
                        tooltip: "Filter Year",
                        isFreeAction: true
                    }
                ]}
            />
            {/* <h1>{
            user.map((list) => (
            <div>{list.name}</div>
            ))
            } </h1>
           <h1>{
            vendorList.map((list) => (
            <div>{list.city}</div>
            ))
            } </h1>
             */}
              
           
        </div>
    )
}

export default Vendor
