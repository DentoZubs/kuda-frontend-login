import { SlArrowLeft } from 'react-icons/sl';
import { BsHouseDoor } from 'react-icons/bs';
import Opay from '../Img/opay.jpg' 
import Flag from '../Img/flag.jpg'
function Login () {
    return(
        <main>
            <div className='flex justify-center'>
                <div className='flex-col px-[3rem]'>
                    <div className="flex justify-between border h-[3rem] py-[1rem]">
                        <SlArrowLeft/>
                        <p className=" text-[#1dd3c7] text-[15px]">Login</p>
                        <BsHouseDoor/>
                    </div>

                    <div className='flex-col mx-auto  borderless my-[5rem]'>
                        <div className="mx-auto borderless text-center w-[10rem]">
                            <img className='border rounded-[50%] w-[5rem] mx-auto' src={Opay} alt="Logo" />
                            <p className='text-[#ac9ca4] text-[20px] mb-[5rem]'>Welcome to Opay</p>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="Phone">Phone</label>
                        <div className='flex items-center mt-[1rem]'>
                            <div className='flex bg-[#eef4f8] drop-shadow-md h-[4rem] items-center'>
                                <img src={Flag} alt="Naija" className='w-[2rem] h-[2rem]' />
                                <div >+234</div>
                            </div>
                            <div>
                                <input type="tel" 
                                className='rounded-lg w-[30rem] h-[3rem] bg-[#eef4f8] items-center p-[2rem] drop-shadow-md'
                                placeholder='Enter phone'
                                style={{ border: "none", outline: "none" }}

                                 />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[2rem]'>
                        <label htmlFor="password">Password</label>
                        <div className='mt-[1rem]'>
                            <input type="password"
                                   className='rounded-lg w-[35rem] h-[3rem] p-[2rem] bg-[#eef4f8] drop-shadow-md'
                                   placeholder='6 Digits'
                                   style={{ border: "none", outline: "none" }}



                                   />

                        </div>
                        <button type='button' className='w-full h-[4rem] border border-red my-[2rem] text-white text-lg bg-[#8497a4]'>Confirm</button>
                        
                        <button type='button' className='w-full h-[4rem] border border-red text-white text-lg bg-[#1dcf9f]'>Register</button>
                    </div>
                </div>               
                
            </div>
        </main>
        
    )

}


export default Login