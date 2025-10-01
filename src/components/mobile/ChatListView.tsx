import { useState } from 'react';
import { Heart, Search, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '../ui/button';

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

interface ChatListViewProps {
  onChatSelect: (chatId: string) => void;
}

const ChatListView = ({ onChatSelect }: ChatListViewProps) => {
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

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-background pb-20">
      {/* Header */}
      <div className="px-4 py-3 border-b bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold mb-3">Messages</h2>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="relative rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative rounded-full">
              <ShoppingCart className="h-5 w-5" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>
          </div>
        </div>
        
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
        <div className="px-1">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => onChatSelect(chat.id)}
            >
              <div className="flex items-center gap-3 border-b pb-2">
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
                        <span>{`${chat.lastMessage.substring(0, 40)}...`}</span>
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
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatListView;