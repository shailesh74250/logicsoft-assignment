import React, { render, screen } from '@testing-library/react';
import { Container } from '../container';

// eslint-disable-next-line no-undef
describe('Testing Container component', () => {
  // eslint-disable-next-line no-undef
  test('renders learn react link', () => {
    render(
      <Container>
        <h1>This is container component</h1>
      </Container>
    );
    const linkElement = screen.getByText(/This is container component/i);
    expect(linkElement).toBeInTheDocument();
  });
});
