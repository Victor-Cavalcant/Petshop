'use client'

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight} from "lucide-react"
import Image from "next/image"
import tutor1 from "../../../public/woman.jpg"
import tutor2 from "../../../public/man.jpg"
import tutor3 from "../../../public/woman3.jpg"
import tutor4 from "../../../public/man3.jpg"
import tutor5 from "../../../public/woman2.jpg"
import tutor6 from "../../../public/man4.jpg"

const testimonials = [
    {
        content:
            "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Mariana Souza",
        role: "Tutora da Luna (Golden Retriever)",
        image: tutor1,
    },
    {
        content:
            "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
        author: "Rafael",
        role: "Tutor do Thor (Bulldog Francês)",
        image: tutor2,
    },
    {
        content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
        author: "Camila Fernandes",
        role: "Tutora da Mel e do Max",
        image: tutor3,
    },
    {
        content:
            "Levo meu coelho, o Snow, para consultas regulares e sempre sou muito bem atendido. A equipe é super especializada, cuidadosa e atenciosa com animais exóticos. Encontrar um lugar assim foi um alívio!",
        author: "Lucas Mendes",
        role: "Tutor do Snow (Coelho Mini Lop)",
        image: tutor4,
    },
    {
        content:
            "Minha cachorra Bella tem muito medo de pessoas estranhas, mas no banho e tosa daqui ela fica super tranquila! As profissionais sabem lidar com pets mais sensíveis e têm um carinho enorme por eles.",
        author: "Juliana Costa",
        role: "Tutora da Bella (Shih Tzu)",
        image: tutor5,
    },
    {
        content:
            "Precisei deixar meu cãozinho Max no hotel por alguns dias e fiquei impressionado com o cuidado! Recebi vídeos diários, ele voltou feliz e nem parecia que tinha passado dias longe de casa.",
        author: "Pedro Albuquerque",
        role: "Tutor do Max (Beagle)",
        image: tutor6,
    }
];

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })

    function scrolPrev() {
        emblaApi?.scrollPrev()
    }

    function scrolNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-yellow-400 py-16">
            <div className="container mx-auto px-4">

                <div>
                    <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex " >
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes="96px"
                                                    quality={100}
                                                    className="object-cover"
                                                    priority
                                                />
                                            </div>
                                            <p className="text-gray-200">{item.content}</p>
                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="text-gray-400">{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer h-10 w-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                        < ChevronLeft className="w-6 h-6 text-gray-600 " onClick={scrolPrev} />
                    </button>
                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer h-10 w-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                        < ChevronRight className="w-6 h-6 text-gray-600 " onClick={scrolNext} />
                    </button>
                </div>

            </div>

        </section>
    )
}