import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import TodoList from './TodoList';
import { useTodoStore } from '../store/todoStore';

vi.mock('../store/todoStore', () => ({
        useTodoStore: vi.fn(),
}));

const mockedUseTodoStore = vi.mocked(useTodoStore);

describe('TodoList', () => {
        const toggleTodo = vi.fn();
        const deleteTodo = vi.fn();

        beforeEach(() => {
                vi.clearAllMocks();
                mockedUseTodoStore.mockReturnValue({
                        todos: [
                                { id: 1, text: 'Finish assignment', completed: false },
                                { id: 2, text: 'Review tests', completed: true },
                        ],
                        toggleTodo,
                        deleteTodo,
                } as never);
        });

        it('renders todos and shows completed styling', () => {
                render(<TodoList />);

                expect(screen.getByRole('button', { name: 'Finish assignment' })).toBeVisible();
                expect(screen.getByRole('button', { name: 'Review tests' })).toHaveClass('line-through');
        });

        it('toggles and deletes the selected todo', () => {
                render(<TodoList />);

                fireEvent.click(screen.getByRole('button', { name: 'Finish assignment' }));
                fireEvent.click(screen.getAllByRole('button', { name: 'Delete' })[1]);

                expect(toggleTodo).toHaveBeenCalledWith(1);
                expect(deleteTodo).toHaveBeenCalledWith(2);
        });
});