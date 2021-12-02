import React, { useState ,useEffect} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MaterialTable from 'material-table'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import OrdersHook from './OrdersHook';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { Checkbox, Select, MenuItem } from '@material-ui/core'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SearchIcon from '@mui/icons-material/Search';

function getUniqueCitys(arr,comp){
    const unique=arr
    .map(e=>e[comp])
    .map((e,i,final)=>final.indexOf(e)===i && i)
    .filter(e=>arr[e])
    .map(e=>arr[e]);
    
    return unique;
}

function Orders() {
    
    const [data,setgetData]=useState();
   const [orderStatus, SetorderStatus] = useState();
   const [paymentStatus, SetpaymentStatus] = useState();
  
   const [shippingStatus, SethippingStatus] = useState();
   const [customer, Setcustomer] = useState();


    const{url,columns,handleChange,getData,handleBulkdelete,exportAllSelectedRows,year,city,setCity,filter,ordersList,filteredData,setFilteredData,selectedRows,setSelectedRows}=OrdersHook()
    const uniqueCity=getUniqueCitys(ordersList,"city")

    const sendData = (e) => {
        e.preventDefault();
       
        let data1 = {orderStatus, paymentStatus,city ,shippingStatus,customer}
        fetch("http://localhost:3000/orders",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data1)
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                })
            })
            getData()
            SetorderStatus("")
            SetpaymentStatus("")
            SethippingStatus("")
            Setcustomer("")
            setCity("")

    }

    // const getList = () => {
    //     const current=new Date().toLocaleTimeString ()
    //     console.log(current)
    //     fetch("http://localhost:3000/orders").then((result) => {
    //         result.json().then((resp) => {
    //             setgetData(resp)

    //         })
    //     })

    // }

        useEffect((e) => {
            getData()
           
            console.log("Unique",uniqueCity)
            setFilteredData(city === 'all' ? ordersList : ordersList.filter(dt => dt.city === city))
            
        }, [city])

    return (
        <div>
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" color="primary" style={{ padding: "10px" }}>
             Search
          </Typography>
        </AccordionSummary>
                <AccordionDetails>
                    <Grid>
                        <Card style={{ maxWidth: 700, margin: "0 auto" }}>
                            <CardContent>
                                                               
                                <form>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} sm={6} item>
                                            <TextField placeholder="Select Order Status" label="Select Order Status" value={orderStatus} onChange={(e) => { SetorderStatus(e.target.value) }} variant="outlined" fullWidth required 
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField placeholder="Select Payment Status" label="Select Payment Status" value={paymentStatus} onChange={(e) => { SetpaymentStatus(e.target.value) }} variant="outlined" fullWidth required />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField placeholder="Enter City" label="Enter City" value={city} onChange={(e) => { setCity(e.target.value) }} variant="outlined" fullWidth required />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField placeholder="Select Shipping status" label="Shipping status" value={shippingStatus} onChange={(e) => { SethippingStatus(e.target.value) }} variant="outlined" fullWidth required />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField placeholder="Enter Email" label="Enter Email" value={customer} onChange={(e) => { Setcustomer(e.target.value) }} variant="outlined" fullWidth required />
                                        </Grid>                                                                              
                                        <Grid item xs={12}>
                                            <Button type="submit" onClick={sendData} variant="contained" color="primary" fullWidth>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <MaterialTable
                title="Check more about orders"
                data={filteredData}
                columns={columns}
                onSelectionChange={(rows) => setSelectedRows(rows)}
                options={{                    
                    actionsColumnIndex: -1,
                    addRowPosition: "first",
                    selection: true

                }}
                
                actions={[

                    {
                        icon: 'delete',
                        tooltip: "Delete all seleted Rows",
                        onclick: () => handleBulkdelete()
                    }
                    ,
                    {
                        icon: () => <CloudDownloadIcon />,
                        tooltip: "Export all seleted data",
                        onClick: () => exportAllSelectedRows()
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
            
        </div>
    )
}

export default Orders
