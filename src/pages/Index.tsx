import { FaFile, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si'
import { Link } from 'react-router-dom'
import Hover from '../minigames/Hover'
const Index = () => {

  const features: { id: number, title: string, desc: string, link: string}[] = [
    {
      id: 1,
      title: 'Class Grouping',
      desc: 'this feature is a unites of some classes in tailwindcss to generate common style that programmer used',
      link: '/grouping'
    },
    {
      id: 2,
      title: 'Packages Bundling',
      desc: 'no need to setup your react app, we already installed react-router-dom, react-icons, tailwindcss, etc.',
      link: '/grouping'
    },
  ]

  
  return (
    <div className='w-full flex-center flex-col'>
      <div className="h-screen flex justify-between container">
        <div className="flex min-h-screen flex-col justify-center flex-1">
          <h1 className="font-extrabold text-3xl mb-4">Revite - V 1.0.1</h1>
          <div className="flex mb-2 gap-2">
            <div className="badge"><SiTypescript/> typescript</div>
            <div className="badge bg-teal-400 border border-black text-black"><SiJavascript/> javascript</div>
          </div>
          <p className='max-w-xl'> react vite typsscript kit that make you easier to start a new project. we try to make you feel comfortable when starting a new react + vite + tsx project,
            we ve been install react-router-dom, react-icons, and tailwindcss here, so you dont have to isntall
            it yourself
          </p>
          <div className="flex gap-4 mt-4">
            <Link to={'/docs'} className='neo bg-teal-400 flex-center gap-2 rounded'><FaGithub/> read documentation</Link>
            <Link to={'https://github.com/flipSOsigma/ReaViTesexs'} className='neo flex-center gap-2 rounded'><FaFile/> github repository</Link>
          </div>
        </div>
        <div className='flex-center'>
          <div className='flex-center flex-1'>
            <Hover/>
          </div>
        </div>
      </div>
      {/* <div className='bg-teal-400  border-y-4 border-black py-4 w-full'>
        <div className='w-full flex-center gap-6 animation-[sliding]'>
          <div className="w-8 aspect-square neo bg-white -translate-y-1 "></div>
          <b>REAVITE - 1.0.1</b>
          <div className="w-8 aspect-square neo bg-white -translate-y-1 "></div>
        </div>
      </div> */}
    </div>
  )
}

export default Index
