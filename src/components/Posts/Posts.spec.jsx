import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'title1',
      body: 'body1',
      cover: 'img/img1',
    },
    {
      id: 2,
      title: 'title2',
      body: 'body2',
      cover: 'img/img2',
    },
    {
      id: 3,
      title: 'title3',
      body: 'body3',
      cover: 'img/img3',
    },
  ],
};

describe('<Posts />', () => {
  it('should render Posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  it('should not render posts', () => {
    render(<Posts posts={[]} />);

    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
