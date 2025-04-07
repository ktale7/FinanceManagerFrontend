import Header from "../Components/Header";
import { motion } from "framer-motion";
import Statcard from "../Components/Statcard";
import { Zap, Send } from "lucide-react";

const Chatbot = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title="Chatbot" />

    <footer className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-t border-gray-700 absolute bottom-0 left-0 right-0 z-10'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
      <input type="text" placeholder="Enter text..." class="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"></input>
      <button className="ml-2 text-blue-500 hover:text-blue-700">
        <Send size={18} />
      </button>
      </div>
    </footer>


    <main className='max-w-7x1 mx-auto py-6 px-4 lg:px-8'>
      {/*STATS */}
      <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      </motion.div>


    </main>
  </div>
  )
}

export default Chatbot

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSendMessage = () => {
//     if (input.trim() !== '') {
//       setMessages([...messages, { text: input, sender: 'user' }]);
//       setInput('');
//       // Simulate bot response (replace with actual logic)
//       setTimeout(() => {
//         setMessages([...messages, { text: input, sender: 'user' }, { text: "Hello there!", sender: 'bot' }]);
//       }, 500);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <div className="bg-gray-200 p-4">
//         <h1 className="text-lg font-bold">Chatbot</h1>
//       </div>
//       <div className="flex-1 overflow-y-auto p-4">
//         {messages.map((message, index) => (
//           <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
//             <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="p-4">
//         <div className="flex">
//           <input
//             type="text"
//             className="flex-1 border border-gray-300 rounded-l-md p-2"
//             placeholder="Type a message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
//           />
//           <button
//             className="bg-blue-500 text-white rounded-r-md p-2"
//             onClick={handleSendMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }