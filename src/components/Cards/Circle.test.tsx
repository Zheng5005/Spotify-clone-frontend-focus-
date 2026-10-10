import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
import Circle from './Circle';

describe('Circle component', () => {
  const props = {
    name: 'Test Artist',
    image: 'test-artist.jpg',
    id: 'abc'
  };

  it('renders name, image and Artist label', () => {
    render(<Circle {...props} />);
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByText('Artist')).toBeInTheDocument();
    const img = screen.getByAltText('Test Artist');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-artist.jpg');
    expect(img).toHaveClass('rounded-full');
  });

  it('links to the correct artist page', () => {
    render(<Circle {...props} />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('href', '/artist/abc');
    });
  });
});
