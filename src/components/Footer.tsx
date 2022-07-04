import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className='w-full flex gap-6 md:gap-0 py-4 flex-col md:flex-row md:h-14  bg-[#0a0a0a] items-center justify-between px-20 border-t-2 border-gray-600'>
      <div className='flex gap-4 flex-col md:flex-row items-center'>
        <img src={logo} className="h-12"></img>
        <span className='text-sm text-center text-gray-400'>
          Portal da Engenharia Aeronáutica - Todos os direitos reservados
        </span>
      </div>
      <span className='text-sm text-gray-400 py-2 md:py-0'>
        Políticas de privacidade
      </span>
    </footer>
  )
}