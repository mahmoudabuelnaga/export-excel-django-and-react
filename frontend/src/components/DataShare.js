import { Table } from 'antd';
import React, {Component} from 'react';
import 'antd/dist/antd.min.css';
import axios from 'axios'

class Shrouded extends Component{
    state = {
        data : [],
    }

    columns = [
        {
          title: '_id',
          dataIndex: '_id',
          key: '_id',
          render: (text) => <a>{text}</a>,
          width: 150,
        },
        {
          title: 'index',
          dataIndex: 'index',
          key: 'index',
          width: 80,
        },
        {
          title: 'date',
          dataIndex: 'date',
          key: 'date',
          width: 150,
        },
        {
            title: 'transaction_type',
            dataIndex: 'transaction_type',
            key: 'transaction_type',
            width: 80,
        },
        {
          title: 'part',
          dataIndex: 'part',
          key: 'part',
          width: 120,
        },
        {
            title: 'cost',
            dataIndex: 'cost',
            key: 'cost',
            width: 120,
        },
        {
            title: 'stock',
            dataIndex: 'stock',
            key: 'stock',
            width: 80,
        },
        {
            title: 'transaction_amount',
            dataIndex: 'transaction_amount',
            key: 'transaction_amount',
            width: 80,
        },  
    ];

    async componentDidMount(){
        try{
            await axios.get(`https://shrouded-anchorage-89095.herokuapp.com/api/v1/logbook/`)
            .then(response => {
                this.setState({
                    data: response.data
                });
            })
          } catch(e){
            console.log(e)
          }
        }; 
    
    render(){
        return(
            <>
                <Table rowKey={record => record.index} columns={this.columns} dataSource={this.state.data} />
            </>
        )
    }
}

export default Shrouded;