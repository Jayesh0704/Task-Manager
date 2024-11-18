import React from 'react'


const Header = (props) => {
  console.log(props)
  const logout=()=>{
   props.user('')
  }
 
  
  return (
    <div className='flex items-end justify-between p-4 mt-2'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.firstName} 👋</span></h1>
        <button onClick={logout}   className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header