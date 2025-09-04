import React from 'react'
import growth from '../assets/images/main_images/business-growth.png';

function About() {
  return (
    <section className='flex flex-col items-center md:flex-row'>
      <div className='flex flex-col'>
        <h1 className='title self-center'>Nossa <span className='text-main font-bold'>agência</span></h1>
        <p className='text-[15pt] md:text-[20pt] text-accent mt-[20px] md:w-[80%] px-4 md:px-0 md:self-center text-justify'>Somos a BusiLess, uma agência que acredita que marketing não precisa ser um bicho de sete cabeças. Unimos estratégia, criatividade e tecnologia para ajudar você a lucrar mais sem perder tempo nem dinheiro.</p>

        <button className='bg-main w-[40%] py-[15px] text-light font-bold rounded-[15px] shadow-sm shadow-accent self-center absolute md:relative mt-[650px] md:mt-[30px]'>Saiba Mais</button>
      </div>

      <img 
        src={growth} alt="crescimento da marca através do marketing" 
        className='md:w-[500px] w-[400px] mt-[20px] px-[20px]'  
      />
    </section>
  )
}

export default About
