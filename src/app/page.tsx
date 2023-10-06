import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

import { config } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
config.autoAddCss = false;

export default function Home() {
  return (
    <div className='text-slate-700 text-center flex flex-col items-center gap-10'>
      < Image src={'/logo.png'} alt={''} width={400} height={400} className='pt-20'/>
      <div>
        <p className='font-semibold uppercase tracking-widest text-2xl md:text-4xl font-sans py-10 px-4'>Nosso site está em construção,
          <br />
          <span className='text-green-950 font-extrabold text-xl lowercase'>aguarde.</span>
        </p>
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <p className='tracking-wider'>Acesse agora o site do Grupo Sulfoquímica®.</p>
        <Link href={"https://www.sulfoquimica.com.br"} target='_blank'>
          <button className='bg-blue-950 text-white p-4 rounded-md flex gap-4 items-center font-bold uppercase hover:bg-opacity-80'> 
            Clique Aqui 
             <Image src={"/icone-sulfo.png"} width={30} height={30} alt={"Ícone do Grupo Sulfoquímica"}></Image>

          </button>          
        </Link>

      </div>      
      
      <footer className='bg-green-950 w-full h-96 flex items-center justify-center text-lg'>
        <ul className='flex flex-col gap-4 py-20 px-4'>
          <li className='hover:text-opacity-60 text-white'>
            <Link href={"mailto:vendas@sulfoquimica.com.br"}> vendas@sulfoquimica.com.br </Link>    
          </li>
          <li>
            <Link href={"tel:4232354470"} className='hover:text-opacity-60 text-white' target='_blank'> (42) 3235-4470 </Link>
            |
            <Link href={"http://wa.me/5542991312468"} className='hover:text-opacity-60 text-white' target='_blank'> (42) 99131-2468 </Link>
          </li>
          <li className='hover:text-opacity-60 text-white'>
            <Link href={'https://maps.app.goo.gl/pMmwREJJcpNFqpty9'} target='_blank'>Rua Barão de Ramalho, 404 - Uvaranas Ponta Grossa, PR</Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}
