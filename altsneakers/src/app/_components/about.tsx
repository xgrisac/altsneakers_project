import Image from 'next/image';
import about1Img from '../../../public/tenisprincipal1.jpg'
import about2Img from '../../../public/logoaltsneakers.jpeg'
import { Check } from 'lucide-react';
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

export function About() {
    return(
        <section className="bg-[#EBF1F5] py-16"> 
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

                    <div className='absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-blue-400' data-aos="flip-left"> 
                        <Image
                            src={about2Img}
                            alt='Logo Altsneakers'
                            fill
                            quality={100}
                            priority
                        />
                    </div>

                </div>

                <div className='space-y-6 mt-10' data-aos="fade-up-left">

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
                        Produtos 1° linha Premium
                        
                    </li>
                    <li className='flex items-center gap-2'>
                        <Check className='text-blue-500'/>
                          Envios para todo o Brasil             
                    </li>
                    <li className='flex items-center gap-2'>
                        <Check className='text-blue-500'/>
                        Desde 2023                   
                    </li>
                    
                </ul>

                <div className='flex gap-2'>
                    <a 
                    href="https://wa.me/31997400212?text=Ola, vim pelo site e gostaria de mais informações!"
                    target='_blank'
                    className='bg-[#5095BF] text-white flex  w-fit gap-2 px-4 py-2 rounded-md' 
                    >
                        <WhatsappLogo className='w-5 h-5 text-white'/>
                        Contato via Whatsapp
                    </a>

                    <a 
                    href="https://www.instagram.com/altsneakers_/"
                    target='_blank'
                    className=' bg-[#e23a1c] text-white flex  w-fit gap-2 px-4 py-2 rounded-md' 
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