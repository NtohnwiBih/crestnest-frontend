import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, MoreVertical, Phone, Video, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
  isRead: boolean;
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

interface ChatViewProps {
  chatId: string;
  onBack: () => void;
}

const ChatView = ({ chatId, onBack }: ChatViewProps) => {
  const [messageText, setMessageText] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Mock data - in real app this would come from props or API
  const chat: Chat = {
    id: chatId,
    name: 'Electronics Hub',
    avatar: '/placeholder.svg',
    isOnline: true,
  };

  const messages: Message[] = [
    {
      id: '1',
      text: 'Hi! I\'m interested in the iPhone 15 Pro. Is it still available?',
      timestamp: '9:15 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '2',
      text: 'Yes, we have it in stock! Which color would you prefer?',
      timestamp: '9:17 AM',
      isSent: false,
      isRead: true,
    },
    {
      id: '3',
      text: 'I\'d like the Natural Titanium color please',
      timestamp: '9:18 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '4',
      text: 'Perfect! I\'ll send you the product link. The price is $1199 with free shipping.',
      timestamp: '9:20 AM',
      isSent: false,
      isRead: true,
    },
    {
      id: '5',
      text: 'That sounds great! Can you also tell me about the warranty?',
      timestamp: '9:22 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '6',
      text: 'It comes with 1 year Apple warranty. We also offer extended warranty for 2 years at $199.',
      timestamp: '9:25 AM',
      isSent: false,
      isRead: true,
    },
    {
      id: '7',
      text: 'I\'ll take the extended warranty too. What\'s the total?',
      timestamp: '9:26 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '8',
      text: 'Total would be $1398 including the extended warranty. Shall I prepare the invoice?',
      timestamp: '9:28 AM',
      isSent: false,
      isRead: true,
    },
    {
      id: '9',
      text: 'Yes please! And what are the payment options?',
      timestamp: '9:30 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '10',
      text: 'We accept credit cards, PayPal, Apple Pay, and bank transfer. Which would you prefer?',
      timestamp: '9:32 AM',
      isSent: false,
      isRead: true,
    },
    {
      id: '11',
      text: 'I\'ll pay with Apple Pay. How long is the delivery?',
      timestamp: '9:33 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '12',
      text: 'Great choice! Free delivery takes 2-3 business days. Express delivery is available for $15 and arrives next day.',
      timestamp: '9:35 AM',
      isSent: false,
      isRead: true,
    },
  ];

  // Auto-scroll to bottom when component mounts
  useEffect(() => {
    const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, []);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Chat Header */}
      <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 border-b bg-background/95 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="rounded-full"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Avatar className="h-10 w-10">
          <AvatarImage src={chat.avatar} />
          <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h3 className="font-medium text-sm">{chat.name}</h3>
          <p className="text-xs text-muted-foreground">
            {chat.isOnline ? 'Online' : 'Last seen 2h ago'}
          </p>
        </div>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="rounded-full">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 px-4">
        <div className="space-y-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.isSent
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 opacity-70 ${
                  message.isSent ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="flex items-center gap-2 px-4 py-3 border-t bg-background/95 backdrop-blur-sm">
        <Button variant="ghost" size="sm" className="rounded-full">
          <Plus className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 relative">
          <Input
            placeholder="Type a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="rounded-full pr-12"
          />
        </div>
        
        <Button
          size="sm"
          onClick={handleSendMessage}
          disabled={!messageText.trim()}
          className="rounded-full"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatView;