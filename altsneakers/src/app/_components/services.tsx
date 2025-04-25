"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, CarTaxiFront, ClockArrowUpIcon, HouseIcon, Scissors, Clock} from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react'
import Image from 'next/image'

const services = [ /* Conteudo carousel */
    {
        title: "Nike Air Force 1",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/airforce1.jpeg",
    },
    {
        title: "Adidas Campus Couro",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/campus.jpeg",
    },
    {
        title: "Puma 180",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/puma180.jpeg",
    },
    {
        title: "New Balance 9060",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/newbalance9060.jpeg",
    },
    {
        title: "Nike Dunk",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/dunkcinza.jpeg",
    },
    {
        title: "Vans Knu Old Skool",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/vansknu.jpeg",
    },
    {
        title: "Louis Vuitton Skate",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/tenislouisvuitton.jpeg",
    },
    {
        title: "Air Jordan 1 Travis Scott",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/airjodan1ts.jpeg",
    }

]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ /* Config carousel */
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)" : {slidesToScroll: 3}
        }
    })

    /* Funções para voltar e passar slide no carrossel */

    function scrollPrev(){ 
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4" data-aos="fade-up"
     data-aos-duration="1000">
                
                <h2 className="text-4xl font-bold mb-12">Destaques</h2>

                <div className="relative">
              
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">   
                                    <div className=" text-black space-y-4 h-full flex flex-col "> 

                                    <Image 
                                        src={item.image} 
                                        alt="Foto tenis anuncio 1"
                                        width={500}
                                        height={500}
                                        className="rounded-md object-cover w-[500px] h-[700px]"
                                        quality={100}
                                        priority/>

                                        <h3 className="font-normal text-center text-xl my-1">{item.title}</h3><br/>
                                        

                                        <div className=" bg-[#94bbd4] rounded-md text-white pt-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm select-none px-2">
                                                <Clock className="w-4 h-5"/>
                                                <span>{item.duration}</span> 
                                            </div>

                                            <a 
                                            href="https://wa.me/31997400212?text=Ola, vim pelo site e gostaria de mais informações!"
                                            target='_blank'
                                            className="flex items-center justify-center text-white gap-2 text-sm hover:bg-[#51b1e9] px-4 py-2 rounded-md duration-300"
                                            >
                                                <WhatsappLogo className="w-5 h-5"/>
                                                Adquirir este produto
                                                
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> 

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-1 -translate-y-5 -translate-x-5 top-1/2 z-10" onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 text-blue-500 "/>
                    </button>

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-8 -translate-y-5 -translate-x-5 top-1/2 z-10" onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 text-blue-500 "/>
                    </button>
                    
                </div>    
            </div>
        </section>
    )
}