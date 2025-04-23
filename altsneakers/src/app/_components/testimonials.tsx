"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, CarTaxiFront, ClockArrowUpIcon, HouseIcon, Scissors, Clock} from "lucide-react"
import Image from "next/image"
import cliente1 from '../../../public/lucio.jpeg'
import cliente2 from '../../../public/luiza.jpeg'
import cliente3 from '../../../public/anaclara.jpeg'
import cliente4 from '../../../public/carol.jpeg'
import cliente5 from '../../../public/luana.jpeg'
import cliente6 from '../../../public/daiane.jpeg'
import cliente7 from '../../../public/luana.jpeg'
import cliente8 from '../../../public/lucio.jpeg'
import cliente9 from '../../../public/ezequiel.jpeg'
import cliente10 from '../../../public/jomello.jpeg'
import cliente11 from '../../../public/michele.jpeg'
import cliente12 from '../../../public/gabrielle.jpeg'

const testimonials = [
    {
        content: 
        "Mano, curti demais esse tênis. Super confortável, macio e encaixa super bem no pé. Além de bem bonito tbm 🤩. Super recomendo meu brother👏👏👏. Em breve comprarei outro hehe 😁",
        author: "Lucio",
        image: cliente1,
    },
    {
        content: 
        "Estou apaixonada pelo tênis😍 serviu certinho, qualidade excelente, super confortável. E claro que irei comprar mais haha. Amei os mimos. Muito obrigada! Desejo todo sucesso. ❤️👏👏",
        author: "Luiza",
        image: cliente2 
    },
    {
        content: 
        "Chegou super rápido e o produto é lindo! De ótima qualidade! Recomendo muito! Adorei a compra, mega satisfeita!",
        author: "Ana Clara",
        image: cliente3,
    },
    {
        content: 
        "Eu ameeei o tênis e comprarei mais vezes! 😍🤩🤩",
        author: "Carol",
        image: cliente4,
    },
    {
        content: 
        "Oii bom dia!! Eu ameeeei, ele é lindo dms.. mto obrigada pelo brinde e pelo capricho. 🥰💕",
        author: "Luana",
        image: cliente5,
    },
    {
        content: 
        "Esse tênis do Arthur ele amou, disse que não machuca e ficou mara! 😍😍🫶 Meu marido experimentou o dele também, serviu e ficou lindo!",
        author: "Daiane",
        image: cliente6,
    },
    {
        content: 
        "Encantada! 😍 Mais uma vez obrigado pelo capricho e atendimento!",
        author: "Luana",
        image: cliente7,
    },
    {
        content: 
        "Cara o tênis é sensacional. Macio, confortável, tem um acabamento perfeito. Coisa de qualidade, comprei e comparei outros com certeza. 👏👏👏👏😍😍",
        author: "Lucio",
        image: cliente8, 
    },
    {
        content: 
        "Que tênis top, serio!! Qualidade nota 10! Dificilmente encontro tênis com uma qualidade e valor igual ao de vocês. Entrega dentro do prazo e ótimo atendimento. Sucesso pra vocês!! 🚀",
        author: "Ezequiel",
        image: cliente9,
    },
    {
        content: 
        "Totalmente apaixonada pelo meu tênis!!!! LINDO DEMAIS! Muito obrigada pela atenção, será o primeiro de muitos com certeza!😍",
        author: "Jô Mello",
        image: cliente10,
    },
    {
        content: 
        "Chegou! Muito obrigada eu adorei. 🥰 Logo compro outro, ficou ótimo obrigada mesmo! ❤️",
        author: "Michelle",
        image: cliente11,
    },
    {
        content: 
        "Ficou justinho do jeito que eu gosto, muito lindooo! 🥰🥰",
        author: "Gabrielle",
        image: cliente12,
    },
]

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ /* Config carousel */
        loop: true,
    })

    /* Funções para voltar e passar slide no carrossel */

    function scrollPrev(){ 
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#EBF1F5] py-16">
            <div className="container mx-auto px-4" data-aos="fade-up"
     data-aos-duration="1000">
                
                <h2 className="text-4xl font-bold text-center mb-12">Feedbacks</h2>

                <div className="relative max-w-4xl mx-auto">
              
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">   
                                    <article className="bg-[#5095BF] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col"> 

                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                src={item.image}
                                                alt={item.author}
                                                fill
                                                sizes="96px"
                                                className="object-cover rounded-full"
                                                />
                                            </div>

                                            <p className="text-gray-100">{item.content}</p>

                                            <p className="font-bold">{item.author}</p> 

                                        </div>

                                     </article>
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