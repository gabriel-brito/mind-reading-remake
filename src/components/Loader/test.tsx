import React from 'react';
import { screen } from '@testing-library/react';

import Loader from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Loader />', () => {
  it('should have a div with a z-index in overlay level (30)', () => {
    const { container } = renderWithTheme(<Loader />);

    expect(container.firstChild).toHaveStyle('z-index: 30');
  });

  it('should have a div with the whole screen size and to be a fixed element', () => {
    const { container } = renderWithTheme(<Loader />);

    expect(container.firstChild).toHaveStyle('height: 100%');
    expect(container.firstChild).toHaveStyle('width: 100%');
    expect(container.firstChild).toHaveStyle('position: fixed');
  });

  it('should have a loader', () => {
    renderWithTheme(<Loader />);

    expect(screen.getByLabelText('loader')).toBeInTheDocument();
  });

  it('should have a light grey loader', () => {
    renderWithTheme(<Loader />);

    expect(screen.getByLabelText('loader')).toHaveStyle(
      'border-color: #F3F3F3'
    );
  });

  it('should have a yellow side in the loader', () => {
    renderWithTheme(<Loader />);

    expect(screen.getByLabelText('loader')).toHaveStyle(
      'border-right-color: #FFD300'
    );
  });

  it('should have an animation in the loader', () => {
    renderWithTheme(<Loader />);

    expect(screen.getByLabelText('loader')).toHaveStyle(
      'animation: spin 1s linear infinite'
    );
  });
});
