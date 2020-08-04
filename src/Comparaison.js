import React, { Component } from 'react'
import { getList, addToList, deleteItem, updateItem } from './ListFunctions'
import Button from './Button';
import Select from './Select';
import {Line} from 'react-chartjs-2';
import Menu from './Menu';
import Menu2 from './Menu2';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDrag } from 'react-dnd'
import Card from '@material-ui/core/Card';

class List extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            items: []
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

    getAll = () => {
        getList().then(data => {
            this.setState({
                term: '',
                items: [...data]
            },
                () => {
                    console.log(this.state.term)
                })
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
       //Css of The Card
       const Cardo = {
        height: '300px',
        backgroundColor: "WhiteSmoke",
        borderRadius:'10px',
        width:'600px',
        fontFamily: "Arial"
      };   
      const Cardall = {
        height: '600px',
        backgroundColor: "WhiteSmoke",
        borderRadius:'10px',
        width:'600px',
        fontFamily: "Arial"
      }; 
        const Subm = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            width:"90px",
            marginLeft: '15rem' 
          };
          const text = {
            color: "white",
           
            padding: "10px",
            fontFamily: "Arial",
            width:"160px",
            Bottom:"-400px",
            left:"500px"
          };
          
          const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'Indigo',
                borderCapStyle: 'Indigo',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'LawnGreen',
                pointBackgroundColor: 'LawnGreen',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 15,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
        return (
            <div className="col-md-12">
                <Menu2/>
                <Card   style={Cardall}  variant="outlined">

                <Card   style={Cardo}  variant="outlined">
               <Line data={data} />
               
               </Card>
               <Card   style={Cardo}  variant="outlined">
               <Line data={data} />
               
               </Card>
               </Card>
            </div>
        )
    }
}

export default List