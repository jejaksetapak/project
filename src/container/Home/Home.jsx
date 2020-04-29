import React,{Component,Fragment} from 'react';
import Product from '../Product/Product';
import LifeCyleCom from '../LifeCycleComp/LifeCycleCom';
import BlogPost from '../BlogPost/BlogPost';
// import StateFull from '../StafeFull';
import YouTubeComp from '../../component/Youtube/YouTubeComp';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './Home.css';
class Home extends Component{
    state={
        showComponent:true
    }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //     showComponent:false
        //     })
        // },1500)
        
    }
    render(){
        return(
            <BrowserRouter>
             {/* <div>
           <p>Product</p>
              <hr/>
              <Product/>
               <p>YOU LOSE</p>
                <hr/>
                <YouTubeComp/>
                <YouTubeComp/>
                <YouTubeComp/>
                <YouTubeComp/>
              <p>LifeCycle</p>
              <hr/>{
                  this.state.showComponent
                  ?
                  <LifeCyleCom/>
                  :null
              }
              
               <p>BlogPost</p>
               <hr/>
               <BlogPost/>
            </div> */}
            <Fragment>
                <div className="navigation">
                   <Link to="/">Blog</Link>
                   <Link to="/product">Product</Link>
                   <Link to="/life">LifeCycle</Link>
                </div>
                <Route path="/" exact  component={BlogPost} />
                <Route path="/product" component={Product} />
                <Route path="/life" component={LifeCyleCom} />
            </Fragment>
            
            </BrowserRouter>
           
           
         )
    }
    
}
export default Home;