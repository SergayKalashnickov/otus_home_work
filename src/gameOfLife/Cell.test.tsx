import React from 'react';
import {Cell} from './Cell'
import { render, screen} from '@testing-library/react';

describe('Cell', () => {
    test('renders Cell with posotion', () => {
      render(<Cell x={3} y={3} active={true} onClick={jest.fn()}/>);
      expect(screen.getByText(33))
    }),
    test('renders Cell actived', () => {
      const { container } = render(<Cell x={1} y={1} active={true} onClick={jest.fn()}/>);
      expect(container.firstChild.classList.contains('cell-active')).toBe(true)
    });
    test('renders Cell actived2', () => {
      const { container } = render(<Cell x={1} y={1} active={true} onClick={jest.fn()}/>);
      expect(container.firstChild.classList.contains('cell-noActive')).toBe(false)
    });
    test('renders Cell non actived', () => {
      const { container } = render(<Cell x={1} y={1} active={false} onClick={jest.fn()}/>);
      expect(container.firstChild.classList.contains('cell-noActive')).toBe(true)
    });
  });
