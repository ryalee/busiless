import logo from './assets/images/logo.png';
import rocket from './assets/images/rocket.png';
import linkedin from './assets/images/social_medias/linkedIn.png';
import facebook from './assets/images/social_medias/facebook.png';
import instagram from './assets/images/social_medias/instagram.png';

import Hero from './sections/Hero';
import Services from './sections/Services';
import Steps from './sections/Steps';
import About from './sections/About';
import Feedbacks from './sections/Feedbacks';
import CTA from './sections/CTA';

function App() {
  return (
    <>
      <header className='flex justify-between px-[20px] py-[12px] md:py-[20px]'>
        <div className='flex items-center gap-[2px]'>
          <img 
            src={logo} alt="logo do site de agência de marketing" 
            className='w-[50px] h-[50px]'
          />
          <h1 className='text-main font-bold text-[22pt]'>BusiLess</h1>
        </div>

        <button className='flex bg-main text-light font-bold text-[12pt] items-center w-[137px] justify-center rounded-[15px] gap-[1px]'>
          Impulsionar <img src={rocket} className='w-[27px] h-[27px]' />
        </button>
      </header>

      <main className='flex flex-col gap-[140px] md:gap-[200px]'>
        <Hero/>
        <Services/>
        <Steps/>
        <About/>
        <Feedbacks/>
        <CTA/>
      </main>

      <footer className='bg-[#f5f5f5] flex flex-col mt-[140px]'>
        <section className='flex justify-around mt-[25px] md:justify-between md:px-[20px] md:flex-col'>
          <div className='flex items-center gap-[2px]'>
            <img 
              src={logo} alt="logo do site de agência de marketing" 
              className='w-[50px] h-[50px]'
            />
            <h1 className='text-main font-bold text-[22pt]'>BusiLess</h1>
          </div>

          <div className='flex gap-[5px] items-center md:mt-[10px]'>
            <img src={linkedin} alt="logo Linkedin" className='w-[30px] h-[30px]'/>
            <img src={facebook} alt="logo Facebook" className='w-[30px] h-[30px]'/>
            <img src={instagram} alt="logo Instagram" className='w-[30px] h-[30px]'/>
          </div>
        </section>

        <section className='flex flex-col mt-[30px] px-[20px] gap-[20px] md:flex-row md:self-center md:justify-around md:w-[100%] md:mt-[40px]'>
          <div>
            <h4 className='font-bold text-[18pt]'>Empresa</h4>
            <ul className='text-[12pt]'>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Nossa Equipe</li>
              <li>Trabalhe Conosco</li>
            </ul>
          </div>
          
          <div>
            <h4 className='font-bold text-[18pt]'>Contato</h4>
            <ul className='text-[12pt]'>
              <li>contato@busiless.com</li>
              <li>WhatsApp</li>
              <li>Endereço</li>
            </ul>
          </div>
          
          <div>
            <h4 className='font-bold text-[18pt]'>Legal</h4>
            <ul className='text-[12pt]'>
              <li>Política de Privacidade</li>
              <li>Termos</li>
            </ul>
          </div>
        </section>


        <div className='w-[100%] flex flex-col items-center bg-main text-light text-[10pt] justify-center py-[10px] mt-[60px] gap-2'>
          <p>Desenvolvido por <a className='font-bold' href="https://zunbee.com.br">ZunBee</a>.</p>
          <p className='font-semibold'>&copy; {new Date().getFullYear()} BusiLess. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App;