import { FC, useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import './postDetails.scss';
import { Container } from '../../components/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const PostDetails: FC = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  console.log('id', id);
  const fetchPost = async (): Promise<any> => {
    try {
      const result = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(result?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    void fetchPost();
  }, [id]);
  return (
    <Container>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </Container>
  );
};
