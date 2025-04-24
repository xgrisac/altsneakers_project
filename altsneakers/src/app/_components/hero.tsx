import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import sneakerImg from '../../../public/tenisheaderfinal.png'
import sneakerImg2 from '../../../public/tenisheadermenor.png'
import Image from 'next/image'

export function Hero() {
    return ( // bg chama a cor utilizando Tailwind // Relativo OverflorHidden tira a rolagem lateral do site
        <section className="bg-[#76bde6] text-white relative overflow-hidden"> 

            <div>
                <Image
                src={sneakerImg}
                alt="Foto tenis 1"
                fill
                sizes="100vw"
                priority
                quality={100}
                className="object-cover opacity-60"/>
                
            <div className='absolute inset-0 bg-black opacity-35 md:hidden'></div>
                
            </div> 

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>

            <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                <div className='space-y-6'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">A alternatica de tênis perfeita pra você!
                    </h1>
                    <p className=" lg:text-lg" data-aos="fade-down">
                    Oferecemos os melhores <b>sneakers</b> para combinar conforto e estilo no seu dia-a-dia.
                    </p>

                    <div>
                        <a 
                        href="https://wa.me/31997400212?text=Ola, vim pelo site e gostaria de mais informações!"
                        target='_blank'
                        className="bg-green-600 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                        <WhatsappLogo className='w-5 h-5'/>
                            Contato via Whatsapp
                        </a>
                    </div>

                    <div className="mt-8" data-aos="fade-right"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine"> 
                        <p className="mb-4"> 
                            <b className=" text-white px-1 py-1 rounded-md"><u>5%</u></b>de desconto na sua primeira compra! ⚠️
                        </p>
                    </div>

                </div>

                <div className='hidden md:block h-full absolute right-10 bottom-[-20px]'>
                <Image
                src={sneakerImg2}
                alt='Foto tenis 2'
                width={550}
                height={550}
                className='object-contain'
                quality={100}
                priority/>
                 </div>

            </article>

            </div>
            
        </section>
    )
} 