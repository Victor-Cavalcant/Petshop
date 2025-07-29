import Image from "next/image"
import about1Img from "../../../public/catNDog.avif"
import about2Img from "../../../public/pom.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-orange-50 py-16 px-4">
           <div className="container mx-auto px-4">

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative">

                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden" data-aos="fade-right">
                        <Image
                            src={about1Img}
                            alt="about"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                        />
                    </div>

                    <div className="absolute w-40 h-40 right-6 -bottom-8 border-4 overflow-hidden border-white rounded-lg " data-aos="fade-left">
                        <Image
                            src={about2Img}
                            alt="about"
                            fill
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="space-y-6 mt-10"data-aos="fade-up">
                    <h2 className="text-4xl font-bold">SOBRE</h2>

                    <p>
                        Na Pet Lovers, acreditamos que pets são parte da família. Por isso, oferecemos produtos e serviços com carinho, qualidade e respeito.
                        Somos apaixonados por animais e buscamos sempre o bem-estar de cães, gatos e seus tutores. Aqui, seu pet encontra tudo o que precisa — e muito amor envolvido. ❤️
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            < Check className=" text-red-500" />
                            Aberto desde 2023
                        </li>

                        <li className="flex items-center gap-2">
                            < Check className=" text-red-500" />
                            Equipe multidisciplinar de veterinários especializados
                        </li>

                        <li className="flex items-center gap-2">
                            < Check className=" text-red-500" />
                            Seu pet é nossa prioridade!
                        </li>

                        <div className="flex gap-2">

                            <a 
                            target="_blank"
                            className="bg-red-500 text-white flex items-center justify-center w-fit gap-2 px-5 py-2 rounded-md" href={'https://wa.me/5551999999999?text= Olá, gostaria de agendar um serviço com PetLovers!'}>


                                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                                Contato via Whatapp
                            </a>

                            <a className=" text-black flex items-center justify-center w-fit gap-2 px-5 py-2 rounded-md" href="">


                                <MapPin className="w-5 h-5 text-black" />
                                Nosso enderenço
                            </a>

                        </div>

                    </ul>

                </div>


            </div>
           </div>
        </section>
    )
}