import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface PaymentMethod {
  label: string;
  bgColor: string;
  textColor?: string;
}

interface SocialMedia {
  icon: string;
  bgColor: string;
  hoverColor: string;
  href: string;
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Get support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Live chat", href: "#" },
        { label: "Check order status", href: "#" },
        { label: "Refunds", href: "#" },
        { label: "Report abuse", href: "#" }
      ]
    },
    {
      title: "Payments and protections",
      links: [
        { label: "Safe and easy payments", href: "#" },
        { label: "Money-back policy", href: "#" },
        { label: "On-time shipping", href: "#" },
        { label: "After-sales protections", href: "#" },
        { label: "Product monitoring services", href: "#" }
      ]
    },
    {
      title: "Source on Crest Nest",
      links: [
        { label: "Request for Quotation", href: "#" },
        { label: "Membership program", href: "#" },
        { label: "Crest Nest Logistics", href: "#" },
        { label: "Sales tax and VAT", href: "#" },
        { label: "Crest Nest Reads", href: "#" }
      ]
    },
    {
      title: "Sell on Crest Nest",
      links: [
        { label: "Start selling", href: "#" },
        { label: "Seller Central", href: "#" },
        { label: "Become a Verified Supplier", href: "#" },
        { label: "Partnerships", href: "#" },
        { label: "Download the app for suppliers", href: "#" }
      ]
    },
    {
      title: "Get to know us",
      links: [
        { label: "About Crest Nest", href: "#" },
        { label: "Corporate responsibility", href: "#" },
        { label: "News center", href: "#" },
        { label: "Careers", href: "#" }
      ]
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    { label: "MC", bgColor: "bg-red-600" },
    { label: "ID", bgColor: "bg-blue-600" },
    { label: "✓", bgColor: "bg-green-600" },
    { label: "V", bgColor: "bg-gray-600" },
    { label: "V", bgColor: "bg-blue-800" },
    { label: "A", bgColor: "bg-blue-900" },
    { label: "WU", bgColor: "bg-yellow-400", textColor: "text-black" },
    { label: "TT", bgColor: "bg-orange-500" },
    { label: "VISA", bgColor: "bg-blue-700" },
    { label: "MC", bgColor: "bg-red-600" },
    { label: "AMEX", bgColor: "bg-blue-600" },
    { label: "PP", bgColor: "bg-blue-800" },
    { label: "PAY", bgColor: "bg-black" },
    { label: "GP", bgColor: "bg-gray-600" },
    { label: "DC", bgColor: "bg-orange-600" },
    { label: "DN", bgColor: "bg-blue-500" },
    { label: "JCB", bgColor: "bg-green-700" },
    { label: "UE", bgColor: "bg-blue-600" },
    { label: "TT", bgColor: "bg-gray-700" }
  ];

  const socialMediaLinks: SocialMedia[] = [
    { icon: "f", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700", href: "#" },
    { icon: "in", bgColor: "bg-blue-700", hoverColor: "hover:bg-blue-800", href: "#" },
    { icon: "t", bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500", href: "#" },
    { icon: "ig", bgColor: "bg-pink-500", hoverColor: "hover:bg-pink-600", href: "#" },
    { icon: "yt", bgColor: "bg-red-600", hoverColor: "hover:bg-red-700", href: "#" },
    { icon: "tk", bgColor: "bg-black", hoverColor: "hover:bg-gray-800", href: "#" }
  ];

  const alibabaServices: FooterLink[] = [
    { label: "AliExpress", href: "#" },
    { label: "1688.com", href: "#" },
    { label: "Tmall Taobao World", href: "#" },
    { label: "Alipay", href: "#" },
    { label: "Lazada", href: "#" },
    { label: "Taobao Global", href: "#" },
    { label: "TAO", href: "#" },
    { label: "Trendyol", href: "#" },
    { label: "Europages", href: "#" }
  ];

  const legalLinks: FooterLink[] = [
    { label: "Policies and rules", href: "#" },
    { label: "Legal Notice", href: "#" },
    { label: "Product Listing Policy", href: "#" },
    { label: "Intellectual Property Protection", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Integrity Compliance", href: "#" }
  ];

  const renderFooterSection = (section: FooterSection) => (
    <div key={section.title}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {section.title}
      </h3>
      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderPaymentMethod = (payment: PaymentMethod, index: number) => (
    <div
      key={`${payment.label}-${index}`}
      className={`w-12 h-6 ${payment.bgColor} rounded flex items-center justify-center`}
    >
      <span className={`text-xs font-bold ${payment.textColor || 'text-white'}`}>
        {payment.label}
      </span>
    </div>
  );

  const renderSocialMediaIcon = (social: SocialMedia) => (
    <a
      key={social.icon}
      href={social.href}
      className={`w-8 h-8 ${social.bgColor} ${social.hoverColor} rounded flex items-center justify-center cursor-pointer transition-colors`}
    >
      <span className="text-white text-sm font-bold">{social.icon}</span>
    </a>
  );

  const renderAppStoreButton = (store: 'app' | 'google', label: string, subLabel: string) => (
    <div className="bg-black rounded px-3 py-2 cursor-pointer hover:bg-gray-800 transition-colors">
      <div className="text-white text-xs">
        <div className="text-xs opacity-75">{subLabel}</div>
        <div className="font-bold">{label}</div>
      </div>
    </div>
  );

  const renderLinksList = (links: FooterLink[], separator: string = "|") => (
    <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
      {links.map((link, index) => (
        <React.Fragment key={link.label}>
          <a href={link.href} className="hover:text-primary transition-colors">
            {link.label}
          </a>
          {index < links.length - 1 && <span>{separator}</span>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-5 gap-8">
          {footerSections.map(renderFooterSection)}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          {/* <div className="flex flex-wrap items-center gap-2 mb-8">
            {paymentMethods.map(renderPaymentMethod)}
          </div> */}

          {/* Social Media and App Downloads */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            {/* Social Media Icons */}
            {/* <div className="flex items-center gap-4">
              {socialMediaLinks.map(renderSocialMediaIcon)}
            </div> */}

            {/* App Download Section */}
            {/* <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Trade on the go with the{" "}
                <a href="#" className="text-primary hover:underline transition-colors">
                  Crest Nest app
                </a>
              </span>
              <div className="flex gap-2">
                {renderAppStoreButton('app', 'App Store', 'Download on the')}
                {renderAppStoreButton('google', 'Google Play', 'GET IT ON')}
              </div>
            </div> */}
          </div>

          {/* Footer Links */}
          {/* <div className="text-center mb-6">
            {renderLinksList(alibabaServices)}
          </div> */}

          {/* Legal Links */}
          <div className="text-center mb-6">
            {renderLinksList(legalLinks, "·")}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-500">
            <p>© 2025 Crest Nest. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;