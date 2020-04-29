import React,{Component,Fragment} from 'react';
import './Prod.css';
import CardProduct from './CardProduct';

class Product extends Component{
    state={
        order:0
    }
    handleCounterChange=(newValue)=>{
       this.setState({
           order:newValue
       }) 
    }
    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header-prod">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg"/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <br/>
                <CardProduct onCounterChange={(value)=>this.handleCounterChange(value)}/>
            </Fragment>
            // <p>jasjsjsjhasakj</p>
            
        )
    }
}
export default Product;