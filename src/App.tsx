import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatComponent";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-custom-gray p-5 fixed min-w-full">
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 }} className="bg-custom-gray">
        <ChatHeader />
      </div>
      <div style={{ marginTop: '200px', marginBottom: '50px', overflow: 'hidden',position:'sticky' }}>
        <div style={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto' }}>
          <ChatMessage />
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 10,left:20,right:20, zIndex: 1 }}>
        <ChatInput />
      </div>
    </div>
  );
}

export default App;







