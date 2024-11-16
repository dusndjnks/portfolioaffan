import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className='bg-gray-200'>
        <div>
            <hr  className='border border-black '/>
        </div>
        <footer className='h-24 '>
	<div className="flex justify-between  px-20 items-center h-24">
		<div className='flex gap-8'>
            <h1>Terms of Use</h1>
            <h1>Privacy</h1>
		</div>
        <div className='flex gap-8'>
            <h1>Instagram</h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
        </div>
	</div>
</footer>
        </div>
    </div>
  )
}

export default Footer