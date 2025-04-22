"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, CarTaxiFront, ClockArrowUpIcon, HouseIcon, Scissors, Clock} from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react'
/* import chinelonike from '../../../public/chinelonike.jpeg' 
import Airforcef1 from '../../../public/Airforcef1.jpeg' */
import Image from 'next/image'

const services = [ /* Conteudo carousel */
    {
        title: "Nike Air Force F1",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/Airforcef1.jpeg",
    },
    {
        title: "Adidas Campus Couro",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/campus.jpeg",
    },
    {
        title: "Chinelo Nike Colab LV",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/chinelonike.jpeg",
    },
    {
        title: "Adidas Samba XLG",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        linkText: 'Ola, vi este produto, gostaria de mais informações',
        image: "/samba.jpeg",
    },
    {
        title: "Nike Dunk White/Gray",
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

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                
                <h2 className="text-4xl font-bold mb-12">Nossos Produtos</h2>

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
                                        

                                        <div className=" bg-[#51b1e9] rounded-md text-white pt-4 py-3 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm select-none px-2">
                                                <Clock className="w-4 h-5"/>
                                                <span>{item.duration}</span> 
                                            </div>

                                            <a href="#LinkWpp"
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
              
                </div>    

            </div>
        </section>
    )
}