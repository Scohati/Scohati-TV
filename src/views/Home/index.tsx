import { Skeleton } from '@mantine/core';

function Home() {

  return (
    <section className='w-full my-12 px-[12vw] grid gap-8'>

      <div className='w-full max-w-[1600px] h-[500px] mb-12'>
        <Skeleton className='h-full' radius={'md'}/>
      </div>

      <div className='flex justify-between w-full'>
        <h2 className='font-bold text-white text-2xl'>| Lançamentos</h2>
        <button>Ver todos</button>
      </div>
      <section className='w-full max-w-[1600px] h-[500px] flex justify-center gap-4 mb-8'>
        <div className='w-4/5 h-full'>
          <Skeleton className='h-full' radius={'md'}/>
        </div>
        <section className='w-2/5 h-full flex flex-col gap-4'>
          <div className='h-full'>
            <Skeleton className='h-full' radius={'md'}/>
          </div>
          <div className='h-full'>
            <Skeleton className='h-full' radius={'md'}/>
          </div>
        </section>
      </section>

      <h2 className='font-bold text-white text-2xl'>| Avaliados</h2>
      <section className='w-full max-w-[1600px] h-[500px] justify-center flex gap-4'>
        <section className='w-2/5 h-full flex flex-col gap-4'>
          <div className='h-full'>
            <Skeleton className='h-full' radius={'md'}/>
          </div>
          <div className='h-full'>
            <Skeleton className='h-full' radius={'md'}/>
          </div>
        </section>
        <div className='w-4/5 h-full'>
          <Skeleton className='h-full' radius={'md'}/>
        </div>
      </section>
    </section>
  );
}

export default Home
