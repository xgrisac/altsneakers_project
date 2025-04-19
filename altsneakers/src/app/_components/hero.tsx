import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import sneakerImg from '../../../public/bg-hero.png'
import Image from 'next/image'

export function Hero() {
    return ( // bg chama a cor utilizando Tailwind // Relativo OverflorHidden tira a rolagem lateral do site
        <section className="bg-[#E84C30] text-white relative overflow-hidden"> 

            <div>
                <Image
                src={sneakerImg}
                alt="Foto tenis 1"
                fill
                sizes="100vw"
                priority
                className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-35 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>

            <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                <div className='space-y-6'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">A alternatica de tênis perfeita pra você!
                    </h1>
                    <p className=" lg:text-lg ">
                    Oferecemos os melhores <b>sneakers</b> para combinar conforto e estilo no seu dia-a-dia.
                    </p>

                    <div>
                        <a 
                        href="#link"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                        <WhatsappLogo className='w-5 h-5'/>
                            Contato via Whatsapp
                        </a>
                    </div>

                    <div className="mt-8"> 
                        <p className="text-sm mb-4"> 
                            <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra
                        </p>
                    </div>

                </div>

                <div className='hidden md:block h-full relative'>
                    <Image
                        src={sneakerImg}
                        alt='Foto tenis 1'
                        className='object-contain'
                        fill
                        sizes="(max-width: 768px) 0vw, 50vw" 
                        quality={100}
                        priority
                    />
                </div>

            </article>

            </div>
            
        </section>
    )
} 