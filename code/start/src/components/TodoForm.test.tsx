import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import TodoForm from './TodoForm';
import { useTodoStore } from '../store/todoStore';

vi.mock('../store/todoStore', () => ({
        useTodoStore: vi.fn(),
}));

const mockedUseTodoStore = vi.mocked(useTodoStore);

describe('TodoForm', () => {
        const addTodo = vi.fn();

        beforeEach(() => {
                vi.clearAllMocks();
                mockedUseTodoStore.mockReturnValue({ addTodo } as never);
        });

        it('adds a trimmed todo and clears the input', () => {
                render(<TodoForm />);
                const input = screen.getByPlaceholderText('Add a new todo...');

                fireEvent.change(input, { target: { value: '  Buy milk  ' } });
                fireEvent.click(screen.getByRole('button', { name: 'Add' }));

                expect(addTodo).toHaveBeenCalledWith('Buy milk');
                expect(input).toHaveValue('');
        });

        it('does not add an empty todo', () => {
                render(<TodoForm />);
                const input = screen.getByPlaceholderText('Add a new todo...');

                fireEvent.change(input, { target: { value: '   ' } });
                fireEvent.click(screen.getByRole('button', { name: 'Add' }));

                expect(addTodo).not.toHaveBeenCalled();
                expect(input).toHaveValue('   ');
        });
});
