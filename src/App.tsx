import { Card } from '@/components/ui/card'
import { MainCard } from '@/components/MainCard';
import { Separator } from '@/components/ui/separator';
import { fetchSheetData } from '@/services/sheets';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';


type ProjectItem = {
  id: number,
  title: string
  description: string,
  link: string,
  background: string
}


async function getProjects(): Promise<ProjectItem[]> {
  const data = await fetchSheetData();
  return data.map((row: Record<string, string>): ProjectItem => ({
    id: Number.parseInt(row.id),
    title: row.title,
    description: row.description,
    link: row.link,
    background: row.background
  }));
}

function ProjectCards({ items }: { items: ProjectItem[] }) {
  return (
    <>
      {items.map((item) => {
        const cardStyles = 'w-[300px] h-[224px] bg-contain bg-center bg-no-repeat relative rounded-lg'
        return (
        <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
          <Card className={cardStyles}>
            <div className="overflow-hidden h-full w-full object-cover rounded-lg">
              <img 
               className='overflow-hidden h-full w-full object-cover rounded-lg'
               src={item.background}
               alt='Logo'
              /> 
              <div className='opacity-0 hover:opacity-75 duration-300 absolute inset-0 z-10 justify-center text-2xl font-semibold bg-black text-white bg-blend-overlay rounded-lg flex flex-col items-center'>
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
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

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
        <ProjectCards items={projects} />
      </div>
    </div>
  )
}

export default App
