import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Face from '../images/anime-face.png'
import { GitHub, LinkedIn, Twitter, Scholar } from '@/components/icons/Socials'
import { RetroGrid } from "@/components/ui/retro-grid";

export function MainCard() {
    return (
      <div className='relative flex min-w-[900px] min-h-[600px] items-center justify-center rounded-lg overflow-hidden'>
        <Card className='max-w-[700px] min-w-[650px] bg-gradient-to-b from-slate-200 to-slate-100 opacity-100 shadow-lg'>
          <div className='grid grid-cols-[auto_1fr] items-center justify-center p-6 gap-6'>
            <div className='rounded-full overflow-hidden w-200 h-200'>
              <img src={Face} width={200} height={200} alt="Face." />
            </div>
            <div className='text-left'>
              <CardTitle className='text-4xl font-bold mb-4'>
                <span>Ajay Bhargava</span>
                <span className='font-light'>{' '}Ph.D.</span>
              </CardTitle>
              <div className='flex gap-2'>
                <Twitter />
                <LinkedIn />
                <GitHub />
                <Scholar />
              </div>
              <CardDescription className="pt-2 flex items-center gap-2">
                <div>
                <p className=''>
                  The best way to describe myself is to consider the domains I have approached in my academic and industrial career. 
                  I am a student of multiple disicplines and dogmatic approaches.  
                </p> 
                <p className=''>
                  I have successfully integrated these disiciples to become a professional who thrives at the interface of these areas:
                </p>
                <ul className='space-y-1 text-gray-500 list-disc list-inside mt-4 indent-4'>
                  <li>
                    Newtonian mechanics
                  </li>
                  <li>
                    Computational Biology
                  </li>
                  <li>
                    Computer Vision
                  </li>
                  <li>
                    Machine Learning Deployment
                  </li>
                  <li>
                    Fullstack AI engineering
                  </li>
                </ul>
                </div>
              </CardDescription>
            </div>
          </div>
        </Card>
        <RetroGrid className='opacity-20 w-full' />
        </div>
    )
  }