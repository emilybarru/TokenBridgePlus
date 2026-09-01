// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenBridgePlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenBridgePlus/i);
    expect(titleElement).toBeInTheDocument();
});
