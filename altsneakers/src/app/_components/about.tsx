import Image from 'next/image';
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check } from 'lucide-react';
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

export function About() {
    return(
        <section className="bg-[#FDF6ec] py-16"> 
         <div className="container px-4 mx-auto">

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

            <div className='relative'>

                    <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'> 
                        <Image
                            src={about1Img}
                            alt='Foto do tênis 3'
                            fill
                            quality={100}
                            className='object-cover hover:scale-110 duration-300'
                            priority
                        />
                    </div>

                    <div className='absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-blue-400'> 
                        <Image
                            src={about2Img}
                            alt='Logo Altsneakers'
                            fill
                            quality={100}
                            priority
                        />
                    </div>

            </div>

            <div className='space-y-6 mt-10'>

                <h2 className='text-4xl font-bold'>SOBRE</h2>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, esse? Nisi beatae nihil blanditiis sapiente velit architecto dignissimos id corporis libero inventore? Ut labore ullam iusto, recusandae eius qui illo.
                </p>

                <ul className='space-y-4'>
                    <li className='flex items-center gap-2'>
                        <Check className='text-blue-500'/>
                        Mais de 500 vendas realizadas
                    </li>
                    <li className='flex items-center gap-2'>
                        <Check className='text-blue-500'/>
                        Envios para todo o Brasil
                        
                    </li>
                    <li className='flex items-center gap-2'>
                        <Check className='text-blue-500'/>
                        Desde 2022                   
                    </li>
                    
                </ul>

                <div className='flex gap-2'>
                    <a 
                    href="#LinkWpp" 
                    className='bg-[#51b1e9] text-white flex  w-fit gap-2 px-4 py-2 rounded-md' 
                    >
                        <WhatsappLogo className='w-5 h-5 text-white'/>
                        Contato via Whatsapp
                    </a>

                    <a 
                    href="#LinkInstagram" 
                    className=' text-black flex  w-fit gap-2 px-4 py-2 rounded-md' 
                    >
                        <InstagramLogo className='w-5 h-5 text-black'/>
                        Instagram
                    </a>
                </div>

            </div>

        </div>



         </div>
        </section>
    )
}