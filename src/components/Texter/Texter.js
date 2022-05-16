import React, { Component } from 'react';
import Char from '../Char';
import Show from '../Show/Show';

class Texter extends Component {
    constructor (){
        super()
        this.state ={
            conter: '',
        }   
    }
    text = (e)=>{
        this.setState({conter: e.target.value})
    }
    deleteHandler = (e) => {
        const text = this.state.conter.split('')
        text.splice(e,1)
        const update = text.join('');
        this.setState({
            conter:update
        })


    }
    render() {
        const charlist = this.state.conter.split('').map((chr,i)=>{
            return <Char charInput={chr} key={i} clicked={()=> this.deleteHandler(i)} />
        })  
        return (
            <div>
                <input type="text"  onChange={this.text}/>
                <p>{this.state.conter}</p>
                <Show inputLenght={this.state.conter.length}/>
                {charlist}
            </div>

        );
    }
}

export default Texter;
