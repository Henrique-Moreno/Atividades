import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Descreve o bloco de testes para o componente Counter
describe('Componente Counter', () => {
  test('deve incrementar o contador quando o botão de incrementar é clicado', () => {

    // Renderiza o componente Counter
    render(<Counter />);

    // Verifica se o contador inicia em 0
    const counterValue = screen.getByText('0');
    expect(counterValue).toBeInTheDocument();

    // Simula o clique no botão de incrementar
    const incrementButton = screen.getByRole('button', { name: /incrementar/i });
    fireEvent.click(incrementButton);

    // Verifica se o contador foi incrementado para 1
    const updatedCounterValue = screen.getByText('1');
    expect(updatedCounterValue).toBeInTheDocument();
  });

  test('deve decrementar o contador quando o botão de decrementar é clicado', () => {
    render(<Counter />);

    // Verifica se o contador inicia em 0
    const counterValue = screen.getByText('0');
    expect(counterValue).toBeInTheDocument();

    // Simula o clique no botão de decrementar
    const decrementButton = screen.getByRole('button', { name: /decrementar/i });
    fireEvent.click(decrementButton);

    // Verifica se o contador foi decrementado para -1
    const updatedCounterValue = screen.getByText('-1');
    expect(updatedCounterValue).toBeInTheDocument();
  });
});
