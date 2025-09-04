import React from 'react'
import arrow from '../assets/images/main_images/arrow.png';
import hero_img from '../assets/images/main_images/team.png';

function Hero() {
  return (
    <section className='px-[20px] mt-[90px] w-[450px] md:w-[100%]'>
      <div className='flex flex-col md:flex md:flex-row'>
        <div className='flex flex-col md:w-[60%]'>
          <h1 className='text-[30pt]'>Marketing que não complica: <span className='text-accent font-bold'>resultados</span> reais para seu negócio crescer.</h1>
          <img 
            src={arrow}
            className='w-[195px] absolute mt-[240px] md:mt-[180px]'
          />

          <p className='mt-[20px] text-[20pt]'>
            Chega de fórmulas mágicas! A gente cria estratégias digitais que fazem sentido para a sua realidade, e que trazem clientes verdade.
          </p>
        </div>

        <div className='flex flex-col'>
          <img 
            src={hero_img} alt="equipe de marketing trabalhando e criando estratégias"
            className='mt-[20px] md:w-[500px]'
          />

          <button className='bg-main w-[40%] py-[15px] text-light font-bold rounded-[15px] shadow-sm shadow-accent mt-[20px] self-center md:w-[80%] md:mt-[30px]'>Começar</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
