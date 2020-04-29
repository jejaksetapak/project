import React,{Component,Fragment} from 'react';
import './LifeCycle.css'
class LifeCyleCom extends Component{
    constructor(props){
        super(props);
        this.state={
            count:1
        }
        console.log('constructor');
    }
    static getDerivedStatefFromProps(props,state){
            console.log('getDerivedStatefFromProps');
            return null;
    }
    componentDidMount(){
            console.log('componentDidMount');
            // setTimeout(()=>{
            //     this.setState({
            //         count:2
            //     })
            // },3000)
           
    }
    shouldComponentUpdate(nextProps,nextState){
            console.group('shouldComponentUpdate');
            // console.log('nextProps',nextProps);
            console.log('nextState',nextState);
            console.groupEnd();
            if(nextState.count >=4){
                return false;
            }
           return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('getSnapshotBeforeUpdate');
            return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
            console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillMount');
    }
    changeCount =()=>{
        this.setState({
            count:this.state.count +1
        })
    }
    render(){
        return(
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr/>
                <button className="btn" onClick={this.changeCount}>UBUNTU {this.state.count}</button>
            </Fragment>
            
        )
    }
}
export default LifeCyleCom;
