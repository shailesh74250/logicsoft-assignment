import { FC, useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import './postDetails.scss';
import { Container } from '../../components/Container';
import { Card } from '../../components/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface postInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const PostDetails: FC = () => {
  const [post, setPost] = useState<postInterface>();
  const { id } = useParams();
  console.log('id', post);
  const fetchPost = async (): Promise<any> => {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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
      <Card>
        {post != null ? (
          <>
            <p>Post id: {post?.id}</p>
            <p>Posted by: {post?.userId}</p>
            <p>Post title: {post?.title}</p>
            <p>Post body: {post?.body}</p>
            <img
              src={
                'https://www.paybima.com/blog/wp-content/uploads/2022/07/PAYING-POST-OFFICE-RECURRING-DEPOSIT-ONLINE.jpg'
              }
              alt="post"
              width={100}
              height={100}
            />
          </>
        ) : (
          <p>No post found!</p>
        )}
      </Card>
    </Container>
  );
};
