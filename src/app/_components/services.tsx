'use client'

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"

    const services = [
        {
            title: "Banho & Tosa",
            description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
            duration: "1h",
            price: "$50",
            icon: <Scissors />,
            linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
        },
        {
            title: "Consulta Veterinária",
            description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
            duration: "1h",
            price: "$45",
            icon: <Syringe />,
            linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
        },
        {
            title: "Táxi Pet",
            description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
            duration: "2h",
            price: "$80",
            icon: <CarTaxiFront />,
            linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
        },
        {
            title: "Hotel para pets",
            description: "Serviço de hospedagem para todos o tipos de pets. Ideal para quando os tutores que presicam se ausentar mas nao abrem mao dos cuidados com seus pets.",
            duration: "minimo 1 dia",
            price: "$150",
            icon: <Hotel />,
            linkText: 'Olá, vi no site sobre Hotel Pet e gostaria de mais informações.'
        }
    ]


export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
         loop: false,
         align: "start",
         slidesToScroll: 1,
         breakpoints: {
            "(min-width: 768px)" : {slidesToScroll: 3},
        }     
        
        })

        function scrolPrev(){
            emblaApi?.scrollPrev()
        }

        function scrolNext(){
            emblaApi?.scrollNext()
        }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <div>
                    <h2 className="font-4xl font-bold mb-12">Serviços</h2>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex " >
                            {services.map((item, index) =>(
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.333333%] px-3">
                                    <article className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 items-start justify-between">
                                            
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="text-1xl font-bold my-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-400 select-none">{item.description}</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                                            <div className="flex items-center gap-2 text-sm">
                                                < Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>
                                                <a 
                                                href=""
                                                className="flex items-center justify-center gap-2 py-1 px-4  hover:bg-red-500 rounded-md duration-300"
                                                >
                                                    < WhatsappLogoIcon className="w-5 h-5" /> 
                                                    Entrar em contato
                                                </a>
                                        </div>
                                    </article>
                                </div>
                            ) )}
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