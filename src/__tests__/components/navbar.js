import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
      );
    const applyLink = getByText('Apply');
    const howItWorksLink = getByText('How it works');
    const aboutUsLink = getByText('About us');
    const blogLink = getByText('Blog');
    const partnerSignUpLink = getByText('Partner sign up');
    const partnerLoginLink = getByText('Partner login');
    expect(applyLink).toBeInTheDocument();
    expect(howItWorksLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(partnerSignUpLink).toBeInTheDocument();
    expect(partnerLoginLink).toBeInTheDocument();
  });
});
