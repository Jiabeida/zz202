import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Table,Button } from 'antd';
const columns = [
    {
        title:'序号',
        align:'center',
        width:120,
        render:(text,record,index)=>{
            return <span>{index+1}</span>
        },
    },
    {
      title: 'Name',
      width:100,
      dataIndex: 'name',
    },
    {
      title: '图片',
      dataIndex: 'imageUrl',
      align:'center',
      render:(text,record)=>{
          return<img src={text} alt={record.name} style={{display:'block',width:80,minHeight:80,margin:"0 auto"}} />
      },
    },
    {
        title:'简介',
        dataIndex:'description'
    },
    {
        title:'操作',
        dataIndex:'isAdvance',
        width:130,
        render:(text,a)=>{
        return (<Button  type="primary" >{text?'取消': '收藏'}</Button>)
        }
    }
  ];
function List() {
    const [list,setList] = useState([])
    const [page,setPage]=useState(1)
    const [num,setNum]=useState(15)
    useEffect(()=>{
        axios.get(`https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&page_id=${page}&ret_num=${num}`).then(res=>{
            setList(res.data.data.list)
        })
    },[page])
    useEffect(()=>{
        axios.get(`https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&page_id=${page}&ret_num=${num}`).then(res=>{
            setList(res.data.data.list)
        })
    },[num])
    return (
        <div>
            <Table bordered={true} rowKey={(record) => `complete${record.albumId}`} 
            columns={columns} dataSource={list} 
            pagination={{
                defaultCurrent:1,
                total:150,
                defaultPageSize:15,
                onChange:(p,o)=>{
                    setPage(p)
                    setNum(o)
                    console.log(o)
                }
            }}
            />
        </div>
    )
}

export default List
