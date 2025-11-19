import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/n')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="bg-zinc-800 h-[90vh]">
        <div className="flex flex-row h-[500px]">
          <div className='w-[50%] h-[100%] flex justify-center items-center'>
            <a href="#" className='nin'></a>
          </div>
          <div className='w-[50%] h-[100%] flex flex-col justify-center items-center break-all text-center gap-5'>
            <h1 className='text-2xl text-sky-300'>ningning</h1>
            <p className='w-[70%] text-sky-300 text-lg'>Main vocalist. Nascida em 2002, Ningning é chinesa e a membro mais jovem do grupo. Possui vocais excepcionalmente potentes e técnica vocal sólida, sendo frequentemente responsável pelas partes mais desafiadoras das músicas. Apesar de ser a maknae (mais nova), sua maturidade artística e presença vocal são impressionantes, estabelecendo-a como uma das melhores vocalistas de sua geração.</p>
          </div>
        </div>
      </div>  

      <div className="flex h-[500px] bg-zinc-800">

      </div>
    </>
  )
}
