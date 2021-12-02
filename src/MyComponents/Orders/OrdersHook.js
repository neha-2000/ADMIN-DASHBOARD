import React ,{useState} from 'react'
import axios from 'axios';
import { CsvBuilder } from 'filefy';


function OrdersHook() {
    const url = 'http://localhost:3000/orders';

    const [year, setYear] = useState('all');
    const [city, setCity] = useState('all');
    const [filter, setFilter] = useState(true);
    const [ordersList, setOdersList] = useState([])

    const [filteredData, setFilteredData] = useState(ordersList);
    const [selectedRows, setSelectedRows] = useState([]);
    
    const columns = ([
        { title: 'Id', field: 'id', validate: rowData => rowData.id === undefined || rowData.id === "" ? "Required" : true },
        { title: 'Order Status', field: 'orderStatus', validate: rowData => rowData.orderStatus === undefined || rowData.orderStatus === "" ? "Required" : true },
        { title: 'Payment Status', field: 'paymentStatus', validate: rowData => rowData.paymentStatus === undefined || rowData.paymentStatus === "" ? "Required" : true },
        { title: 'city', field: 'city', validate: rowData => rowData.city === undefined || rowData.city === "" ? "Required" : true },
        { title: 'Shipping Status', field: 'shippingStatus', validate: rowData => rowData.shippingStatus === undefined || rowData.shippingStatus === "" ? "Required" : true },
        { title: 'customer', field: 'customer', validate: rowData => rowData.customer === undefined || rowData.customer === "" ? "Required" : true }
    ])
    // console.log(filteredData)

    const handleChange = () => {
        setFilter(!filter)
    }

    const handleBulkdelete = () => {
        const updateData = ordersList.filter(row => !selectedRows.includes(row))
        setOdersList(updateData)

    }

    const exportAllSelectedRows = (e) => {
        e.preventDefault();
       
        var csvBuilder = new CsvBuilder("user_list.csv")
            .setColumns(columns.map((col) => (col.title)))
            .addRows([
                selectedRows.map(rowData => columns.map(col => rowData[col.field]))
            ])
            .exportFile();
    }

    const getData = () => {
        axios.get(url)
            .then(function (response) {
                // handle success
                setOdersList(response.data)
                // console.log("Filtered data" ,filteredData)
                //  console.log(response);
                
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


    return {url,columns,handleChange,getData,handleBulkdelete,exportAllSelectedRows,year,city,setCity,filter,setFilteredData, ordersList,filteredData,selectedRows,setSelectedRows}
}

export default OrdersHook
