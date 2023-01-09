import React, { FC } from 'react';
import './card.css';

interface Props {
  children: JSX.Element;
}

export const Card: FC<Props> = ({ children }) => <div className="card">{children}</div>;
