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
        time: "2023-10-13 10:13:52",
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
        time: "2023-10-13 10:20:52",
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
        time: "2023-10-13 10:20:52",
      },  {
        id: '3',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: "2023-10-13 10:30:52",
      },  {
        id: '4',
        message: 'Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money',
        sender: {
          image: 'user2.jpg',
          is_kyc_verified: false,
          self: true,
          user_id: 'user2',
        },
        time: "2023-10-13 10:33:52",
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
        time: "2023-10-13 10:33:52",
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
        time: "2023-10-13 10:34:52",
      }
      // Add more initial mock chat messages here
    ],
  };
