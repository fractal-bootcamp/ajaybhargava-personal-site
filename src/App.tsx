import { Card } from '@/components/ui/card'
import { MainCard } from '@/components/MainCard';
import { Separator } from '@/components/ui/separator';
import './App.css'


type ProjectItem = {
  id: number,
  title: string
  description: string,
  link: string,
  background: string
}

type ProjectProps = {
  items: ProjectItem[]
}

const items = [
  {
    id: 1,
    title: 'bynd.bio',
    description: 'AI enabled CRO sales automation platform',
    link: 'https://www.bynd.bio',
    background: './images/bynd-logo.png'
  }
]

function ProjectCards({ items }: ProjectProps) {
  return (
    <>
      {items.map((item) => {
        const cardStyles = `w-[300px] h-[224px] bg-contain bg-center bg-no-repeat relative rounded-lg bg-url('${item.background}')`
        console.log(cardStyles)
        return (
        <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
          <Card className={cardStyles}>
            <div className="opacity-0 hover:opacity-75 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl font-semibold bg-black text-white bg-blend-overlay rounded-lg">
              <div className='flex flex-col items-center'>
                <p className='font-bold'>{item.title}</p>
                <p className='font-thin'>{item.description}</p>
              </div>
            </div>
          </Card>
        </a>
      )
    }
    )}
    </>
  );
}

function App() {  
  return (
    <div>
      <MainCard />
      <Separator />
      <div className='items-start flex'>
        <div className="mt-4 text-4xl font-bold">
          Projects
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8 mt-4 justify-between'>
        <ProjectCards items={items} />
      </div>
    </div>
  )
}

export default App
