"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, CarTaxiFront, ClockArrowUpIcon, HouseIcon, Scissors, Clock} from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [ /* Conteudo carousel */
    {
        title: "Titulo 1",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit dolores nihil aut. Consequuntur voluptates minima saepe nostrum soluta, deserunt quae, odit impedit totam eveniet, fuga labore accusantium eius ipsum?",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        icon: <Scissors />,
        linkText: 'Ola, vi este produto, gostaria de mais informações',
    },
    {
        title: "Chinelo Nike Colab Louis Vuitton",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit dolores nihil aut. Consequuntur voluptates minima saepe nostrum soluta, deserunt quae, odit impedit totam eveniet, fuga labore accusantium eius ipsum?",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        icon: <HouseIcon />,
        linkText: 'Ola, vi este produto, gostaria de mais informações',
    },
    {
        title: "Titulo 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit dolores nihil aut. Consequuntur voluptates minima saepe nostrum soluta, deserunt quae, odit impedit totam eveniet, fuga labore accusantium eius ipsum?",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        icon: <CarTaxiFront />,
        linkText: 'Ola, vi este produto, gostaria de mais informações',
    },
    {
        title: "Titulo 4",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit dolores nihil aut. Consequuntur voluptates minima saepe nostrum soluta, deserunt quae, odit impedit totam eveniet, fuga labore accusantium eius ipsum?",
        duration: "Entrega Full⚡",
        price: "R$199,90",
        icon: <ClockArrowUpIcon />,
        linkText: 'Ola, vi este produto, gostaria de mais informações',
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
                                    <article className="bg-[#021a3f] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col"> 
                                        <div className="flex-1 flex items-start justify-between">

                                          <div className="flex gap-3">  
                                            <span className="text-3xl">{item.icon}</span>
                                            <div>
                                                <h3 className="font-bold text-xl my-1">{item.title}</h3>  
                                                <p className="text-gray-400 text-sm select-none">
                                                {item.description}
                                               </p>
                                            </div>
                                          </div> 

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm select-none">
                                                <Clock className="w-4 h-5"/>
                                                <span>{item.duration}</span> 
                                            </div>

                                            <a href="#LinkWpp"
                                            className="flex items-center justify-center gap-2 text-sm hover:bg-blue-500 px-4 py-1 rounded-md duration-300"
                                            >
                                                <WhatsappLogo className="w-5 h-5"/>
                                                Adquirir este produto
                                                
                                            </a>

                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
              
                </div>    

            </div>
        </section>
    )
}