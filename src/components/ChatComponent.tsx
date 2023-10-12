import { Avatar, AvatarGroup } from '@chakra-ui/react';
import React, { useEffect, useState,useRef } from 'react';
import verified from '../assets/check-verified-02.svg';

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
  const [apiCallCounter, setApiCallCounter] = useState(0);
  const scrollableDivRef = useRef<HTMLDivElement | null>(null);
  const maxApiCalls =3; // maximum API call count

  const mockData: ChatApiResponse = {
    chats: [
      {
        id: '1',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user1.jpg',
          is_kyc_verified: true,
          self: false,
          user_id: 'user1',
        },
        time: '12:00 PM',
      },
      {
        id: '2',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: '12:05 PM',
      },
      {
        id: '2',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: '12:05 PM',
      },  {
        id: '3',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: '12:05 PM',
      },  {
        id: '4',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: '12:05 PM',
      },
      {
        id: '5',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: false,
          user_id: 'user2',
        },
        time: '12:05 PM',
      },
      {
        id: '6',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: false,
          user_id: 'user2',
        },
        time: '12:05 PM',
      }
      // Add more initial mock chat messages here
    ],
  };

 
  const fetchData = async () => {
    if (isLoading || apiCallCounter >= maxApiCalls) {
      return;
    }

    setIsLoading(true);

    const apiUrl = `https://qa.corider.in/assignment/chat?page=0`;
    try {
      const response = await fetch(apiUrl);
      const data: ChatApiResponse = await response.json();

      setChatData((prevData) => ({
        chats: [...data.chats, ...(prevData?.chats || [])],
      }));
      setApiCallCounter(apiCallCounter + 1);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (!scrollableDivRef.current || isLoading) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = scrollableDivRef.current;

    if (scrollTop < 10)  {
      fetchData();
    }
  };


  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.addEventListener('scroll', handleScroll);

      // Scroll to the bottom when the page first renders
      scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
    }

    return () => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    setChatData(mockData); // Render initial mock data
  }, []);

  return (
    <div ref={scrollableDivRef} style={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto' }}>
       
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
