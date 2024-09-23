import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "../components/Phone";
import { Reviews } from "../components/Reviews";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pt-24 lg:pb-52 xl:pt-32 xl:gap-x-8">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Sua imagem em uma capinha de celular{" "}
                <span className="bg-black px-2 text-white rounded">
                  Customizada
                </span>
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Eternize seus melhores momentos com sua
                <span className="font-semibold"> exclusiva</span> capinha de
                celular. Nossa empresa permite a proteção de memórias, não
                apenas do seu aparelho!
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Alta qualidade, material resistente
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />5 anos
                    de garantia
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Modelos de iPhones modernos
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block size-10 rounded-full ring ring-slate-100"
                    src="/users/user-1.png"
                    alt="imagem de usuário"
                  />
                  <img
                    className="inline-block size-10 rounded-full ring ring-slate-100"
                    src="/users/user-2.png"
                    alt="imagem de usuário"
                  />
                  <img
                    className="inline-block size-10 rounded-full ring ring-slate-100"
                    src="/users/user-3.png"
                    alt="imagem de usuário"
                  />
                  <img
                    className="inline-block size-10 rounded-full ring ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="imagem de usuário"
                  />
                  <img
                    className="object-cover inline-block size-10 rounded-full ring ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="imagem de usuário"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5 MB-2">
                    {Array.from({ length: 5 }).map((_, i) => {
                      return (
                        <Star className="size-5 text-green-600 fill-green-600" />
                      );
                    })}
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> clientes
                    satisfeitos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:col-span-1 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                src="/your-image.png"
              />
              <img
                className="absolute w-20 -left-6 -bottom-6 select-none"
                src="/line.png"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              O que nossos{" "}
              <span className="relative px-2">
                clientes{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-black" />
              </span>{" "}
              dizem!
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  return (
                    <Star className="size-5 text-green-600 fill-green-600" />
                  );
                })}
              </div>
              <div className="text-lg leading-8">
                <p className="">
                  "A capinha parece resistente e até recebi um elogio pelo
                  design. Estou com a mesma há dois meses e meio e{" "}
                  <span className="p-0.5 text-white bg-black rounded">
                    a imagem é super nítida ainda
                  </span>{" "}
                  produto de extrema qualidade, eu amei e recomendo a todos!"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full size-12 object-cover"
                  src="/users/user-1.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center to-zinc-500">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p>Compra verificada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  return (
                    <Star className="size-5 text-green-600 fill-green-600" />
                  );
                })}
              </div>
              <div className="text-lg leading-8">
                <p className="">
                  "Normalmente mantenho meu telefone junto com as chaves no
                  bolso e isso causou alguns arranhões bem pesados ​​em todas as
                  minhas últimas capinhas de telefone. Este está sendo diferente
                  de tudo, parece novo depois de cerca de{" "}
                  <span className="p-0.5 text-white bg-black rounded">
                    1 ano!
                  </span>{" "}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full size-12 object-cover"
                  src="/users/user-2.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Joana</p>
                  <div className="flex gap-1.5 items-center to-zinc-500">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p>Compra verificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* Slider das capinhas */}
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Insira sua foto e tenha{" "}
                <span className="relative px-2">uma capinha única </span> no
                mundo!
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse_phone.jpg"
                  alt=""
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Phone className="w-60" imgSrc="/horse_phone.jpg"/>
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Material de silicone de alta qualidade
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Revestimento resistente a arranhões e impressões digitais
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Compatível com carregamento sem fio
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              5 anos de garantia com impressão
            </li>

            <div className='flex justify-center'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8',
                })}
                href='/configure/upload'>
                Create your case now <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
