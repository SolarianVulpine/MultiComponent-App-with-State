// import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e8] px-4 py-8 text-[#19343a] sm:px-6">
      <section className="mx-auto w-full max-w-2xl">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ee735d]">
            Daily tasks
          </p>
          <h1 className="mt-1 text-4xl font-bold leading-none">
            Todo List
          </h1>
        </div>

        <div className="rounded-md border border-[rgba(25,52,58,0.14)] bg-[#fffdf8]/80 p-6 shadow-[0_1rem_2.5rem_rgba(25,52,58,0.07)]">
          <TodoForm />
          <TodoList />
        </div>
      </section>
    </main>
  );
}

export default App;