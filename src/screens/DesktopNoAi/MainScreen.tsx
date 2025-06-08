export const DesktopNoAi = (): JSX.Element => {
  return (
    <main className="bg-[#405cff] flex flex-row justify-center w-full min-h-screen font-['Exo']">
      <div className="bg-[#405cff] w-full max-w-[1440px] relative">
        <div className="relative min-h-screen md:h-[908px] px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
          {/* Header with logo and social icons */}
          <header className="flex w-full max-w-[1280px] items-center justify-between mx-auto pt-6 sm:pt-8 md:pt-12">
            <div className="flex items-center">
              <a href="/" className="block h-8 sm:h-10">
                <img 
                  src="/Layer 3.png" 
                  alt="More Stuff Logo" 
                  className="h-full w-auto"
                />
              </a>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 ml-auto">
              <div className="relative">
                <a 
                  href="https://t.me/+hzE7jInTlSRiOGVk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 w-full h-full z-10"
                  aria-label="Únete a nuestro canal de Telegram"
                ></a>
                <div className="p-2 sm:p-3 -m-2 sm:-m-3 hover:opacity-80 transition-opacity">
                  <img
                    src="/telegram_icon.png"
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 relative z-0"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <img
                  src="/twitter_icon.png"
                  alt="Twitter"
                  className="w-full h-full"
                />
              </a>
            </div>
          </header>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1280px] mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-[-8px]">
            {/* Text and buttons */}
            <div className="w-full px-4 sm:px-6 lg:px-0 lg:w-[500px] text-center lg:text-left lg:ml-16 xl:ml-32">
              <h1 className="font-medium text-white text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-4 sm:mb-6">
                Get more<br className="hidden sm:block"/>stuff done!
              </h1>

              {/* Store buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6 sm:mt-8">
                <a href="#" className="block w-[140px] sm:w-[160px] mx-auto sm:mx-0 transition-transform hover:scale-105">
                  <img
                    src="/appstore.png"
                    alt="Download on the App Store"
                    className="w-full h-auto"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=io.middlepoint.morestuff&hl=en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[140px] sm:w-[160px] mx-auto sm:mx-0 transition-transform hover:scale-105"
                >
                  <img
                    src="/googleplay.png"
                    alt="Get it on Google Play"
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>

            {/* Phone mockups */}
            <div className="relative mt-12 sm:mt-16 lg:mt-0 w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[650px] h-[300px] sm:h-[450px] md:h-[550px] lg:h-[600px] mx-auto">
              <div className="relative w-full h-full">
                {/* Right phone (behind) */}
                <div className="absolute left-[65%] sm:left-[60%] lg:left-[35%] -translate-x-1/2 lg:translate-x-0 top-[10%] w-[220px] sm:w-[280px] md:w-[350px] lg:w-[500px] h-[330px] sm:h-[420px] md:h-[525px] lg:h-[750px] z-0">
                  <img
                    src="/Group 10.png"
                    alt="Chat interface"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
                {/* Left phone (in front) */}
                <div className="absolute left-[35%] sm:left-[30%] lg:left-[10%] -translate-x-1/2 lg:translate-x-0 top-[5%] w-[220px] sm:w-[280px] md:w-[350px] lg:w-[500px] h-[330px] sm:h-[420px] md:h-[525px] lg:h-[750px] z-10">
                  <img
                    src="/Group 9.png"
                    alt="Task list interface"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="absolute bottom-28 left-0 right-0">
            <div className="flex items-center justify-center gap-6">
              <a 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-sm hover:underline"
              >
                Privacy policy
              </a>
              <div className="text-white text-sm">
                2025 MiddlePoint Solutions
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
};