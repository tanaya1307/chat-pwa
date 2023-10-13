import { ChatApiResponse } from "../interfaces/ChatInterface";
export const mockData: ChatApiResponse = {
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
        time: "",
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
        time: "",
      },
      {
        id: '21',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: "",
      },  {
        id: '3',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: "",
      },  {
        id: '4',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: "",
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
        time: "",
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
        time: "",
      }
      // Add more initial mock chat messages here
    ],
  };
