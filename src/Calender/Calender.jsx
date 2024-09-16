import React, { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

const Calender = () => {
  const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]
  const monthsOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December']

  const currentDate = new Date()
  const [currentMonth,setCurrentMonth] = useState(currentDate.getMonth())
  const [currentYear,setCurrentYear] = useState(currentDate.getFullYear())
  
  // To get the number of days in one month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // To get the first day of the month
  const firstDayOfMonth = new Date(currentYear,currentMonth, 1).getDay()

  // previous month function
  const previousMonth = () => {
    setCurrentMonth(prevMonth => prevMonth === 0? 11 : prevMonth - 1)
    setCurrentMonth(prevYear => currentMonth === 0? prevYear - 1 : prevYear)
  }

  // previous month function
  const nextMonth = () => {
    setCurrentMonth(prevMonth => prevMonth === 11? 0 : prevMonth + 1)
    setCurrentMonth(prevYear => currentMonth === 11? prevYear + 1 : prevYear)
  }
  return (
    <div className='bg-[#FFFFFF]'>
      <div className='flex justify-between px-10'>
        <p className='text-[#030229] font-[600] text-[14px] capitalize'>{`${monthsOfYear[currentMonth]} ${currentDate.getDate()}, ${currentYear}`}</p>
        <div className='flex'>
          <BsFillPlayFill 
            className='text-[18px] text-[#030229] rotate-[180deg] active:text-[16px] cursor-pointer w-[20px]'
            onClick={previousMonth}
          />
          <BsFillPlayFill 
            className='text-[18px] text-[#030229] active:text-[16px] cursor-pointer w-[20px]'
            onClick={nextMonth}
          />
        </div>
      </div>

      {/* Calender days or days of the month */}
      <div className={'grid grid-cols-7'}>
        
         {/* days of the week */}
        {weekDays?.map((day)=>(
          <p key={day} className='text-[#030229]  font-[600] tetxt-[16px] flex items-center justify-center px-10 py-5'>{day}</p>
        ))}

        {/* Few days before the curent month that fall in the same week as the begining of the month  */}
        {[...Array(firstDayOfMonth).keys()].map(day=>(
          <p key={day} className="border-t-2 border-gray-100 text-[rgba(3,2,41,0.5)] text-[24px] font-[600] aspect-square flex items-center justify-center">{day+1}</p>
        ))}

        {/* days in the current month */}
        {[...Array(daysInMonth).keys()].map(day=>(
          <p key={day} className={`border-t-2 border-gray-100 ${monthsOfYear[currentMonth] === monthsOfYear[new Date().getMonth()] && currentYear && currentDate.getDate() === day+1? 'text-green-400 font-[400]':'text-[rgba(3,2,41,1)]'} text-[24px] font-[600] aspect-square flex items-center justify-center tracking-[3px]`}>{day+1<10?`0${day+1}`: day+1}</p>
        ))}

        {/* Few days before the curent month that fall in the same week as the begining of the month  */}
        {[...Array(7 - firstDayOfMonth - (daysInMonth % 7)).keys()].map(day=>(
          <p key={day} className="border-t-2 border-gray-100 text-[rgba(3,2,41,0.5)] text-[24px] font-[600] aspect-square flex items-center justify-center">{day+1}</p>
        ))}

      </div>
    </div>
  )
}

export default Calender