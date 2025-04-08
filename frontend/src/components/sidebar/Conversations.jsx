import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-4 flex flex-col overflow-auto space-y-2'>
			{loading ? (
				<div className='flex flex-col items-center justify-center h-40 gap-3'>
					<span className='loading loading-spinner text-sky-500 w-10 h-10'></span>
					<p className='text-sky-500 animate-pulse font-medium'>Loading conversations...</p>
				</div>
			) : conversations.length === 0 ? (
				<div className='flex flex-col items-center justify-center h-40 gap-3'>
					<div className='text-4xl'>👥</div>
					<p className='text-gray-400 text-center'>No conversations yet</p>
					<p className='text-sm text-gray-500'>Start chatting with someone!</p>
				</div>
			) : (
				<div className='space-y-1'>
					{conversations.map((conversation, idx) => (
						<div
							key={conversation._id}
							className='transform transition-all duration-300 hover:scale-102'
						>
							<Conversation
								conversation={conversation}
								emoji={getRandomEmoji()}
								lastIdx={idx === conversations.length - 1}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Conversations;