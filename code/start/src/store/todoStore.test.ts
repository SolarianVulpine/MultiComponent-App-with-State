import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useTodoStore } from './todoStore';

describe('todoStore', () => {
        afterEach(() => {
                vi.restoreAllMocks();
        });

        beforeEach(() => {
                useTodoStore.setState({ todos: [] });
                vi.spyOn(Date, 'now').mockReturnValue(123);
        });

        it('adds a todo with an id and incomplete status', () => {
                useTodoStore.getState().addTodo('Write tests');

                expect(useTodoStore.getState().todos).toEqual([
                        { id: 123, text: 'Write tests', completed: false },
                ]);
        });

        it('toggles a todo without changing other todos', () => {
                useTodoStore.setState({
                        todos: [
                                { id: 1, text: 'First task', completed: false },
                                { id: 2, text: 'Second task', completed: true },
                        ],
                });

                useTodoStore.getState().toggleTodo(1);

                expect(useTodoStore.getState().todos).toEqual([
                        { id: 1, text: 'First task', completed: true },
                        { id: 2, text: 'Second task', completed: true },
                ]);
        });

        it('deletes only the todo with the requested id', () => {
                useTodoStore.setState({
                        todos: [
                                { id: 1, text: 'Keep this', completed: false },
                                { id: 2, text: 'Delete this', completed: false },
                        ],
                });

                useTodoStore.getState().deleteTodo(2);

                expect(useTodoStore.getState().todos).toEqual([
                        { id: 1, text: 'Keep this', completed: false },
                ]);
        });
});
