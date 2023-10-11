import { Avatar, AvatarGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import verified from '../assets/check-verified-02.svg';
import ChatHeader from './ChatHeader';

interface Chat {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

interface ChatApiResponse {
  chats: Chat[];
}

function ChatComponent() {
  const [chatData, setChatData] = useState<ChatApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (isLoading) {
      return;
    }
    
    setIsLoading(true);
   
    const apiUrl = `https://qa.corider.in/assignment/chat?page=${chatData?.chats.length || 0}`;
    try {
      const response = await fetch(apiUrl);
      const data: ChatApiResponse = await response.json();
      setChatData((prevData) => ({
        chats: [...(prevData?.chats || []), ...data.chats],
      }));
    } catch (error) {
      console.error('Error fetching chat data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    fetchData(); // Initial data fetch
  }, []);

  return (
    <div>
       
      <div className="divide-y divide-solid">
        {chatData ? (
          <ul>
            {chatData.chats.map((chat) => (
              <li key={chat.id}>
                 <div className="w-fit h-fit justify-start items-start gap-2 inline-flex m-2">
                    <div className="w-fit h-fit relative mt-1 mr-7">
                    {chat.sender.self==false?
                      <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-[999px] border justify-center items-center inline-flex ">
                        <Avatar size='sm' src={chat.sender.image}/>
                        <div className="w-[7.64px] h-[7.64px] left-[17.64px] top-[17.64px] absolute rounded-[999px]">
                        {chat.sender.is_kyc_verified==true?<img src={verified}/>:""}
                        </div>
                      </div>
                      :""}
            </div>
              <div className={`w-fit h-fit p-2 rounded-tr-xl rounded-bl-xl ${chat.sender.self?'rounded-tl-xl ml-6':'rounded-br-xl '} shadow flex-col justify-center items-center gap-4 inline-flex ${chat.sender.self?'bg-blue-700':'bg-white'}`}>
                    <div className="h-inherit w-full flex-col justify-start items-start gap-2 flex">
                      <div className={`self-stretch ${chat.sender.self?'text-white':'text-zinc-600'} text-sm font-normal font-['Mulish'] p-2`}>
                        {chat.message}
                      </div>
                    </div>
              </div>
           </div>       
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading chat data...</p>
        )}
      </div>
    </div>
  );
}

export default ChatComponent;
