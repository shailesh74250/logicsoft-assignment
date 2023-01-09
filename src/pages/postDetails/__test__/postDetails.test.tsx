import { render, screen } from '@testing-library/react';
import { PostDetails } from '..';

// eslint-disable-next-line no-undef
describe('Testing ScheduleMeeting component', () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => {
    window.matchMedia =
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {}
        };
      };
  });
  // eslint-disable-next-line no-undef
  test('renders ScheduleMeeting component', () => {
    render(<PostDetails />);
    const enterDetails = screen.getByText(/Enter Details/i);
    const meetingWith = screen.getByText(/Gurav Garg/i);
    expect(enterDetails).toBeInTheDocument();
    expect(meetingWith).toBeInTheDocument();
  });
});
