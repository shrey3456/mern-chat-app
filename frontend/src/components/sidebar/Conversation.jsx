import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-3 items-center rounded-xl p-3 cursor-pointer transition-all duration-300 ease-in-out
				${isSelected ? "bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg scale-102" : "hover:bg-sky-500/20"}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : "offline"}`}>
					<div className='w-14 rounded-full ring-2 ring-offset-2 ring-offset-base-100 transition-all duration-300
						${isSelected ? "ring-white" : "ring-sky-500"}
						${isOnline ? "shadow-lg shadow-sky-500/50" : ""}'>
						<img 
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s" 
							alt='user avatar'
							className='rounded-full object-cover'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1 gap-1'>
					<div className='flex justify-between items-center'>
						<p className={`font-bold text-lg tracking-wide transition-colors
							${isSelected ? "text-white" : "text-gray-200"}`}>
							{conversation.fullName}
						</p>
						<span className='text-2xl transform hover:scale-125 transition-transform duration-300 hover:rotate-12'>
							{emoji}
						</span>
					</div>
					{isOnline && (
						<div className='flex items-center gap-2'>
							<span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
							<span className='text-xs text-green-400 font-medium'>Online</span>
						</div>
					)}
				</div>
			</div>

			{!lastIdx && (
				<div className='divider my-1 opacity-20 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
			)}
		</>
	);
};

export default Conversation;