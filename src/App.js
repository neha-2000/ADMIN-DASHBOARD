import React ,{useState} from 'react';
import './App.css';
import SideMenu from './MyComponents/SideMenu';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Dashboard from './MyComponents/Dashboard'
import {Row,Col} from 'reactstrap';
import Topbar from './MyComponents/Topbar';
import Vendor from './MyComponents/Vendors/Vendor';




const Content=()=>{
  return <h1>Content</h1>
}

const Design=()=>{
  return <h1>Design</h1>
}

const Videos=()=>{
  return <h1>Videos</h1>
}

const Courses=()=>{
  return <h1>Courses</h1>
}

function App() {

  const [inactive,setInactive]=useState(false);
  return (
    <div className="App">
      <Router>
      <SideMenu
       onCollapse={(inactive)=>{
        console.log(inactive);
        setInactive(inactive);
      }}/>

      
     
      <div className={`container ${inactive ? 'inactive' : ""}`}>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path="/content" component={Content}/>
          
        <Route  path={"/content/videos"}>
          <Videos/>
        </Route>
        <Route  path={"/content/courses"}>
          <Courses/>
        </Route>
        <Route exact path="/customers" />
        <Route path={"/customers/vendor"} component={Vendor}/>

          
        <Route  path={"/design"}>
          <Design/>
        </Route>
      </Switch>
   </div>
  </Router>
</div>
  );

  
}

export default App;
