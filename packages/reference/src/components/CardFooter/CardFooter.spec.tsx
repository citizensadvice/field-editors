import React from 'react';
import { CardFooter } from './CardFooter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const audiences = ['England', 'Wales'];

describe('Card footer', () => {
  it('renders the card footer title', () => {
    const { getByText } = render(<CardFooter audiences={audiences} />);

    expect(getByText('Country audience')).toBeVisible();
  });

  it('renders audience badges', () => {
    const { getByText } = render(<CardFooter audiences={audiences} />);

    expect(getByText('England')).toBeVisible();
    expect(getByText('Wales')).toBeVisible();
  });

  it('does not render the component when there is no audience', () => {
    const { container } = render(<CardFooter audiences={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
