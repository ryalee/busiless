import React from 'react'
import steps_img from '../assets/images/main_images/comunication.png';

function Steps() {
  return (
    <section className='bg-[#f5f5f5] py-[75px]'>
      <div className='flex flex-col text-center'>
        <h1 className='title'><span className='text-main font-bold'>Soluções</span> simples</h1>
        <p className='subtitle'>Sabemos que não existem dois negócios iguais. É por isso que dedicamos tempo para entender o que faz o seu ser <span className='text-main font-bold'>único.</span></p>
      </div>

      <div className='flex mt-[40px] md:gap-8 md:px-[20px] md:justify-center'>
        <img 
          src={steps_img} 
          className='md:w-[480px] md:h-[500px] hidden md:flex'
        />

        <div className='flex flex-col gap-[20px] mt-[40px]'>
          <article className='flex items-center gap-1'>
            <div className='w-[80px] h-[80px] bg-main text-[#f5f5f5] font-bold text-[40pt] text-center rounded-full'>
              1
            </div>
            <div>
              <h4 className='text-[14pt] font-semibold'>Contate-nos</h4>
              <p className='text-accent text-[10pt]'>Conversamos sobre suas necessidades.</p>
            </div>
          </article>

          <div className='h-[40px] w-[4px] absolute ml-[38px] mt-[160px] bg-main'></div>

          <article className='flex items-center gap-1'>
            <div className='w-[80px] h-[80px] bg-main text-[#f5f5f5] font-bold text-[40pt] text-center rounded-full'>
              2
            </div>
            <div>
              <h4 className='text-[14pt] font-semibold'>Análise</h4>
              <p className='text-accent text-[10pt] w-[90%]'>Determinamos um caminho para resolver seu problema.</p>
            </div>
          </article>

          <div className='h-[40px] w-[4px] absolute ml-[38px] mt-[70px] bg-main'></div>

          <article className='flex items-center gap-1'>
            <div className='w-[80px] h-[80px] bg-main text-[#f5f5f5] font-bold text-[40pt] text-center rounded-full'>
              3
            </div>
            <div>
              <h4 className='text-[14pt] font-semibold'>Conclusão</h4>
              <p className='text-accent text-[10pt] w-[90%]'>Encontramos aquilo que você (e seu negócio) precisa.</p>
            </div>
          </article>

          <div className='h-[40px] w-[4px] absolute ml-[38px] mt-[270px] bg-main'></div>

          <article className='flex items-center gap-1'>
            <div className='w-[80px] h-[80px] bg-main text-[#f5f5f5] font-bold text-[40pt] text-center rounded-full'>
              4
            </div>
            <div>
              <h4 className='text-[14pt] font-semibold'>Sucesso</h4>
              <p className='text-accent text-[10pt] w-[90%]'>Seguiremos e veremos seu negócio decolar!</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Steps
