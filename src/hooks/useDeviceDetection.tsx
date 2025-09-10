import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouchDevice: boolean;
  userAgent: string;
  platform: string;
}

export const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    // Initial state with safe defaults for SSR
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isTouchDevice: false,
      userAgent: '',
      platform: ''
    };
  });

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator.platform.toLowerCase();
      
      // Mobile device patterns
      const mobilePatterns = [
        /android/i,
        /webos/i,
        /iphone/i,
        /ipad/i,
        /ipod/i,
        /blackberry/i,
        /windows phone/i,
        /mobile/i
      ];

      // Tablet specific patterns
      const tabletPatterns = [
        /ipad/i,
        /android(?!.*mobile)/i,
        /tablet/i
      ];

      const isMobileDevice = mobilePatterns.some(pattern => pattern.test(userAgent));
      const isTabletDevice = tabletPatterns.some(pattern => pattern.test(userAgent));
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // More specific mobile detection (excluding tablets)
      const isMobilePhone = isMobileDevice && !isTabletDevice;
      
      setDeviceInfo({
        isMobile: isMobilePhone,
        isTablet: isTabletDevice,
        isDesktop: !isMobileDevice,
        isTouchDevice,
        userAgent,
        platform
      });
    };

    detectDevice();
    
    // Re-detect on orientation change (for mobile devices)
    window.addEventListener('orientationchange', detectDevice);
    
    return () => {
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  return deviceInfo;
};