import React, { render, screen } from '@testing-library/react';
import { Card } from '../card';

// eslint-disable-next-line no-undef
describe('Testing Card component', () => {
  // eslint-disable-next-line no-undef
  test('renders card component', () => {
    render(
      <Card>
        <h1>This is card component</h1>
      </Card>
    );
    const linkElement = screen.getByText(/This is card component/i);
    expect(linkElement).toBeInTheDocument();
  });
});
