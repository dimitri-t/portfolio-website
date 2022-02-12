import './App.css';
import './typewriter';

function App() {
  return (
    <div className='h-96 m-auto w-4/5 lg:w-3/5 '>
      <header className='flex p-3 items-center justify-between pt-10 pb-5'>
        <div className='text-5xl font-semibold'>Dimitri Tsardakas</div>
        <div className='text-2xl'>
          <a
            href='https://github.com/dimitri-t'
            target='_blank'
            className='hover:bg-green-200 hover:underline'
          >
            github
          </a>
          <br />
          <a
            href='https://www.linkedin.com/in/dimitri-tsardakas/'
            target='_blank'
            className='hover:bg-violet-200 hover:underline'
          >
            linkedin
          </a>
        </div>
      </header>

      {/* Terminal */}
      <main className='rounded-lg h-screen bg-indigo-300'>
        <div className='flex items-center bg-neutral-800 h-8 rounded-t-lg'>
          <div className='w-3 h-3 m-1 ml-2 rounded-full bg-red-600 items-centers'></div>
          <div className='w-3 h-3 m-1 rounded-full bg-orange-600 items-centers'></div>
          <div className='w-3 h-3 m-1 rounded-full bg-green-600 items-centers'></div>
        </div>

        <div className='m-auto p-6 text-white font-mono text-md'>
          <span id='terminalText' class='terminalText'></span>
          <span class='blinker'>&#32;</span>
        </div>
      </main>
    </div>
  );
}

export default App;