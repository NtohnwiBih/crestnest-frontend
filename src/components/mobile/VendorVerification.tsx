import { useRef, useState, type ChangeEvent } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface VendorVerificationProps {
  onBack: () => void;
  onSuccess: () => void;
}

const VendorVerification = ({ onBack, onSuccess }: VendorVerificationProps) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [termsChecked, setTermsChecked] = useState(false);
  const [biometricChecked, setBiometricChecked] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [, setIsUploading] = useState(false);
  const [scanningStep, setScanningStep] = useState(0);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleBack = () => {
    if (currentScreen === 1) {
      onBack();
    } else {
      setCurrentScreen(prev => prev - 1);
    }
  };

  const handleSuccess = () => {
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">
            {currentScreen <= 2 ? 'Verification' : 'Crest Nest'}
          </h1>
        </div>
      </div>

      {/* Screen 1: Initial Verification */}
      {currentScreen === 1 && (
        <div className="p-6">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center relative">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-lg flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-8 leading-tight">
            Get instant credibility by verifying your identity
          </h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mt-1">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Crest Nest verification provides identity verification services for vendors.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mt-1">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  You'll need to provide a valid government ID. We may display the issuing country.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mt-1">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  The name on your government ID will need to match your Crest Nest profile.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Button variant="link" className="text-primary font-medium p-0">
              How does this work?
            </Button>
          </div>

          <div className="space-y-4">
            <div className="text-xs text-muted-foreground text-center leading-relaxed">
              By clicking <span className="font-medium text-foreground">Verify with Crest Nest</span>, you consent to Crest Nest sharing a RequestID and a link to your Crest Nest profile with Crest Nest verification, in accordance with <Button variant="link" className="text-primary p-0 h-auto text-xs">Crest Nest's Privacy Policy</Button>.
              <br />
              <Button variant="link" className="text-primary p-0 h-auto text-xs mt-1">Learn more</Button>
            </div>
            
            <Button onClick={() => goToScreen(2)} className="w-full rounded-xl h-12">
              Verify with Crest Nest
            </Button>
            
            <Button variant="ghost" className="w-full" onClick={handleBack}>
              Not now
            </Button>
          </div>
        </div>
      )}

      {/* Screen 2: Country Selection */}
      {currentScreen === 2 && (
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Select a country</h2>
            <p className="text-muted-foreground">
              This is the country that issued your government ID (e.g., passport, driver's license)
            </p>
          </div>

          <div className="mb-8">
            <select className="w-full p-4 border rounded-xl bg-background appearance-none">
              <option>Cameroon</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>

          <div className="space-y-6 mb-8">
            <label className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                className="w-5 h-5 mt-1 rounded border-2" 
              />
              <span className="text-sm text-muted-foreground leading-relaxed">
                I agree to <Button variant="link" className="text-primary p-0 h-auto text-sm">Crest Nest's Terms of Use</Button>. I acknowledge and accept that Crest Nest will collect and use my personal information in accordance with <Button variant="link" className="text-primary p-0 h-auto text-sm">Crest Nest's Privacy Policy</Button>.
              </span>
            </label>

            <label className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                checked={biometricChecked}
                onChange={(e) => setBiometricChecked(e.target.checked)}
                className="w-5 h-5 mt-1 rounded border-2" 
              />
              <span className="text-sm text-muted-foreground leading-relaxed">
                I consent to Crest Nest collecting, using and utilizing its third-party service providers processing my <Button variant="link" className="text-primary p-0 h-auto text-sm">biometric information</Button> to verify my identity and for fraud prevention.
              </span>
            </label>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Crest Nest deletes facial geometry data immediately after processing, while other data (selfie, ID) is retained for up to 30 days.
            </div>
            
            <Button 
              onClick={() => goToScreen(3)} 
              disabled={!isContinueEnabled}
              className={`w-full rounded-xl h-12 ${
                isContinueEnabled 
                  ? '' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Continue
            </Button>

            <div className="flex justify-center items-center space-x-1 text-xs text-muted-foreground">
              <span>Secured with</span>
              <span className="font-bold text-primary">Crest Nest</span>
            </div>
          </div>
        </div>
      )}

      {/* Screen 3: Symbol Check */}
      {currentScreen === 3 && (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 leading-tight">
            Do you see this symbol on the front or back of your ID?
          </h2>
          
          <p className="text-muted-foreground mb-12 leading-relaxed">
            If you see this symbol, your government ID contains a chip that can be scanned using your mobile device.
          </p>

          <div className="flex justify-center mb-16">
            <div className="w-32 h-20 bg-black rounded-lg flex items-center justify-center">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border-4 border-white rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button onClick={() => goToScreen(4)} className="w-full rounded-xl h-12">
              Yes, continue
            </Button>
            
            <Button variant="outline" className="w-full rounded-xl h-12">
              I'm unable to do this now
            </Button>
          </div>
        </div>
      )}

      {/* Screen 4: Photo Instructions */}
      {currentScreen === 4 && (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Front of Government ID</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Take a clear photo of the front of your government ID. Camera capture with a mobile device will improve photo quality.
          </p>

          <div className="flex justify-center mb-16">
            <div className="w-full h-48 bg-orange-50 rounded-xl flex items-center justify-center">
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

          <div className="space-y-4">
            <Button onClick={() => goToScreen(5)} className="w-full rounded-xl h-12 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Take Photo</span>
            </Button>
            
            <input 
              type="file" 
              ref={fileInputRef}
              accept="image/*" 
              style={{ display: 'none' }} 
              onChange={handleFileUpload}
            />
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()} 
              className="w-full rounded-xl h-12 flex items-center justify-center space-x-2"
            >
              <span>Upload from Gallery</span>
            </Button>
          </div>
        </div>
      )}

      {/* Screen 5: Camera Interface */}
      {currentScreen === 5 && (
        <div className="bg-black min-h-screen relative">
          <div className="absolute top-4 left-4 right-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="text-white rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center px-4 py-20 h-full">
            <Card className="w-full max-w-sm bg-background/90 rounded-2xl p-6 relative">
              <div className="aspect-[3/2] bg-gradient-to-br from-muted to-muted/80 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 w-16 h-16 bg-background rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                {/* ID mockup elements */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="space-y-1">
                    <div className="flex space-x-1">
                      <div className="flex-1 h-1 bg-background/60"></div>
                      <div className="flex-1 h-1 bg-background/60"></div>
                      <div className="flex-1 h-1 bg-background/60"></div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="flex-1 h-1 bg-background/60"></div>
                      <div className="flex-1 h-1 bg-background/60"></div>
                      <div className="flex-1 h-1 bg-background/60"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border-2 border-primary rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <p className="text-foreground text-sm">
                  Place the front of your ID in the frame
                </p>
              </div>
            </Card>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <button onClick={capturePhoto} className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-background rounded-full"></div>
            </button>
          </div>
        </div>
      )}

      {/* Screen 6: Scanning Interface */}
      {currentScreen === 6 && (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Scanning your ID</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Please wait while we process your government ID. This may take a few moments.
          </p>

          <div className="flex justify-center mb-8">
            <Card className="w-full max-w-sm h-48 bg-muted rounded-2xl relative overflow-hidden border-2">
              <div 
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/80"
                style={uploadedImageUrl ? {
                  backgroundImage: `url(${uploadedImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : {}}
              >
                {!uploadedImageUrl && (
                  <>
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    {/* ID mockup elements */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="space-y-1">
                        <div className="flex space-x-1">
                          <div className="flex-1 h-1 bg-background/60"></div>
                          <div className="flex-1 h-1 bg-background/60"></div>
                          <div className="flex-1 h-1 bg-background/60"></div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="flex-1 h-1 bg-background/60"></div>
                          <div className="flex-1 h-1 bg-background/60"></div>
                          <div className="flex-1 h-1 bg-background/60"></div>
                        </div>
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
                  background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--primary)) 20%, hsl(var(--primary)) 80%, transparent 100%)',
                  boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))',
                  animation: 'scanBeam 2s linear infinite'
                }}
              ></div>
            </Card>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full h-2 bg-muted rounded-lg overflow-hidden">
              <div 
                className="h-full bg-primary rounded-lg transition-all duration-1000"
                style={{ width: `${Math.min(scanningStep * 33.33, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Status Text */}
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
            </div>
          </div>

          {/* Scanning Steps */}
          <div className="space-y-4 mb-8">
            {[
              'Reading document information',
              'Verifying security features', 
              'Validating document authenticity'
            ].map((step, index) => (
              <div key={index} className={`flex items-center space-x-3 ${
                scanningStep > index ? 'text-green-600' : scanningStep === index ? 'text-primary' : 'text-muted-foreground'
              }`}>
                <div className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center ${
                  scanningStep > index ? 'bg-green-600 border-green-600' : 
                  scanningStep === index ? 'border-primary' : 'border-muted'
                }`}>
                  {scanningStep > index ? (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : scanningStep === index ? (
                    <div className="w-2 h-2 bg-primary rounded-lg animate-pulse"></div>
                  ) : null}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-4">
              This process typically takes 10-30 seconds. Please do not close this window.
            </div>
            <div className="flex justify-center items-center space-x-2 text-xs text-muted-foreground">
              <span>Secured with</span>
              <span className="font-bold text-primary">Crest Nest</span>
            </div>
          </div>
        </div>
      )}

      {/* Upload Progress Overlay */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="p-6 m-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Uploading Image</h3>
            <p className="text-muted-foreground mb-4">Please wait while we process your uploaded ID...</p>
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </Card>
        </div>
      )}

      {/* Success Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="p-6 m-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">ID Verified Successfully!</h3>
            <p className="text-muted-foreground mb-4">Your government ID has been successfully verified and processed.</p>
            <Button onClick={handleSuccess} className="w-full rounded-xl">
              Complete Verification
            </Button>
          </Card>
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
    </div>
  );
};

export default VendorVerification;