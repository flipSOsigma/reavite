import { SiReact, SiTypescript } from "react-icons/si"

const Hover = () => {
  return (
    <div className="border w-80 aspect-square grid gap-2 grid-cols-5 grid-rows-5">
      <div className="aspect-square flex-center bg-white tts col-span-2 rounded-full row-span-2 -translate-x-1 neo"><SiReact className='text-6xl'/></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"></div>
      <div className="aspect-square flex-center bg-white tts col-span-2 row-span-2 -translate-x-1 neo"></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"></div>
      <div className="aspect-square flex-center tts col-span-2 row-span-2 -translate-x-1 neo bg-teal-400"></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"><SiTypescript className='text-2xl'/></div>
      <div className="test-xs aspect-square bg-white tts col-span-2 row-span-2 -translate-x-1 neo"><b className="text-lg">Reavite</b> <br /><p className='text-xs'>V 1.0.1 </p></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 neo"></div>
      <div className="aspect-square flex-center bg-white tts -translate-x-1 rounded-full neo"></div>
    </div>
  )
}

export default Hover
