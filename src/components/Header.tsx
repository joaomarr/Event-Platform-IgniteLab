import logo from '../assets/images/logo.png'
import { SideBarContext } from "../Contexts/sideBarContext";

export function Header() {

    return (
        <SideBarContext.Consumer>
            {({isSideBarOpen, setSideBarOpen}) => (
                <header className='w-full py-5 flex items-center lg:justify-center justify-between lg:px-0 px-4 bg-gray-700 border-b border-gray-600'>
                    <img src={logo} className="h-20"></img>
                    <div className='flex items-center gap-2 lg:hidden'>
                        Aulas
                        <button className='transition-all' onClick={() => setSideBarOpen(!isSideBarOpen)}>
                        {isSideBarOpen ? (
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8L23.5563 23.5563" stroke="#81D8F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 24L23.5563 8.44365" stroke="#81D8F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 16H27" stroke="#81D8F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 8H27" stroke="#81D8F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 24H27" stroke="#81D8F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                        </button>
                    </div >
                </header >
            )}
        </SideBarContext.Consumer>
    )
}