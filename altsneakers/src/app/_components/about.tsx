import Image from 'next/image';
import about1Img from '../../../public/tenisprincipal1.jpg'
import about2Img from '../../../public/logoaltsneakers.jpeg'
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

                <p>
                Descubra a revolução nos calçados que combina design arrojado com performance incomparável. Nossos produtos são feitos para quem não teme desafios e quer pisar forte em qualquer lugar. Conquiste o mundo com os modelos que não passam despercebidos.
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
                        Desde 2023                   
                    </li>
                    <li className='flex items-center gap-2'>
                        <Check className='text-blue-500'/>
                        100% dos pedidos sob encomenda                   
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
                    className=' bg-[#EB4B3B] text-white flex  w-fit gap-2 px-4 py-2 rounded-md' 
                    >
                        <InstagramLogo className='w-5 h-5 text-white'/>
                        Instagram
                    </a>
                </div>

                </div>

            </div>



         </div>
        </section>
    )
}