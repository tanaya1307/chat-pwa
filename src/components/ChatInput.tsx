import { useState } from 'react';
import paperclip from '../assets/paperclip.svg';
import send from '../assets/send-03.svg';
import Attachments from './Attachments';

function ChatInput() {
  const [attachment, setAttachment] = useState(false);

  return (
    <div className="w-full h-full px-3 py-[11px] bg-white rounded-lg border justify-start items-center gap-4 inline-flex relative  ">
      <div className="grow shrink basis-0 h-[18px] justify-start items-start flex">
        <input
          type="text"
          className="text-neutral-900 text-sm font-semibold font-['Mulish'] w-full focus:outline-none"
        />
      </div>
      <div className="absolute right-0 top-[-100%] w-36">
        {attachment && <Attachments />}
      </div>
      <div className={` right-0 grid grid-cols-2 gap-4 absolute`}>
        <div className='mr-4'>
          <img
            src={paperclip}
            className=""
            onClick={() => {
              if (!attachment) setAttachment(true);
              else setAttachment(false);
            }}
          />
        </div>
        <div>
          <img src={send} />
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
