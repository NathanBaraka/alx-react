import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders a div with the class App-header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner'); // Assuming your header uses the <header> element
    expect(headerElement).toHaveClass('App-header');
  });

  test('renders a div with the class App-body', () => {
    render(<App />);
    const bodyElement = screen.getByText(/app body/i); // Adjust to match text in your App component
    expect(bodyElement).toHaveClass('App-body');
  });

  test('renders a div with the class App-footer', () => {
    render(<App />);
    const footerElement = screen.getByRole('contentinfo'); // Assuming your footer uses the <footer> element
    expect(footerElement).toHaveClass('App-footer');
  });
});
