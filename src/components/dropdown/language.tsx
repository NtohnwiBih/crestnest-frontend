import { Globe, ChevronDown } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

const LangCurrencyDropdown: React.FC = () => {
  const [isLanguageCurrencyDropdownOpen, setIsLanguageCurrencyDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('XAF - CFA Franc BEAC');

  const languageCurrencyDropdownRef = useRef<HTMLDivElement>(null);

  // Languages list
  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  // Currencies list
  const currencies: Currency[] = [
    { code: 'XAF', name: 'XAF - CFA Franc BEAC', symbol: 'Fr' },
    { code: 'USD', name: 'USD - US Dollar', symbol: '$' },
    { code: 'EUR', name: 'EUR - Euro', symbol: '€' },
    { code: 'GBP', name: 'GBP - British Pound', symbol: '£' },
    { code: 'JPY', name: 'JPY - Japanese Yen', symbol: '¥' },
    { code: 'CNY', name: 'CNY - Chinese Yuan', symbol: '¥' },
    { code: 'CAD', name: 'CAD - Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'AUD - Australian Dollar', symbol: 'A$' },
    { code: 'CHF', name: 'CHF - Swiss Franc', symbol: 'Fr' },
    { code: 'SEK', name: 'SEK - Swedish Krona', symbol: 'kr' },
    { code: 'NOK', name: 'NOK - Norwegian Krone', symbol: 'kr' }
    // ...rest of the currencies
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageCurrencyDropdownRef.current &&
        !languageCurrencyDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageCurrencyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle language/currency save
  const handleLanguageCurrencySave = () => {
    setIsLanguageCurrencyDropdownOpen(false);
    console.log('Language and currency saved:', { selectedLanguage, selectedCurrency });
  };

  return (
    <div className="flex items-center text-sm relative" ref={languageCurrencyDropdownRef}>
        <button
            onClick={() => setIsLanguageCurrencyDropdownOpen(!isLanguageCurrencyDropdownOpen)}
            className="flex items-center gap-2 p-2 text-xs text-text-muted rounded-lg transition-colors text-sm"
        >
            <Globe className="w-4 h-4" />
            <span>{selectedLanguage}-{selectedCurrency.split(' ')[0]}</span>
            <ChevronDown className="w-4 h-4" />
        </button>

        {/* Language/Currency Dropdown */}
        {isLanguageCurrencyDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Set language and currency
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Select your preferred language and currency. You can update the settings at any time.
                </p>
            </div>

            <div className="px-4 py-4 space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                    {languages.map((language) => (
                    <option key={language.code} value={language.name}>
                        {language.name}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Currency</label>
                <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                    {currencies.map((currency) => (
                    <option key={currency.code} value={currency.name}>
                        {currency.name}
                    </option>
                    ))}
                </select>
                </div>

                <button
                onClick={handleLanguageCurrencySave}
                className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                Save
                </button>
            </div>
            </div>
        )}
    </div>
  );
};

export default LangCurrencyDropdown;