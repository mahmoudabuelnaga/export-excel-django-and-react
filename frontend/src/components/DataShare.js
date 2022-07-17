import { Table } from 'antd';
import React, {Component} from 'react';
import 'antd/dist/antd.min.css';
import axios from 'axios'

class Shrouded extends Component{
    state = {
        data : [],
        // data_2: [
        //     {"_id": "62c2e020f24cc2b7f94fbc39", "index": 0, "date": "2017-07-23", "transaction_type": "out", "part": "SHA2", "cost": 1847.66, "stock": 28, "transaction_amount": 28}, 
        //     {"_id": "62c2e0201b53d2ca9f810e83", "index": 1, "date": "2018-01-28", "transaction_type": "in", "part": "SHA2", "cost": 1510.62, "stock": 26, "transaction_amount": 11}, 
        //     {"_id": "62c2e020a3bb5f0536d5fa2c", "index": 2, "date": "2017-08-09", "transaction_type": "out", "part": "MKSU-89", "cost": 1355.7, "stock": 38, "transaction_amount": 14}, 
        //     {"_id": "62c2e020237c89c0cd480720", "index": 3, "date": "2020-03-23", "transaction_type": "in", "part": "HKQ", "cost": 3678.92, "stock": 21, "transaction_amount": 4}, 
        //     {"_id": "62c2e020edfb23bbb43772f6", "index": 4, "date": "2015-04-06", "transaction_type": "in", "part": "SHA2", "cost": 1769.41, "stock": 35, "transaction_amount": 19}, 
        //     {"_id": "62c2e020ab06ff04adc272a5", "index": 5, "date": "2018-10-26", "transaction_type": "in", "part": "HKQ", "cost": 1897.27, "stock": 27, "transaction_amount": 10}, 
        //     {"_id": "62c2e020e03ac613438a9ab7", "index": 6, "date": "2016-07-30", "transaction_type": "in", "part": "HKQ", "cost": 1271.37, "stock": 37, "transaction_amount": 43}, 
        //     {"_id": "62c2e020ad677deadd3a87f1", "index": 7, "date": "2018-08-03", "transaction_type": "out", "part": "HKQ", "cost": 2083.97, "stock": 24, "transaction_amount": 40}, 
        //     {"_id": "62c2e020623bce1d9707fc26", "index": 8, "date": "2021-04-08", "transaction_type": "out", "part": "SHA2", "cost": 2794.52, "stock": 32, "transaction_amount": 48}, 
        //     {"_id": "62c2e0209c71bb49dca061de", "index": 9, "date": "2015-06-24", "transaction_type": "out", "part": "MKSU-89", "cost": 2142.05, "stock": 26, "transaction_amount": 42}, 
        //     {"_id": "62c2e0205a0200548abf24cf", "index": 10, "date": "2020-09-06", "transaction_type": "out", "part": "HKQ", "cost": 3262.36, "stock": 24, "transaction_amount": 22}, 
        //     {"_id": "62c2e02024e9591d510ce0b0", "index": 11, "date": "2018-09-21", "transaction_type": "out", "part": "SHA2", "cost": 2071.26, "stock": 37, "transaction_amount": 5}, 
        //     {"_id": "62c2e020a94d40bd696c5fd7", "index": 12, "date": "2019-02-23", "transaction_type": "out", "part": "SHA2", "cost": 2962.73, "stock": 34, "transaction_amount": 34},
        //     {"_id": "62c2e020566e221f7e5d2bee", "index": 13, "date": "2019-11-19", "transaction_type": "out", "part": "SHA2", "cost": 3106.83, "stock": 31, "transaction_amount": 40},
        //     {"_id": "62c2e0205d766a9dc76c1ab8", "index": 14, "date": "2014-12-04", "transaction_type": "in", "part": "HKQ", "cost": 3051.4, "stock": 36, "transaction_amount": 34},
        //     {"_id": "62c2e0207c9fe1b136fe8b89", "index": 15, "date": "2017-04-15", "transaction_type": "in", "part": "SHA2", "cost": 3996.75, "stock": 30, "transaction_amount": 8}, 
        //     {"_id": "62c2e020deb1767c50ecd892", "index": 16, "date": "2022-05-15", "transaction_type": "in", "part": "SHA2", "cost": 2986.8, "stock": 38, "transaction_amount": 40}
        // ],
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