import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
import { Card, BigCard } from './Card';

describe('Card component', () => {
  const props = {
    name: 'Test Artist',
    image: 'test-image.jpg',
    id: '123'
  };

  it('renders name and image', () => {
    render(<Card {...props} />);
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    const img = screen.getByAltText('Test Artist');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image.jpg');
  });

  it('links to the correct artist page', () => {
    render(<Card {...props} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/artist/123');
  });
});

describe('BigCard component', () => {
  const props = {
    name: 'Test Album',
    image: 'test-album.jpg',
    type: 'Album',
    id: '456'
  };

  it('renders name, image and type', () => {
    render(<BigCard {...props} />);
    expect(screen.getByText('Test Album')).toBeInTheDocument();
    expect(screen.getByText('Album')).toBeInTheDocument();
    const img = screen.getByAltText('Test Album');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-album.jpg');
  });

  it('links to the correct album page when type is Album', () => {
    render(<BigCard {...props} />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('href', '/album/456');
    });
  });

  it('links to the correct song page when type is Song', () => {
    render(<BigCard {...props} type="Song" id="789" />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('href', '/song/789');
    });
  });
});
