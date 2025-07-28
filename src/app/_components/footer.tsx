
import royal from "../../../public/royalCanin.png"
import purina from "../../../public/purina.png"
import hills from "../../../public/hills.png"
import whiskas from "../../../public/whiskas.jpeg"
import nd from "../../../public/ned.jpeg"
import premier from "../../../public/premier.png"
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";



import Image from "next/image"


const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Purina", logo: purina },
    { name: "Hills", logo: hills },
    { name: "Whiskas", logo: whiskas },
    { name: "N&D", logo: nd },
    { name: "Premier", logo: premier },
]

export function Footer() {
    return (
        <section className="bg-red-500 text-white">
            <div className="container mx-auto px-4">

                <div className="border-b border-white/20 pb-9">
                    <h4 className="text-4xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">

                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain" />
                            </div>
                        ))}
                    </div>

                </div>
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 mt-5">
                    <div>
                        <h3>PetLovers petshop</h3>
                        <p>Cuidando do seu melhor amigo</p>
                        <a href=""
                            className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition-all font-semibold flex items-center justify-center w-fit gap-2 mt-4"
                        >
                            Contato via whatsapp
                        </a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>Email : 2rVdE@example.com</p>
                        <p>Telefone: (11) 99999-9999</p>
                        <p>Rua x x, Bairro y, Cidade z - SP</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes socias</h3>
                        <div className="flex  gap-4">
                            <a href="#"
                                target="_blank">
                                <InstagramLogoIcon
                                    className="h-8 w-8" />
                            </a>

                            <a href="#"
                                target="_blank">
                                <FacebookLogoIcon
                                    className="h-8 w-8" />
                            </a>

                            <a href="#"
                                target="_blank">
                                <YoutubeLogoIcon
                                    className="h-8 w-8" />
                            </a>

                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}