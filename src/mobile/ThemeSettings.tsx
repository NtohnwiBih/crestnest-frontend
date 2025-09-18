import { useState, useEffect } from 'react';
import { ArrowLeft, Palette, Moon, Sun, Monitor, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const ThemeSettings = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState('system');
  const [selectedAccent, setSelectedAccent] = useState('blue');

  const themes = [
    { id: 'light', name: 'Light', icon: Sun },
    { id: 'dark', name: 'Dark', icon: Moon },
    { id: 'system', name: 'System', icon: Monitor }
  ];

  const accentColors = [
    { id: 'blue', name: 'Blue', color: 'bg-blue-500', hsl: '221 83% 53%' },
    { id: 'green', name: 'Green', color: 'bg-green-500', hsl: '142 76% 36%' },
    { id: 'purple', name: 'Purple', color: 'bg-purple-500', hsl: '262 83% 58%' },
    { id: 'orange', name: 'Orange', color: 'bg-orange-500', hsl: '25 95% 53%' },
    { id: 'red', name: 'Red', color: 'bg-red-500', hsl: '0 84% 60%' },
    { id: 'pink', name: 'Pink', color: 'bg-pink-500', hsl: '330 81% 60%' },
    { id: 'indigo', name: 'Indigo', color: 'bg-indigo-500', hsl: '239 84% 67%' },
    { id: 'teal', name: 'Teal', color: 'bg-teal-500', hsl: '173 80% 40%' }
  ];

  // Load saved preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    const savedAccent = localStorage.getItem('accent-color') || 'blue';
    setSelectedTheme(savedTheme);
    setSelectedAccent(savedAccent);
  }, []);

  const applyTheme = (theme: string) => {
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      // System theme
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  const applyAccentColor = (colorId: string) => {
    setSelectedAccent(colorId);
    localStorage.setItem('accent-color', colorId);
    
    const color = accentColors.find(c => c.id === colorId);
    if (color) {
      const root = document.documentElement;
      root.style.setProperty('--primary', color.hsl);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="flex items-center p-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 ml-4">
            <Palette className="h-5 w-5 text-primary" />
            <h1 className="font-semibold">Theme Settings</h1>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Theme Mode */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Appearance</h3>
          <div className="grid grid-cols-3 gap-3">
            {themes.map((theme) => {
              const IconComponent = theme.icon;
              const isSelected = selectedTheme === theme.id;
              
              return (
                <div
                  key={theme.id}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => applyTheme(theme.id)}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">{theme.name}</span>
                    {isSelected && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Accent Colors */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Accent Color</h3>
          <div className="grid grid-cols-4 gap-3">
            {accentColors.map((color) => {
              const isSelected = selectedAccent === color.id;
              
              return (
                <div
                  key={color.id}
                  className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => applyAccentColor(color.id)}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${color.color} border-2 border-white shadow-sm`} />
                    <span className="text-xs font-medium">{color.name}</span>
                    {isSelected && (
                      <Check className="h-3 w-3 text-primary" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Preview */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Preview</h3>
          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Sample Card</h4>
              <p className="text-sm text-muted-foreground mb-3">
                This is how your theme will look across the app.
              </p>
              <div className="flex gap-2">
                <Button size="sm">Primary Button</Button>
                <Button variant="outline" size="sm">Secondary</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Card className="p-3">
                <div className="w-full h-20 bg-primary/10 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                </div>
                <p className="font-medium text-sm">Product Card</p>
                <p className="text-primary font-bold text-sm">FCFA 25,000</p>
              </Card>
              
              <Card className="p-3">
                <div className="w-full h-20 bg-muted rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="font-medium text-sm">Another Product</p>
                <p className="text-primary font-bold text-sm">FCFA 45,000</p>
              </Card>
            </div>
          </div>
        </Card>

        {/* Reset */}
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Reset Theme</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Restore default theme settings
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              applyTheme('system');
              applyAccentColor('blue');
            }}
          >
            Reset to Default
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ThemeSettings;