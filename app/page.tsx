import Image from 'next/image'
import Logo from '../public/wece-logo-white.png'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Image alt="wece logo" src={Logo} />
      
    </main>
  )
}
