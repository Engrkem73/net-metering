import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='md:pl-40 md:pr-40 pl-3 pr-3'>
        <div className='flex flex-row justify-between items-center border-b-8 border-black pb-4'>
            <div>
                <p><small>FORM 1</small></p>
                <p><small>Application Form</small></p>
                <br/>
                <h2>Net Metering Application Form</h2>
                <h1><strong>Customer Information Sheet</strong></h1>
            </div>
            <div>
                <Image src='/logo.png'
                        alt='Noceco Logo'
                        width={120}
                        height={120}/>
            </div>
        </div>
        <div className='pt-9'>
            <p className='pb-5'>ACCOUNT #: <u>00-000-00000</u></p>
            <div className='flex flex-row items-start pb-5'>
                <div className='w-56'>
                    ACCOUNT NAME:
                </div>
                <div className='flex flex-col w-full'>
                    <div className='w-full flex flex-row border-b-2 border-black'>
                        <div className='w-full text-center'>User</div>
                        <div className='w-full text-center'>Test</div>
                        <div className='w-full text-center'>A</div>
                    </div>
                    <div className='italic w-full flex flex-row'>
                        <div className='w-full text-center'>(Last name)</div>
                        <div className='w-full text-center'>(First name)</div>
                        <div className='w-full text-center'>(Middle name)</div>
                    </div>   
                </div>
            </div>
            <div className='flex flex-row items-start justify-between'>
                <div className='w-56'>
                    ADDRESS:
                </div>
                <div className='flex flex-col w-full pb-5'>
                    <div className='w-full flex flex-row border-b-2 border-black'>
                        <div className='w-[30%] text-center'>N/A</div>
                        <div className='w-[30%] text-center'>So. Nowhere</div>
                        <div className='w-[30%] text-center'>Brgy. There</div>
                    </div>
                    <div className='w-full flex flex-row italic'>
                        <div className='w-[30%] text-center'>(House #)</div>
                        <div className='w-[30%] text-center'>(Street)</div>
                        <div className='w-[30%] text-center'>(Brgy.)</div>
                    </div> 
                </div>
            </div>
            <div className='pb-5'>
                <div className='flex flex-row items-start justify-between'>
                    <div className='w-56'>
                    </div>
                    <div className='w-full flex flex-row border-b-2 border-black'>
                        <div className='w-[30%] text-center'>Somewhere City</div>
                        <div className='w-[30%] text-center'>Can&apos;t be found</div>
                        <div className='w-[30%] text-center'></div>
                    </div>
                </div>
                <div className='flex flex-row items-start justify-between'>
                <div className='w-56'></div>
                    <div className='w-full flex flex-row italic'>
                        <div className='w-[30%] text-center'>(City/Municipality)</div>
                        <div className='w-[30%] text-center'>(Province)</div>
                        <div className='w-[30%] text-center'></div>
                    </div>   
                </div>
            </div>
            <div className='flex flex-row items-start justify-between w-3/4 pb-5'>
            <div className='w-56'>Type of Customer:</div>
                <div className='italic'>Residential ( )</div>
                <div className='italic'>Commercial ( )</div>
                <div className='italic'>Public Building ( )</div>
                <div className='italic'>Industrial ( )</div>
            </div>
            <div className='flex flex-row items-start justify-between w-full'>
                <div className='w-56'>
                        Type of connection:
                </div>
                <div className='flex flex-row items-start gap-7 justify-start w-[80%]'>
                    <div>Underbuild ( )</div>
                    <div>Private ( )</div>
                </div>
            </div>
            <div>
                <div>
                    If Private what is the size of transformer in kVA:
                </div>
            </div>
        </div>
    </main>
  )
}

export default page