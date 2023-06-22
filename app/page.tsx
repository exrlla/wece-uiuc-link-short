'use client'
import Image from 'next/image'
import * as Yup from 'yup'
import Logo from '../public/wece-logo-white.png'
import { Formik } from 'formik'


export default function Home() {
  const validationSchema = Yup.object().shape({
    longUrl: Yup.string().required("Required"),
    suffix: Yup.string().required("Required")
  })
  return (
    <main className="flex min-h-screen flex-col items-center">
     <Image alt="wece logo" src={Logo} className="w-60 mt-10" />
      <Formik initialValues={{longUrl: "", suffix: ""}} validationSchema={validationSchema} onSubmit={() => {}}
    >
        {({
          values
        }) =>(
          <form className="mt-10 flex flex-col" >
            <label className='font-Rubik' htmlFor="longurl">Paste Long URL </label>
            <input id="longurl" name='longurl' spellCheck='false' type='url'></input>
          </form>
        )}
      </Formik>
      
    </main>
  )
}
