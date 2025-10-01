import { useState } from 'react';
import { Home, Grid, Tag, User, Mail} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatView from '@/components/mobile/ChatView';
import ChatListView from '@/components/mobile/ChatListView';
import { Link } from 'react-router-dom';

const MessengerPage = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  const handleBackToChats = () => {
    setSelectedChatId(null);
  };

  const bottomTabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'categories', label: 'Categories', icon: Grid, path: '/products/search' },
    { id: 'messenger', label: 'Messenger', icon: Mail, path: '/messenger' },
    { id: 'deals', label: 'Deals', icon: Tag, path: '/deals' },
    { id: 'my-nest', label: 'My Nest', icon: User, path: '/my-nest' },
  ];

  // If viewing individual chat, show full-screen chat view
  if (selectedChatId) {
    return <ChatView chatId={selectedChatId} onBack={handleBackToChats} />;
  }

  return (
    <div className="min-h-screen bg-background relative">

      {/* Main Content */}
      <main className="min-h-screen pb-16">
        <ChatListView onChatSelect={handleChatSelect} />
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <div className="flex">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === 'messenger';
            return (
              <Link key={tab.id} to={tab.path} className="flex-1">
                <Button
                  variant="ghost"
                  className={`w-full flex-col gap-1 h-16 rounded-none ${
                    isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
                  <span className={`text-xs ${isActive ? 'font-medium text-primary' : ''}`}>
                    {tab.label}
                  </span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MessengerPage;
