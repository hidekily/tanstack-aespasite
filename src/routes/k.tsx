import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/k')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
      <div className="bg-zinc-800 h-[90vh]">
        <div className="flex flex-row h-[500px]">
          <div className='w-[50%] h-[100%] flex justify-center items-center'>
            <a href="#" className='rin'></a>
          </div>
          <div className='w-[50%] h-[100%] flex flex-col justify-center items-center break-all text-center gap-5'>
            <h1 className='text-2xl text-sky-300'>Karina</h1>
            <p className='w-[70%] text-sky-300 text-lg'>Líder, main dancer e sub-vocalista do grupo. Nascida em 2000, Karina é conhecida por sua presença de palco carismática e habilidades impressionantes de dança. Com visuais marcantes e uma aura de liderança natural, ela frequentemente assume o centro nas coreografias do aespa. Seu estilo combina elegância com atitude, tornando-a uma das figuras mais icônicas da 4ª geração do K-pop.</p>
          </div>
        </div>
      </div>    

      <div className="flex h-[500px] bg-zinc-800">

      </div>  
    </>
  )
}
