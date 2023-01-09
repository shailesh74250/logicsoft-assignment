import React, { FC, useState, useEffect, useCallback } from 'react';
import 'antd/dist/reset.css';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './posts.scss';
import { Container } from '../../components/Container';
import { Card } from '../../components/Card';
import axios from 'axios';

interface DataType {
  id: number;
  title: string;
}

let posts: DataType[];

export const Posts: FC = () => {
  const [filterPosts, setFilterPosts] = useState<DataType[]>([]);

  const debounce = (func: any): any => {
    let timer: any;
    return function (this: any, ...args: any) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const context = this;
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleOnChange = (value: string): any => {
    const filterData = posts.filter((item) => item.title.includes(value));
    setFilterPosts(filterData);
  };

  // useCallback provides us the memoized callback
  const optimizedVersion = useCallback(debounce(handleOnChange), []);

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
    }
  ];

  const fetchPost = async (): Promise<any> => {
    try {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      posts = result?.data;
      setFilterPosts(result?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void fetchPost();
  }, []);
  return (
    <Container>
      <Card>
        <>
          Search:{' '}
          <input
            type="text"
            onChange={(e) => optimizedVersion(e.target.value)}
            className="searchBox"
          />
          <Table columns={columns} dataSource={filterPosts} />
        </>
      </Card>
    </Container>
  );
};
