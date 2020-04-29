import React,{Component} from 'react';

class CardProduct extends Component{
    state={
        order:0
    }
    handleCounterChange=(newValue)=>{
        this.props.onCounterChange(newValue);
    }
    handlePlus=()=>{
        if(this.state.order<5){
            this.setState({
                order:this.state.order + 1
            },()=>{
                this.handleCounterChange(this.state.order);
            })
        }
       
       
    }
    handleMinus=()=>{
        if(this.state.order>0){
            this.setState({
                order:this.state.order - 1
            },()=>{
                this.handleCounterChange(this.state.order);
            })
        }
        
    }
    render(){
        return(
            <div className="card-prod">
                <div className="img-thumb-prod">
                        <img src="https://etanee.id/img/content/img_sapi.jpg" alt=""/>
                    </div>
                    <p className="product-title">Daging Naga</p>
                    <p className="product-price">Rp 34.000</p>
                    <div className="couter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" className="total" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
            </div>
        )
    }
}
export default CardProduct;