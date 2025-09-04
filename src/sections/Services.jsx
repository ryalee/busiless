import React from 'react'

import speaker from '../assets/images/services_icons/speaker.png';
import like from '../assets/images/services_icons/like.png';
import goal from '../assets/images/services_icons/goal.png';
import web from '../assets/images/services_icons/web.png';

function Services() {
  return (
    <section>
      <div className='flex flex-col text-center'>
        <h1 className='title'>Nós fornecemos os melhores <span className='font-bold text-main'>serviços.</span></h1>
        <p className='subtitle'>Do básico ao avançado, a gente cuida do que importa para sua presença digital.</p>
      </div>

      <div className='flex flex-col items-center mt-[40px] gap-[40px] md:flex-row md:justify-center'>
        <article className='service_card'>
          <div className='bg-dark rounded-tl-[20px] rounded-br-[20px] p-[10px] w-[120px] h-[120px] items-center'>
            <img src={speaker} alt="icone anuncios estratégicos para captação e conversão de leads" />
          </div>

          <div className='px-[10px]'>
            <h2 className='text-[22pt] mt-[10px] font-bold'>Gestão de Tráfego</h2>
            <p className='text-[14pt]'>Anúncios inteligentes que trazem clientes prontos para comprar.</p>
          </div>
        </article>

        <article className='service_card'>
          <div className='bg-dark rounded-tl-[20px] rounded-br-[20px] p-[10px] w-[120px] h-[120px] items-center'>
            <img src={like} alt="icone anuncios estratégicos para captação e conversão de leads" />
          </div>

          <div className='px-[10px]'>
            <h2 className='text-[22pt] mt-[10px] font-bold'>Social Media</h2>
            <p className='text-[14pt]'>Conteúdo estratégico que gera engajamento (e não só curtidas).</p>
          </div>
        </article>

        <article className='service_card'>
          <div className='bg-dark rounded-tl-[20px] rounded-br-[20px] p-[10px] w-[120px] h-[120px] items-center'>
            <img src={goal} alt="icone anuncios estratégicos para captação e conversão de leads" />
          </div>

          <div className='px-[10px]'>
            <h2 className='text-[22pt] mt-[10px] font-bold'>Consultoria de Marketing</h2>
            <p className='text-[14pt]'>Plano de ação sob medida para sua empresa.</p>
          </div>
        </article>

        <article className='service_card'>
          <div className='bg-dark rounded-tl-[20px] rounded-br-[20px] p-[10px] w-[120px] h-[120px] items-center'>
            <img src={web} alt="icone anuncios estratégicos para captação e conversão de leads" />
          </div>

          <div className='px-[10px]'>
            <h2 className='text-[22pt] mt-[10px] font-bold'>Landing Pages & Sites</h2>
            <p className='text-[14pt]'>Páginas rápidas, bonitas e que convertem.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
