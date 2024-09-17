import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Calendar } from 'lucide-react';

import { Clock } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CalendarFold } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';


const App = () => {
  return (
    <div className='w-full h-screen bg-slate-200 px-4 sm:px-6 md:px-10 lg:px-20 py-12 flex flex-col  gap-3 '>
      <div className=' w-full h-20 bg-white rounded-md px-5 py-5 flex justify-between '>
         <p className='sm:text-xl md:text-2xl font-sans font-extrabold flex justify-start'>  udemy</p>
         <div className=' hidden sm:flex justify-around items-center bg-slate-100 rounded-full w-1/2 h-full px-2 py-2 ml-10'>
  <p className='text-xs sm:text-sm font-medium text-center'>Courses</p>
  <div className='bg-black rounded-full px-3 py-2 flex justify-center items-center'>
    <p className='text-white text-xs sm:text-sm font-medium'>Dashboard</p>
  </div>
  <p className='text-xs sm:text-sm font-medium'>Schedule</p>
  <p className='text-xs sm:text-sm font-medium'>Message</p>
  <p className='text-xs sm:text-sm font-medium'>Support</p>
</div>

         <div className='bg-slate-100 h-full w-1/3 sm:w-1/6 rounded-full flex justify-around items-center px-1 py-1'>
         <Search size={20} />
         <Bell size={20} />
         <img
                  src="/person.jpg"
               className='rounded-full w-6 h-6'
                />
         </div>
      </div>
      <div className='w-full h-full rounded-md flex justify-content:space-around flex-col  md:flex-row gap-3'>
        <div className='w-full md:w-1/4 h-full flex justify-start flex-col bg-lime-200 rounded-md'>
        <div className='w-full h-1/4 bg-white px-4 py-4 flex flex-col gap-2 rounded-lg '>
        <div className='w-full flex justify-between '>

          <p className="text-lg sm:text-xl font-medium ">Activity</p>
          <div className='flex flex-row justify-center gap-1 border-2  px-2 border-slate-200 py-2 rounded-full  '>
          <Calendar size={15}/>
            <p className='text-xs  '>Last 7 days</p>
          </div>
        </div>
        <div className='w-full flex flex-row '>
        <div>
        <p className='text-4xl sm:text-5xl font-semibold'>24,9</p>
        </div>
        <div className='w-full flex flex-col gap-1 px-2 py-2' >
          <div>
            <p className='text-xs font-extralight '>Hours</p>
          </div>
          <div>
            <p className='text-xs font-extralight '>spent</p>
          </div>
        </div>
        </div>

        </div>
       
        <div className='w-full h-3/4 bg-white px-4 py-4 flex flex-col gap-5'>
           <p className='text-md  font-medium'>By Platform</p>
           <div className='space-y-4 px-4 py-2 flex flex-col gap-3 justify-start'>
  <div className='flex items-center justify-between w-full'>
    <p className='text-sm font-extrabold'>Udemy</p>
    <div className='flex flex-col justify-center'>
      <p className='text-xs'>8 Lessons</p>
      <p className='text-3xs font-normal '>udemy platform</p>
    </div>
    <p className='text-2xs font-medium'>12.5 h</p>
  </div>

  <div className='flex items-center justify-between w-full'>
    <img src="/zoom.png" alt="Zoom" className='rounded-full w-8 h-8' />
    <div className='flex flex-col  justify-center'>
      <p className='text-xs'>10 Lessons</p>
      <p className='text-3xs font-normal '>Zoom</p>
    </div>
    <p className='text-2xs font-medium'>9.8 h</p>
  </div>

  <div className='flex items-center justify-between w-full'>
    <img src='/google meet.png' alt="Google Meet" className='rounded-full w-8 h-8' />
    <div className='flex flex-col  justify-start'>
      <p className='text-xs'>7 Lessons</p>
      <p className='text-3xs font-normal'>Google Meet</p>
    </div>
    <p className='text-2xs font-medium'>10.5 h</p>
  </div>

  <div className='flex items-center justify-between w-full'>
    <img src='/skype.png' alt="Skype" className='rounded-full w-8 h-8' />
    <div className='flex flex-col  justify-start'>
      <p className='text-xs'>5 Lessons</p>
      <p className='text-3xs font-normal'>Skype</p>
    </div>
    <p className='text-2xs font-medium'>18.5 h</p>
  </div>

  <div className='flex items-center justify-between w-full'>
    <img src='/facebook.webp' alt="Facebook" className='rounded-full w-8 h-8' />
    <div className='flex flex-col  justify-start'>
      <p className='text-xs'>18 Lessons</p>
      <p className='text-3xs font-normal'>Facebook</p>
    </div>
    <p className='text-2xs font-medium'>5.5 h</p>
  </div>
</div>

         


        </div>

        </div>
       <div className='w-full md:w-3/4 h-full flex  flex-col gap-2 '>
       <div className='w-full h-full flex flex-col md:flex-row gap-2'>

       <div className=' w-full md:w-1/2 h-full bg-white px-5 py-5 flex flex-col gap-4 rounded-lg'>
       <div>

        <p className='text-lg sm:text-xl font-medium'>Progress statistics</p>
       </div>
       <div className='flex flex-row gap-2'>
       <div className=''>
          <p className='text-4xl font-semibold'>64%</p>
       </div>
       <div className='flex flex-col text-xs px-1 py-1 font-extralight'>
        <div>
          <p>Total</p>
        </div>
        <div>
        <p>activity</p>
        </div>
       </div>
         
       </div>
       <div className='flex flex-row gap-1 px-1 py-1'>
        <div className='w-1/5 h-1 bg-blue-600 rounded-full  '>
          <p className='text-xs font-medium'>24%</p>
        </div>
        <div className='w-1/4 h-1 bg-green-600 rounded-full'>
           <div className='text-xs font-medium'>35%</div>
        </div>
        <div className='w-1/3 h-1 bg-orange-700 rounded-full'>
            <div className='text-xs font-medium'>45%</div>
        </div>
       </div>
    

       <div className="grid grid-cols-3 divide-x  px-5 py-5">
  <div className='flex w-full justify-center items-center flex-col '>
  <div className='bg-blue-700 rounded-full w-8 h-8 flex justify-center items-center border-2 border-black '  >
       <Clock size={18}/>
       </div>
        <div className='text-xl font-medium mt-2'>8</div>
        <div className='text-xs font-normal'>in progress</div>
      
       

  </div>
  <div className='flex w-full justify-center items-center flex-col'>
  <div className='bg-green-700 rounded-full w-8 h-8 flex justify-center items-center border-2 border-black' >
       <CircleCheckBig size={18} /> 
       </div>
       <div className='text-xl font-medium mt-2'>12</div>
        <div className='text-xs font-normal'>Completed</div>

  </div>
  <div className='flex w-full justify-center items-center flex-col'>
  <div className='bg-orange-700 rounded-full w-8 h-8 flex justify-center items-center border-2 border-black'>
       <CalendarFold size={18} />
       </div>
       <div className='text-xl font-medium mt-2'>14</div>
       <div className='text-xs font-normal'>Upcoming</div>


  </div>
</div>
       
       </div>
     
       <div className='w-full md:w-1/2 h-full bg-white  px-6 py-6 rounded-lg  '>
       <div className='flex flex-row gap-5'>
         <div className='bg-green-100 text-green-700 text-xs font-bold px-1 py-1 rounded-full'>Group course</div>
         <div className='bg-blue-100 text-blue-700 text-xs font-bold px-1 py-1 rounded-full'>Advanced</div>
       </div>
       <div className='flex flex-col gap-2 mt-3'>
        <p className='text-2xl font-semibold '>English punctuation made easy</p>
        <p className='text-xs font-light tracking-wide'>Punctuation --- is the tool that allows us to organize our thoughts and make it easier to review and share our ideas.</p>
       </div>
       <div className='mt-6 px-4 flex flex-row justify-around '>
       <div className=''>
        <div className='text-xs'>Participants</div>
        <div className='relative flex flex-row mt-2 '>
        <img
    src='/img1.webp'
    className='absolute w-8 h-8 rounded-full border-1 '
    style={{ zIndex: 4, left: '0rem' }}
/>
<img
    src='/img2.jpeg'
    className='absolute w-8 h-8 rounded-full'
    style={{ zIndex: 3, left: '1.2rem' }} 
/>
<img
    src='/img3.jpg'
    className='absolute w-8 h-8 rounded-full'
    style={{ zIndex: 2, left: '2.5rem' }}  
/>
<img
    src='/img4.jpeg'
    className='absolute w-8 h-8 rounded-full'
    style={{ zIndex: 1, left: '3.8rem' }}
/>

</div>

       </div>
       <div className='flex flex-col gap-2'>
        <div className='text-xs'>Course progress</div>
        <div className="relative h-8" style={{ width: '150px' }}>
  <div className="absolute top-0 left-0 bg-yellow-200 rounded-md w-full h-full z-0"></div>
  <div className="absolute top-0 left-0 bg-yellow-400 rounded-md w-3/4 h-full z-10 flex items-center justify-center">
    <p className="font-medium text-black">75%</p>
  </div>
</div>



       
       </div>
        
       </div>

<div className='flex h-full justify-center'>
<div className=' flex items-center justify-center bg-black text-white h-1/6 w-3/4  rounded-md mt-5   '>
        <p>Continue Learning</p>
       </div>
</div>
       
       
       </div>
       </div>
            
       <div className=' w-full h-full bg-white rounded-lg '>
       <div className='flex justify-between px-10 py-5'>
        <div className='text-2xl font-medium'>My schedule</div>
        <div className='flex justify-around gap-2'>
          <div className='w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex justify-center items-center'> <ChevronLeft /></div>
          <div>Today</div>
          <div className='w-8 h-8 rounded-full border-2 border-gray-300 bg-white flex justify-center items-center'> <ChevronRight /></div>
        </div>
        </div>
        <div className='flex justify-between flex-col md:flex-row gap-2 px-10 py-5  '>
          <div className='h-full w-full md:w-1/3 bg-white rounded-md px-4 py-4 grid grid-col-1 content-between '>
          <div className=''>
          <div className='text-xs text-slate-500'>10:30-12:00</div>
          <div className='mt-1 font-medium'>Technical English For</div>
          <div className='font-medium'>Beginners</div>
           <div className='w-1/4 h-5 rounded-md bg-blue-200 text-blue-600 text-xs flex justify-center items-center mt-2 font-medium mx-1'>Beginners</div>
           </div>
           <div className='pt-20 flex flex-row gap-2'>
             <div>
              <img
                src='/imgimg.jpeg'
                className='h-7 w-8 rounded-full'
              />
             </div>
            <div className='flex flex-col '>
              <div className='text-xs font-medium'>Emma Watson</div>
              <div className='text-xs font-light'>Mentor</div>
            </div>
           </div>
          </div>
          <div className='h-full w-full md:w-1/3 bg-blue-500 rounded-md px-4 py-4 grid grid-col-1 content-between'>
          <div className=''>
          <div className='flex flex-row justify-between '>
          <div className='text-xs text-slate-300 '>10:30-12:00</div>
          <div className='flex flex-row px-2 py-2 gap-1 justify-center items-center bg-orange-400 h-3 w-1/5 rounded-full'>
            <div className='h-2 w-2 bg-yellow-300 rounded-full'></div>
            <div className='text-xs font-normal'>Now</div>
          </div>
          </div>
          
          <div className='mt-1 font-medium'>Technical English For</div>
          <div className='font-medium'>Beginners</div>
           <div className='w-1/4 h-5 rounded-md bg-blue-200 text-blue-600 text-xs flex justify-center items-center mt-2 font-medium mx-1'>Beginners</div>
           </div>
           <div className='pt-20 flex flex-row gap-2'>
             <div>
              <img
                src='/imgimg.jpeg'
                className='h-7 w-8 rounded-full'
              />
             </div>
            <div className='flex flex-col '>
              <div className='text-xs font-medium'>Emma Watson</div>
              <div className='text-xs font-light'>Mentor</div>
            </div>
           </div>
          </div>
          <div className='h-full w-full md:w-1/3 bg-white rounded-md px-4 py-4 grid grid-col-1 content-between'>
          <div className=''>
          <div className='text-xs text-slate-500'>10:30-12:00</div>
          <div className='mt-1 font-medium'>Technical English For</div>
          <div className='font-medium'>Beginners</div>
           <div className='w-1/4 h-5 rounded-md bg-blue-200 text-blue-600 text-xs flex justify-center items-center mt-2 font-medium mx-1'>Beginners</div>
           </div>
           <div className='pt-20 flex flex-row gap-2'>
             <div>
              <img
                src='/imgimg.jpeg'
                className='h-7 w-8 rounded-full'
              />
             </div>
            <div className='flex flex-col '>
              <div className='text-xs font-medium'>Emma Watson</div>
              <div className='text-xs font-light'>Mentor</div>
            </div>
           </div>
          </div>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default App
