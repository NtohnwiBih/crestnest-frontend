import React, { useState, useRef, type ChangeEvent } from "react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose }) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [termsChecked, setTermsChecked] = useState(false);
  const [biometricChecked, setBiometricChecked] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [, setIsUploading] = useState(false);
  const [scanningStep, setScanningStep] = useState(0);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const goToScreen = (screenNumber: number) => {
    setCurrentScreen(screenNumber);
    if (screenNumber === 6) {
      startScanningSequence();
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === 'string') {
            setUploadedImageUrl(e.target.result);
            setIsUploading(true);
            setShowUploadModal(true);
            setTimeout(() => {
            setShowUploadModal(false);
            setIsUploading(false);
            goToScreen(6);
            }, 2000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const capturePhoto = () => {
    // Flash effect simulation
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: fixed;
      inset: 0;
      background: white;
      opacity: 0;
      pointer-events: none;
      z-index: 1000;
      transition: opacity 0.1s ease;
    `;
    document.body.appendChild(flash);
    
    requestAnimationFrame(() => {
      flash.style.opacity = '0.8';
      setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(flash);
          goToScreen(6);
        }, 100);
      }, 100);
    });
  };

  const startScanningSequence = () => {
    const steps = ['Reading document information', 'Verifying security features', 'Validating document authenticity'];
    let currentStepIndex = 0;
    
    const progressSteps = () => {
      if (currentStepIndex < steps.length) {
        setScanningStep(currentStepIndex + 1);
        currentStepIndex++;
        
        if (currentStepIndex <= steps.length) {
          setTimeout(progressSteps, 2000);
        } else {
          setTimeout(() => {
            setShowSuccessModal(true);
          }, 2000);
        }
      }
    };
    
    setTimeout(progressSteps, 1000);
  };

  const isContinueEnabled = termsChecked && biometricChecked;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-12">
        <div className="w-full h-full max-w-md mx-auto bg-white relative overflow-hidden rounded-lg">
          
          {/* Screen 1: Initial Verification */}
          {currentScreen === 1 && (
            <div className="bg-white min-h-screen relative">
              <div className="flex items-center justify-between p-4">
                <h1 className="text-lg font-semibold">Verification</h1>
                <button onClick={() => setShowCloseModal(true)} className="p-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="px-6 pt-8 pb-6">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center relative">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center mb-8 leading-tight">
                  Get instant credibility by verifying your identity
                </h2>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 leading-relaxed text-sm">
                        Crest Nest verification provides identity verification services for vendors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 leading-relaxed text-sm">
                        You'll need to provide a valid government ID. We may display the issuing country.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 leading-relaxed text-sm">
                        The name on your government ID will need to match your Crest Nest profile.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <button className="text-primary font-medium">
                    How does this work?
                  </button>
                </div>
              </div>

              <div className="absolute left-0 right-0 p-6 bg-white">
                <div className="text-xs text-gray-500 text-center mb-4 leading-relaxed">
                  By clicking <span className="font-medium text-gray-700">Verify with Crest Nest</span>, you consent to Crest Nest sharing a RequestID and a link to your Crest Nest profile with Crest Nest verification, in accordance with <span className="text-primary">LinkedIn's Privacy Policy</span>.
                  <br />
                  <button className="text-primary mt-1">Learn more</button>
                </div>
                
                <button onClick={() => goToScreen(2)} className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg mb-4 hover:bg-secondary transition-colors">
                  Verify with Crest Nest
                </button>
                
                <button className="w-full text-gray-600 font-medium py-2" onClick={() => setShowCloseModal(true)}>
                  Not now
                </button>
              </div>
            </div>
          )}

          {/* Screen 2: Country Selection */}
          {currentScreen === 2 && (
            <div className="bg-white min-h-screen relative">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="text-primary font-bold text-lg">Crest Nest</div>
                <button onClick={() => setShowCloseModal(true)} className="p-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="px-6 pt-8">
                <h2 className="text-2xl font-bold mb-4">Select a country</h2>
                <p className="text-gray-600 mb-8">
                  This is the country that issued your government ID (e.g., passport, driver's license)
                </p>

                <div className="mb-8">
                  <select className="w-full p-4 border border-gray-300 rounded-lg text-lg bg-white appearance-none">
                    <option>Cameroon</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>

                <div className="space-y-4 mb-8">
                  <label className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      checked={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)}
                      className="w-5 h-5 mt-1 border-2 border-gray-300 rounded" 
                    />
                    <span className="text-gray-800 leading-relaxed">
                      I agree to <span className="text-primary">Crest Nest's Terms of Use</span>. I acknowledge and accept that Crest Nest will collect and use my personal information in accordance with <span className="text-primary">Crest Nest's Privacy Policy</span>.
                    </span>
                  </label>

                  <label className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      checked={biometricChecked}
                      onChange={(e) => setBiometricChecked(e.target.checked)}
                      className="w-5 h-5 mt-1 border-2 border-gray-300 rounded" 
                    />
                    <span className="text-gray-800 leading-relaxed">
                      I consent to Crest Nest collecting, using and utilizing its third-party service providers processing my <span className="text-primary">biometric information</span> to verify my identity and for fraud prevention.
                    </span>
                  </label>
                </div>
              </div>

              <div className="absolute left-0 right-0 p-6 bg-white">
                <div className="text-xs text-gray-500 mb-4">
                  Crest Nest deletes facial geometry data immediately after processing, while other data (selfie, ID) is retained for up to 30 days.
                </div>
                
                <button 
                  onClick={() => goToScreen(3)} 
                  disabled={!isContinueEnabled}
                  className={`w-full py-4 rounded-lg font-semibold text-lg mb-4 transition-colors ${
                    isContinueEnabled 
                      ? 'bg-primary text-white hover:bg-secondary cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>

                <div className="flex justify-center items-center space-x-2 text-xs text-gray-500">
                  <span>SECURED WITH</span>
                  <span className="font-bold text-gray-700">Crest Nest</span>
                </div>
              </div>
            </div>
          )}

          {/* Screen 3: Symbol Check */}
          {currentScreen === 3 && (
            <div className="bg-white min-h-screen relative">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="text-primary font-bold text-lg">Crest Nest</div>
                <button onClick={() => setShowCloseModal(true)} className="p-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="px-6 pt-8">
                <h2 className="text-2xl font-bold mb-6 leading-tight">
                  Do you see this symbol on the front or back of your ID?
                </h2>
                
                <p className="text-gray-600 mb-12 leading-relaxed">
                  If you see this symbol, your government ID contains a chip that can be scanned using your mobile device.
                </p>

                <div className="flex justify-center mb-4">
                  <div className="w-32 h-20 bg-black rounded-lg flex items-center justify-center">
                    <div className="relative w-8 h-8">
                      <div className="absolute inset-0 border-4 border-white rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 right-0 p-6 bg-white">
                <button onClick={() => goToScreen(4)} className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg mb-4 hover:bg-secondary transition-colors">
                  Yes, continue
                </button>
                
                <button className="w-full border-2 border-primary text-primary py-4 rounded-lg font-semibold text-lg">
                  I'm unable to do this now
                </button>
              </div>
            </div>
          )}

          {/* Screen 4: Photo Instructions */}
          {currentScreen === 4 && (
            <div className="bg-white min-h-screen relative">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="w-6"></div>
                <div></div>
                <button onClick={() => setShowCloseModal(true)} className="p-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="px-6 pt-8">
                <h2 className="text-2xl font-bold mb-4">Front of Government ID</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Take a clear photo of the front of your government ID. Camera capture with a mobile device will improve photo quality.
                </p>

                <div className="flex justify-center mb-16">
                  <div className="w-full h-48 bg-orange-50 rounded flex items-center justify-center">
                    <div className="w-20 h-16 border-2 border-primary rounded-lg flex items-center justify-center relative">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div className="absolute -right-1 -top-1 w-4 h-4 bg-primary rounded-sm"></div>
                      <div className="absolute right-1 top-2">
                        <div className="space-y-0.5">
                          <div className="w-8 h-0.5 bg-primary"></div>
                          <div className="w-6 h-0.5 bg-primary"></div>
                          <div className="w-8 h-0.5 bg-primary"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 right-0 p-6 bg-white">
                <button onClick={() => goToScreen(5)} className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg mb-4 hover:bg-secondary transition-colors flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Take Photo</span>
                </button>
                
                <input 
                  type="file" 
                  ref={fileInputRef}
                  accept="image/*" 
                  style={{ display: 'none' }} 
                  onChange={handleFileUpload}
                />
                <button
                 onClick={() => fileInputRef.current?.click()} 
                 className="w-full border-2 border-primary text-primary py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2">
                  Upload
                </button>
              </div>
            </div>
          )}

          {/* Screen 5: Camera Interface */}
          {currentScreen === 5 && (
            <div className="bg-black min-h-screen relative">
              <div className="flex items-center justify-between p-4 text-white">
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-1 h-2 bg-white rounded-sm"></div>
                </div>
                <button onClick={() => setShowCloseModal(true)} className="p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div 
                className="flex items-center justify-center px-4"
                style={{
                  height: 'calc(100vh - 200px)',
                }}
              >
                <div className="w-full max-w-sm bg-white/90 rounded-2xl p-6 relative">
                  <div className="aspect-[3/2] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="relative z-10 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="space-y-1">
                        <div className="flex space-x-1">
                          <div className="flex-1 h-1 bg-white/60"></div>
                          <div className="flex-1 h-1 bg-white/60"></div>
                          <div className="flex-1 h-1 bg-white/60"></div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="flex-1 h-1 bg-white/60"></div>
                          <div className="flex-1 h-1 bg-white/60"></div>
                          <div className="flex-1 h-1 bg-white/60"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 space-y-1">
                      <div className="w-8 h-4 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                        ATM
                      </div>
                      <div className="w-8 h-4 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        VISA
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 border-2 border-primary rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-sm">
                      Place the front of your ID in the frame
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-white text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
                <span>Capture Tips</span>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
                <button onClick={capturePhoto} className="w-16 h-16 border-4 border-white rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-lg"></div>
                </button>
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-1 bg-white/30 rounded-lg"></div>
              </div>
            </div>
          )}

          {/* Screen 6: Scanning Interface */}
          {currentScreen === 6 && (
            <div className="bg-white min-h-screen relative">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="text-primary font-bold text-lg">Crest Nest</div>
                <button onClick={() => setShowCloseModal(true)} className="p-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="px-6 pt-8">
                <h2 className="text-2xl font-bold mb-4">Scanning your ID</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Please wait while we process your government ID. This may take a few moments.
                </p>

                <div className="flex justify-center mb-8">
                  <div className="w-80 h-48 bg-gray-50 rounded-2xl relative overflow-hidden border-2 border-gray-200">
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300"
                      style={uploadedImageUrl ? {
                        backgroundImage: `url(${uploadedImageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      } : {}}
                    >
                      {!uploadedImageUrl && (
                        <>
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="space-y-1">
                              <div className="flex space-x-1">
                                <div className="flex-1 h-1 bg-white/60"></div>
                                <div className="flex-1 h-1 bg-white/60"></div>
                                <div className="flex-1 h-1 bg-white/60"></div>
                              </div>
                              <div className="flex space-x-1">
                                <div className="flex-1 h-1 bg-white/60"></div>
                                <div className="flex-1 h-1 bg-white/60"></div>
                                <div className="flex-1 h-1 bg-white/60"></div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 space-y-1">
                            <div className="w-8 h-4 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                              ATM
                            </div>
                            <div className="w-8 h-4 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              VISA
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Scanning Animations */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(34, 194, 127, 0.3) 50%, transparent 100%)',
                        animation: 'scan 2s linear infinite'
                      }}
                    ></div>
                    
                    <div 
                      className="absolute top-0 bottom-0 w-1"
                      style={{
                        background: 'linear-gradient(to bottom, transparent 0%, #07df85ff 20%, #59f7b5ff 50%, #1fc781ff 80%, transparent 100%)',
                        boxShadow: '0 0 20px #1fc781ff, 0 0 40px #1fc781ff',
                        animation: 'scanBeam 2s linear infinite'
                      }}
                    ></div>
                    
                    {/* Corner Indicators */}
                    <div className="absolute top-2 left-2 w-4 h-4">
                      <div className="w-2 h-0.5 bg-primary"></div>
                      <div className="w-0.5 h-2 bg-primary"></div>
                    </div>
                    <div className="absolute top-2 right-2 w-4 h-4 flex justify-end">
                      <div className="w-2 h-0.5 bg-primary"></div>
                      <div className="absolute right-0 w-0.5 h-2 bg-primary"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 w-4 h-4">
                      <div className="w-0.5 h-2 bg-primary"></div>
                      <div className="w-2 h-0.5 bg-primary mt-1.5"></div>
                    </div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 flex justify-end">
                      <div className="absolute right-0 w-0.5 h-2 bg-primary"></div>
                      <div className="w-2 h-0.5 bg-primary mt-1.5"></div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full h-1 bg-orange-200 rounded-lg overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-teal-500 rounded-lg transition-all duration-1000"
                      style={{ width: `${Math.min(scanningStep * 33.33, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status Text with Animated Dots */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 text-primary font-medium">
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    <span>
                      {scanningStep === 0 && 'Analyzing document'}
                      {scanningStep === 1 && 'Reading document information'}
                      {scanningStep === 2 && 'Verifying security features'}
                      {scanningStep === 3 && 'Validating document authenticity'}
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-lg animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-lg animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Scanning Steps */}
                <div className="space-y-3 mb-8">
                  <div className={`flex items-center space-x-3 ${scanningStep >= 1 ? 'text-green-600' : scanningStep === 0 ? 'text-primary' : 'text-gray-400'}`}>
                    <div className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center ${
                      scanningStep >= 1 ? 'bg-green-500 border-green-500' : scanningStep === 0 ? 'border-primary' : 'border-gray-300'
                    }`}>
                      {scanningStep >= 1 ? (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : scanningStep === 0 ? (
                        <div className="w-2 h-2 bg-primary rounded-lg animate-pulse"></div>
                      ) : null}
                    </div>
                    <span>Reading document information</span>
                  </div>
                  
                  <div className={`flex items-center space-x-3 ${scanningStep >= 2 ? 'text-green-600' : scanningStep === 1 ? 'text-primary' : 'text-gray-400'}`}>
                    <div className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center ${
                      scanningStep >= 2 ? 'bg-green-500 border-green-500' : scanningStep === 1 ? 'border-primary' : 'border-gray-300'
                    }`}>
                      {scanningStep >= 2 ? (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : scanningStep === 1 ? (
                        <div className="w-2 h-2 bg-primary rounded-lg animate-pulse"></div>
                      ) : null}
                    </div>
                    <span>Verifying security features</span>
                  </div>
                  
                  <div className={`flex items-center space-x-3 ${scanningStep >= 3 ? 'text-green-600' : scanningStep === 2 ? 'text-primary' : 'text-gray-400'}`}>
                    <div className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center ${
                      scanningStep >= 3 ? 'bg-green-500 border-green-500' : scanningStep === 2 ? 'border-primary' : 'border-gray-300'
                    }`}>
                      {scanningStep >= 3 ? (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : scanningStep === 2 ? (
                        <div className="w-2 h-2 bg-primary rounded-lg animate-pulse"></div>
                      ) : null}
                    </div>
                    <span>Validating document authenticity</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
                <div className="text-xs text-gray-500 text-center mb-4">
                  This process typically takes 10-30 seconds. Please do not close this window.
                </div>

                <div className="flex justify-center items-center space-x-2 text-xs text-gray-500">
                  <span>SECURED WITH</span>
                  <span className="font-bold text-gray-700">Crest Nest</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Close Confirmation Modal */}
      {showCloseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 mx-4 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Close Verification?</h3>
            <p className="text-gray-600 mb-4">Are you sure you want to close the verification flow?</p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowCloseModal(false)} 
                className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowCloseModal(false);
                  onClose();
                }} 
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Progress Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 mx-4 max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Uploading Image</h3>
            <p className="text-gray-600 mb-4">Please wait while we process your uploaded ID...</p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 mx-4 max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">ID Verified Successfully!</h3>
            <p className="text-gray-600 mb-4">Your government ID has been successfully verified and processed.</p>
            <button 
              onClick={() => {
                setShowSuccessModal(false);
                onClose();
              }} 
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Complete Verification
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scanBeam {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default VerificationModal;