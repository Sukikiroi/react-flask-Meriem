import React, { Component } from 'react'
import  { useState, useEffect } from 'react';
import { getList, addToList, deleteItem, updateItem } from './ListFunctions'
import Button from './Button';
import Select from './Select';
import {Line} from 'react-chartjs-2';
import Menu from './Menu';
import Switcho from './switcho';
import Menu2 from './Menu2';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import axios from 'axios'
export default class List extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            items: [],
            persons: [],
            p: "",
            Data2: true,
            Data1: 'Yes',
            Training:"",
            Test:""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount () {
        this.getAll()
    }

    onChange = e => {
        this.setState({
            term: e.target.value,
            editDisabled: 'disabled'
        })
    }
    
    
  
     
    componentDidMount = async () =>{
     
       axios.get(`api/task`)
       .then(res => {
         
         this.setState({ term:res.a });
       })
     }
    onSubmit = e => {
        e.preventDefault()
        this.setState({ editDisabled: '' })
        addToList(this.state.term).then(() => {
            this.getAll()
        })
    }

    onUpdate = e => {
        e.preventDefault()
        updateItem(this.state.term, this.state.id).then(() => {
            this.getAll()
        })
    }

    onEdit = (item, itemid, e) => {
        e.preventDefault()
        this.setState({
            id: itemid,
            term: item
        })
        console.log(itemid)
    }


    
          getKN() {
            axios.get(`http://127.0.0.1:5000/api/Neighbors`)
              .then(res => {
                
                this.setState({Training:res.data });
              })
              axios.get(`http://127.0.0.1:5000/api/Neighbors2`)
              .then(res => {
                
                this.setState({Test:"And the  "+res.data });
              })}
        
              getarbre() {
                axios.get(`http://127.0.0.1:5000/api/arbre`)
                  .then(res => {
                    
                    this.setState({Training:res.data });
                  })
                  axios.get(`http://127.0.0.1:5000/api/arbre2`)
                  .then(res => {
                    
                    this.setState({Test:"And the  "+res.data });
                  })}

                    
    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.items]
        data.filter((item, index) => {
            if (item[1] === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })
    }

    render () {
       
        const Subm1 = {
            color: "white",
            'borderRadius':'15px',
            backgroundColor: "HotPink",
            padding: "10px",
            fontFamily: "Arial",
            width:"280px",
            marginLeft: '15rem' 
          };
          const Subm2 = {
            color: "white",
            borderWidth:"2px",
            borderRadius:'15px',
            backgroundColor: "Fuchsia",
            padding: "10px",
            fontFamily: "Arial",
            width:"280px",
            marginLeft: '15rem' 
          };
          const Subm3 = {
            color: "white",
            'borderRadius':'15px',
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            width:"280px",
            height:"40px",
            marginLeft: '15rem' 
          };
        const Subm4 = {
            color: "white",
            'borderRadius':'15px',
            backgroundColor: "BlueViolet",
            padding: "10px",
            fontFamily: "Arial",
            width:"280px",
            marginLeft: '15rem' 
          };
          const text = {
            color: "white",
           
            padding: "10px",
            fontFamily: "Arial",
            width:"300px",
            Bottom:"-400px",
            height:"200px",
            left:"500px"
          };
          
         
          const mystyle = {
            color: "white",
            'borderRadius':'10px',
            backgroundColor: "Purple",
            padding: "10px",
            fontFamily: "Arial",
            bottom:"100px",
            width:"300px",
            height:"200px",
            left:"300px"
          };
        return (
            <div className="col-md-12">
                <Menu2/> 
               
              <Switcho  />
             
                <ul>
               
      </ul>
               
                <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                <div>  <h4 style={mystyle} > {this.state.Training}  {this.state.Test}</h4></div>                                    
                    <button className="btn btn-success btn-block"
                        type="submit"
                        onClick={this.getKN.bind(this)} style={Subm3}>
                        Classification K Nearest Neighbors
                    </button>
                    <button className="btn btn-success btn-block"
                        type="submit"
                        onClick={this.getarbre.bind(this)} style={Subm3}>
                        <h6>Classification Decision Tree</h6>
                    </button>
                    
         
   </form>
                
               
            </div>
        )
    }
}

