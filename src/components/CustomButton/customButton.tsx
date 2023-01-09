import React, { FC } from 'react';
import { Button } from 'antd';
import './customButton.css';

interface Props {
  children: string;
  type?: 'link' | 'text' | 'default' | 'primary' | 'ghost' | 'dashed' | undefined;
  shape?: 'circle' | 'default' | 'round' | undefined;
  outline?: string | undefined;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
}
export const CustomButton: FC<Props> = ({ children, type, shape, outline, htmlType }) => (
  <Button type={type} shape={shape} className={outline} htmlType={htmlType}>
    {children}
  </Button>
);
