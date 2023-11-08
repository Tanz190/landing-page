import backgroundImage from './assets/soccer2.jpg';
import headerImage from './assets/header_bg_hd.png';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

function App() {
  const handleRedirect = () => {
    window.location.href = 'https://blessing.smart-movie.online/rc?movie=&sub_id=ERDAF190';
  };
  return (
    <>
      <div
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' + backgroundImage + ')',
          // backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          width: '100%',
          height: 'auto',
          minHeight: '100dvh',
        }}
        className='bg-black h-fit'
      >
        <div className='fixed top-0'>
          <img src={headerImage} alt='header' />
        </div>
        <div className='w-full h-full flex justify-center items-center flex-col px-4 md:px-16 pt-10 md:pt-32 pb-8'>
          <h1 className='text-3xl text-center md:text-5xl text-white font-extrabold uppercase'>
            access live soccer matches and more
          </h1>
          <div className='w-full mt-10 flex flex-col md:flex-row justify-between items-center gap-y-8'>
            <div className='flex flex-col justify-evenly gap-y-4'>
              <div className='w-full md:w-[600px] h-[240px] md:h-[270px]  bg-white border border-white overflow-hidden'>
                <div className='p-2 w-full h-[60%] bg-[#294149] flex flex-col justify-center items-center gap-y-2'>
                  <div className='w-24 h-24 border-4 border-[#91cf73] rounded-full flex justify-center items-center'>
                    <HiOutlineComputerDesktop size={40} />
                  </div>
                  <h1 className='text-lg text-white text-center'>Please create a free account for unlimited access.</h1>
                </div>
                <div className='p-2 w-full h-[40%] flex flex-col justify-center items-center'>
                  <h1 className='text-lg text-black '>Don&lsquo;t have an account?</h1>
                  <h1 className='text-neutral-600 text-center'>
                    Sign up now! It only takes 2 minutes to signup for over a million live events
                  </h1>
                </div>
              </div>
              <div className='w-full md:w-[600px] h-8 bg-white flex justify-evenly items-center py-6'>
                <p>1. Account Info</p>
                <p>2. Verification</p>
                <p>3. Enjoy</p>
              </div>
            </div>
            <div className='flex flex-col gap-y-4'>
              <h1 className='text-[#6dc43c] text-xl font-semibold'>Sign Up For FREE!</h1>
              <button
                onClick={handleRedirect}
                className='p-4 text-xl font-bold text-white rounded-sm bg-[#84b02f] hover:opacity-95 uppercase'
              >
                Create Free Account
              </button>
              <p className='text-white'>
                We value your privacy. We will not sell or rent your email address to third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
