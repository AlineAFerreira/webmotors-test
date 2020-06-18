import React from 'react';
import { Item, Square, Body, Rect1, Rect2, Footer, Rect3, Rect4 } from './styles';

export const Loading = () => {
  return (
    <Item className="loading">
      <Square />
      <Body>
        <Rect1 />
        <Rect2 />
      </Body>
      <Footer>
        <Rect3 />
        <Rect4 />
      </Footer>
    </Item>
  )
}
