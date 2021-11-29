import React ,{ useState} from 'react'
import axios from 'axios';
import { CsvBuilder } from 'filefy';

function VendorsHook() {
    const url = 'http://localhost:3000/student';

    const [year, setYear] = useState('all');
    const [city, setCity] = useState('all');
    const [filter, setFilter] = useState(true);
    const [vendorList, setvendorList] = useState([])

    const [filteredData, setFilteredData] = useState(vendorList);
    const [selectedRows, setSelectedRows] = useState([]);
    
    const columns = ([
        { title: 'Id', field: 'id', validate: rowData => rowData.id === undefined || rowData.id === "" ? "Required" : true },
        { title: 'VendorName', field: 'VendorName', validate: rowData => rowData.VendorName === undefined || rowData.VendorName === "" ? "Required" : true },
        { title: 'Email', field: 'email', validate: rowData => rowData.email === undefined || rowData.email === "" ? "Required" : true },
        { title: 'city', field: 'city', validate: rowData => rowData.city === undefined || rowData.city === "" ? "Required" : true },
        { title: 'payment', field: 'payment', validate: rowData => rowData.payment === undefined || rowData.payment === "" ? "Required" : true },
        { title: 'year', field: 'year', validate: rowData => rowData.year === undefined || rowData.year === "" ? "Required" : true }
    ])
    // console.log(filteredData)

    const handleChange = () => {
        setFilter(!filter)
    }

    const handleBulkdelete = () => {
        const updateData = vendorList.filter(row => !selectedRows.includes(row))
        setvendorList(updateData)

    }

    const exportAllSelectedRows = () => {
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
                setvendorList(response.data)
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

    

    return {url,columns,handleChange,getData,handleBulkdelete,exportAllSelectedRows,year,city,setCity,filter,setFilteredData, vendorList,filteredData,selectedRows,setSelectedRows}
}

export default VendorsHook
