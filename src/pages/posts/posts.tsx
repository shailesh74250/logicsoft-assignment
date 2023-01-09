import React, { FC, useState, useEffect } from 'react';
import 'antd/dist/reset.css';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import './posts.scss';
import { Container } from '../../components/Container';
import axios from 'axios';

interface DataType {
  id: number;
  title: string;
}

export const Posts: FC = () => {
  const [posts, setPosts] = useState([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      render: (text: any) => <a href={`/post/${text}`}>{text}</a>
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
      // filters: [
      //   {
      //     text: 'London',
      //     value: 'London'
      //   },
      //   {
      //     text: 'New York',
      //     value: 'New York'
      //   }
      // ],
      // onFilter: (value: string, record) => record.title.indexOf(value) === 0
    }
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, sorter, extra) => {
    console.log('params', pagination, sorter, extra);
  };

  const data: DataType[] = posts;
  const fetchPost = async (): Promise<any> => {
    try {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      setPosts(result?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void fetchPost();
  }, []);
  return (
    <Container>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </Container>
  );
};
