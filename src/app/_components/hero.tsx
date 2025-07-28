import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import heroDog from "../../../public/packOfDogs.png"
import Image from "next/image"
import catImage from "../../../public/cat.png"


export function Hero() {
  return (
    <section className="bg-red-400 text-white relative overflow-hidden">

      <div>
        <Image src={heroDog}
          alt="hero"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black/40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative  ">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-6 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">Seu pet merece cuidado, carinho e atenção especial</h1>
            <p className="lg:text-lg">Oferecemos os melhores serviços para garantir o bem-estar e a felicidade de seu amigo de quatro patas.</p>


            <a href=""
              className="bg-green-500 px-5 py-2 rounded-md hover:bg-green-600 transition-all font-semibold flex items-center justify-center w-fit gap-2"
            >
              < WhatsappLogoIcon className="w-5 h-5" />
              contato via whatsapp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na sua primeira compra
              </p>
              <div className="flex mt-4">
                <div className="w-14 hidden lg:block">
                  <Image src={catImage}
                    alt="cat"
                    quality={100}
                    className="object-fill" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image src={heroDog}
              alt="A jack russell terrier dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}

            />
          </div>

        </article>
      </div>
    </section>
  );
} 