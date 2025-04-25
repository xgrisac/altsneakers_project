import adidas from "../../../public/logoadidas.png"
import nike from "../../../public/logonike.png"
import converse from "../../../public/logoconverse.png"
import oakley from "../../../public/logooakley.png"
import vans from "../../../public/logovans.png"
import maisopcoes from "../../../public/maisopcoes.png"
import Image from "next/image"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr"

const brands = [
    { name: "Nike", logo: nike },
    { name: "Adidas", logo: adidas },
    { name: "Converse", logo: converse },
    { name: "Oakley", logo: oakley },
    { name: "Vans", logo: vans },
    { name: "Mais Opções", logo: maisopcoes },
]

export function Footer() {
    return (
        <section className="bg-[#76bde6] py-16 text-white">  
            <div className="container mx-auto px-4">

                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>
                

                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                            {brands.map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                    <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{ /* Faz com que a imagem diminua de tamanho sem perder a qualidade ao diminuir o tamanho da tela */
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain"
                                    />
                                </div>

                            ))}
                        </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">AltSneakers</h3>
                        <p className=" mb-4">Seja a tendência, não apenas siga!</p>
                        <a 
                        href="https://wa.me/31997400212?text=Ola, vim pelo site e gostaria de mais informações!"
                        target='_blank'
                        className="bg-green-500 px-4 py-2 rounded-md" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
                        >
                            Contato via Whatsapp
                        </a>

                    </div>
                        
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Informações</h3>
                        <p>Loja virtual especializada em calçados 1° linha Premium.</p>
                        <p>Entregamos no conforto da sua casa em qualquer lugar do Brasil.</p>
                        <p>Produtos vendidos sob encomenda.</p>
                    </div>

                    <div>
                        <p>© Isac Ribeiro</p>
                        <p>Todos os direitos reservados</p>
                    </div>
                    
                </footer>

            </div>
        </section>
    )
}