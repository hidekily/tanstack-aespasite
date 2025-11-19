import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/g')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="bg-zinc-800 h-[90vh]">
        <div className="flex flex-row h-[500px]">
          <div className="flex justify-center items-center w-[50%] h-[100%]">
            <p className='w-[40%] text-sky-300 text-lg ml-9'>TESTETSETSETSET</p>
          </div>
          <div className='w-[50%] h-[100%] flex justify-start items-center break-all text-center'>
            <a href="#" className='gis'></a>
          </div>
        </div>
      </div>

      <div className="flex h-[500px] bg-zinc-800">

      </div>
    </>
  )
}
