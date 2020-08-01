import React,{useEffect,useState} from 'react';
import { Table,Button } from 'antd';

export default function Get() {
  const [list,setList] = useState([])
  const [flag,setFlag] = useState(false)
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
      dataIndex: 'username',
    },
    {
      title: '图片',
      dataIndex: 'Img',
      align:'center',
      width:250,
      render:(text,record)=>{
          return<img src={text} alt={record.username} style={{display:'block',width:80,minHeight:80,margin:"0 auto"}} />
      },
    },
    {
        title:'简介',
        dataIndex:'Price',
        width:300,
    },
    {
        title:'操作',
        dataIndex:'Num',
        width:130,
        render:(text,data,index)=>{
          return <Button onClick={()=>{
            const arr=JSON.parse(localStorage.getItem('Data'))
            arr.splice(index,1)
            localStorage.setItem('Data',JSON.stringify(arr))
            setFlag(!flag)
          }}  type="primary">删除</Button>
        }
        
    }
  ];

  useEffect(()=>{
    if(localStorage.getItem('Data')){
      setList(JSON.parse(localStorage.getItem('Data')))
    }
  },[])
  useEffect(()=>{
    console.log('1')
    if(localStorage.getItem('Data')){
      setList(JSON.parse(localStorage.getItem('Data')))
    }
  },[flag])
  return (
    <div>
        <Table bordered={true} rowKey={(record,index) => `complete${record.id}`} 
          columns={columns} dataSource={list} 
          />
    </div>
  )
}
