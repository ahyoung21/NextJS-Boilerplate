import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Test', () => {
  it('renders a heading', () => {
    const { container } = render(<Footer />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
