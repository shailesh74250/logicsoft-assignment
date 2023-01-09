import React, { render, screen } from '@testing-library/react';
import { CustomButton } from '../customButton';

// eslint-disable-next-line no-undef
describe('Testing CustomButton component', () => {
  // eslint-disable-next-line no-undef
  test('renders CustomButton component', () => {
    render(
      <CustomButton type="primary" shape="round" outline="button_outline" htmlType="button">
        Schedule Event
      </CustomButton>
    );
    const linkElement = screen.getByText(/Schedule Event/i);
    expect(linkElement).toBeInTheDocument();
  });
});
