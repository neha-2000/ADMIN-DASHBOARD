import React from 'react'
import './statistic.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import MediaQuery from 'react-responsive'
import MediaQ from '../MediaQ'

import { CardActionArea, Paper, CardActions, Button } from '@mui/material';
import Cards from '../HomePage/Cards'




function Home() {
    return (
        <div >

            <MediaQuery minWidth={906}>
                <Box sx={{
                    flexGrow: 1
                }} >
                    <Grid container spacing={2}>
                        <Grid item xs={3}   >
                            <Cards title={'Top Orders'}   />
                        </Grid>
                        <Grid item xs={3}  >
                            <Cards title={'Pending Return '} />
                        </Grid>
                         <Grid item xs={3}  >
                            <Cards title={'Register Customer'} />
                        </Grid>
                        <Grid item xs={3}  >
                            <Cards title={'Low Stock'} />
                        </Grid>
                       
                    </Grid>
                </Box>
            </MediaQuery>
            <MediaQuery maxWidth={906}>
                <Grid container spacing={1}>
                    <Grid item sm={6}   >

                    <Cards title={'Top Orders'}    />
                    </Grid>
                    <Grid item sm={6}   >

                    <Cards title={'Pending Return '} />
                    </Grid>
                    <Grid item sm={6} >

                    <Cards title={'Register Customer'}/>
                    </Grid>
                    <Grid item sm={6}  >
                    <Cards title={'Low Stock'} />
                    </Grid>
                </Grid>
            </MediaQuery>
            {/* <div className className="static1">
                <div className="topnewsheadling">
                    <span className="mainheadling">
                        <DocumentScannerIcon />Common statistics
                    </span>
                    <br></br>
                    <hr />
                    <div className="seconddiv">

                        <div className="conntain1">

                            <pre> Order</pre>
                            <br></br><br></br><br></br><br></br><br></br>
                            <hr />
                            <span className="massage"> More Info <KeyboardArrowRightIcon /> </span>
                        </div>

                        <div className="conntain2">
                            <pre> Pending Return Requeste</pre>
                            <br></br><br></br><br></br><br></br><br></br>
                            <hr />
                            <span className="massage"> More Info <KeyboardArrowRightIcon /> </span>

                        </div>

                        <div className="conntain3">
                            <pre> Register Customer</pre>
                            <br></br><br></br><br></br><br></br><br></br>
                            <hr />
                            <span className="massage"> More Info <KeyboardArrowRightIcon /> </span>
                        </div>

                        <div className="conntain4">

                            <pre> Low Stock Product</pre>
                            <br></br><br></br><br></br><br></br><br></br>
                            <hr />
                            <span className="massage"> More Info <KeyboardArrowRightIcon /> </span>
                        </div>
                    </div>


                </div>
            </div> */}
        </div>
    )
}

export default Home
