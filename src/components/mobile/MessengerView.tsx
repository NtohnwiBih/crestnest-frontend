import { useState } from 'react';
import { Search, ArrowLeft, Send, MoreVertical, Phone, Video, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  isTyping?: boolean;
}

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isSent: boolean;
  isRead: boolean;
}

const MessengerView = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const chats: Chat[] = [
    {
      id: '1',
      name: 'Fashion Store Support',
      avatar: '/placeholder.svg',
      lastMessage: 'Thank you for your order! Your package will arrive in 2-3 days.',
      timestamp: '2m ago',
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: '2',
      name: 'Electronics Hub',
      avatar: '/placeholder.svg',
      lastMessage: 'Hi! We have a new iPhone model available. Would you like to see it?',
      timestamp: '1h ago',
      unreadCount: 0,
      isOnline: true,
      isTyping: true,
    },
    {
      id: '3',
      name: 'Home Decor Co.',
      avatar: '/placeholder.svg',
      lastMessage: 'Your wishlist item is now on sale! 30% off for limited time.',
      timestamp: '3h ago',
      unreadCount: 1,
      isOnline: false,
    },
    {
      id: '4',
      name: 'Sports Gear',
      avatar: '/placeholder.svg',
      lastMessage: 'Thanks for your review! Here\'s a 10% discount code: SPORT10',
      timestamp: '1d ago',
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: '5',
      name: 'Beauty Store',
      avatar: '/placeholder.svg',
      lastMessage: 'Your order has been shipped! Track: #BS123456',
      timestamp: '2d ago',
      unreadCount: 0,
      isOnline: true,
    },
  ];

  const messages: Message[] = [
    {
      id: '1',
      text: 'Hi! I\'m interested in the iPhone 15 Pro. Is it still available?',
      timestamp: '10:30 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '2',
      text: 'Yes, we have it in stock! Which color would you prefer?',
      timestamp: '10:32 AM',
      isSent: false,
      isRead: true,
    },
    {
      id: '3',
      text: 'I\'d like the Natural Titanium color please',
      timestamp: '10:33 AM',
      isSent: true,
      isRead: true,
    },
    {
      id: '4',
      text: 'Perfect! I\'ll send you the product link. The price is $1199 with free shipping.',
      timestamp: '10:35 AM',
      isSent: false,
      isRead: true,
    },
  ];

  const selectedChatData = chats.find(chat => chat.id === selectedChat);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedChat) {
    return (
      <div className="flex flex-col h-full bg-background">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b bg-background/95 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedChat(null)}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <Avatar className="h-10 w-10">
            <AvatarImage src={selectedChatData?.avatar} />
            <AvatarFallback>{selectedChatData?.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="font-medium text-sm">{selectedChatData?.name}</h3>
            <p className="text-xs text-muted-foreground">
              {selectedChatData?.isOnline ? 'Online' : 'Last seen 2h ago'}
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
        <ScrollArea className="flex-1 px-4">
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
  }

  return (
    <div className="flex flex-col h-full bg-background pb-20">
      {/* Header */}
      <div className="px-4 py-3 border-b bg-background/95 backdrop-blur-sm">
        <h2 className="text-lg font-semibold mb-3">Messages</h2>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full bg-muted"
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {filteredChats.map((chat) => (
            <Card
              key={chat.id}
              className="p-4 cursor-pointer hover:bg-muted/50 transition-colors shadow-sm"
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {chat.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-sm truncate">{chat.name}</h3>
                    <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate flex-1">
                      {chat.isTyping ? (
                        <span className="text-primary italic">Typing...</span>
                      ) : (
                        chat.lastMessage
                      )}
                    </p>
                    
                    {chat.unreadCount > 0 && (
                      <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessengerView;