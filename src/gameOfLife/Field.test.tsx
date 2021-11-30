import { mount } from "enzyme";
import { render, screen} from '@testing-library/react';
import { action } from "@storybook/addon-actions";
import Field from "./Field";
import React from "react";

  describe('Field', () => {
    test('renders field with posotion', () => {
      render(<Field fieldArr={[[false, false, false],[false, false, false],[false, false, true]]} onClick={jest.fn()}/>);
      expect(screen.getByText(22))
    })
    test('renders field with not active cell', () => {
      const { container } =  render(<Field fieldArr={[[false, false, false],[false, false, false],[false, false, false]]} onClick={jest.fn()}/>);
      expect(container.firstChild.classList.contains('cell-active')).toBe(false)
    });
    test('renders field with not nonActive cell', () => {
      const { container } =  render(<Field fieldArr={[[true, true, true],[true, true, true],[true, true, true]]} onClick={jest.fn()}/>);
      expect(container.firstChild.classList.contains('cell-nonActive')).toBe(false)
    });
  })