import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col bg-gray-900 rounded-lg shadow-xl'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 rounded-t-lg'>
						<div className='flex items-center gap-2'>
							<div className='avatar online'>
								<div className='w-10 rounded-full ring-2 ring-white'>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s"
										alt={selectedConversation.fullName}
										className='rounded-full object-cover'
									/>
								</div>
							</div>
							<div className='flex flex-col'>
								<span className='text-white font-bold text-lg'>{selectedConversation.fullName}</span>
								<span className='text-xs text-blue-100'></span>
							</div>
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full min-h-[400px] bg-gray-900 rounded-lg'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-4'>
				<div className='flex items-center gap-2 text-2xl'>
					<span>Welcome</span>
					<span className='animate-wave'>👋</span>
				</div>
				<p className='text-sky-500 font-bold text-2xl'>{authUser.fullName}</p>
				<div className='bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-lg mt-2 transform hover:scale-105 transition-all duration-300 cursor-pointer'>
					<p className='text-white'>Select a chat to start messaging</p>
				</div>
				<TiMessages className='text-5xl md:text-7xl text-sky-500 animate-bounce mt-4' />
			</div>
		</div>
	);
};

export default MessageContainer;