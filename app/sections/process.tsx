import Container from '@/components/Container'
import React from 'react'

export default function Process() {
  return (
    <Container className='flex flex-col items-center gap-28' bgClassName='bg-secondary'>
        <div className='flex flex-col gap-2 items-center'>
    <span className='block sub-title'>Our Process</span>
    <span className='block title'>How Growv Flows</span>
        </div>
        <div className='md:grid md:grid-cols-3 flex flex-col gap-8 '>
            
        {processes.map((process, idx) => (
            <div className='flex gap-6 items-start' key={process.name}>
                <div className='px-5 py-3 flex justify-center items-center text-center rounded-xl text-xl font-semibold bg-primary text-white'>{idx + 1}</div>
                <div className='space-y-2  p-4 border border-neutral-200 rounded-xl'>
                    <span className='block text-3xl font-bold text-primary'>{process.name}</span>
                    <p className='text-xl text-dimmed'>{process.description}</p>
                </div>
            </div>
        ))}
        </div>
    </Container>
  )
}

const processes = [
    { name: "Understanding Your Needs ", description: "We start by getting to know your business, goals, and audience. Through conversations and research, we create a custom marketing plan that fits your unique needs." },
    { name: "Putting the Plan into Action ", description: "Our team brings the plan to life with effective strategies like content creation, social media, and ads. We keep a close eye on the results and make improvements to ensure the best performance." },
    { name: "Tracking Progress and Growing", description: "We provide easy-to-understand reports to show you how well your campaigns are doing. Regular check-ins help us adjust our approach and find new ways to help your business grow. We’re here to support your long-term success." },
]