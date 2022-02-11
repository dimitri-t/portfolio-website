import './App.css';

function App() {
  return (
    <div className='bg-white h-screen m-auto w-4/5 lg:w-3/5 '>
      <header className='flex p-3 items-center justify-between pt-10 pb-5'>
        <div className='text-5xl font-semibold'>Dimitri Tsardakas</div>
        <div className='text-2xl'>
          <a
            href='https://github.com/dimitri-t'
            target='_blank'
            className='hover:bg-violet-200 hover:underline'
          >
            github
          </a>
          <br />
          <a
            href='https://www.linkedin.com/in/dimitri-tsardakas/'
            target='_blank'
            className='hover:bg-indigo-200 hover:underline'
          >
            linkedin
          </a>
        </div>
      </header>
      <main className='bg-slate-400 rounded-lg h-96'>
        <div className='flex items-center bg-black h-8 rounded-t-lg'>
          <div className='w-3 h-3 m-1 ml-2 rounded-full bg-red-600 items-centers'></div>
          <div className='w-3 h-3 m-1 rounded-full bg-orange-600 items-centers'></div>
          <div className='w-3 h-3 m-1 rounded-full bg-green-600 items-centers'></div>
        </div>
        <div className='p-5'>Content</div>
      </main>
    </div>
  );
}

export default App;
