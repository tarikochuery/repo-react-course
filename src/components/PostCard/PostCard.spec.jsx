import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

const mock = {
  title: 'title 1',
  body: 'body1',
  id: 'id1',
  cover: 'img/img.png',
};

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard post={mock} />);

    expect(screen.getByRole('img', { name: mock.title })).toHaveAttribute('src', mock.cover);
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard post={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
