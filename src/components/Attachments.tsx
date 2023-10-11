import video from '../assets/video.svg'
import camera from '../assets/camera-02.svg'
import document from '../assets/Document.svg'
import corner from '../assets/Corner.svg'

function Attachments() {
  return (
    <>
    <div className=''>
    <div className="w-fit h-10 px-4 py-3  bg-custom-green rounded-[999px] shadow justify-around items-center gap-2 inline-flex m-0 ">
    <img src={camera} alt="" />
    <div className="w-fit h-5 relative" />
    <img src={video} alt="" />
    <div className="w-fit h-5 relative" />
    <img src={document} alt="" />
    <div className="w-fit h-5 relative" />
   
</div>
 <img src={corner} alt="" className='ml-14 relative' />
 </div>
 </>
  )
}

export default Attachments