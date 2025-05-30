export const DesktopNoAi = (): JSX.Element => {
  return (
    <main className="bg-[#405cff] flex flex-row justify-center w-full min-h-screen font-['Exo']">
      <div className="bg-[#405cff] w-full max-w-[1440px] relative">
        <div className="relative min-h-screen md:h-[908px] px-8 md:px-16 lg:px-24 xl:px-32">
          {/* Header with logo and social icons */}
          <header className="flex w-full max-w-[1280px] items-center justify-between mx-auto pt-12 px-4 lg:px-0">
            <div className="flex items-center">
              <a href="/" className="block h-10">
                <img 
                  src="/Layer 3.png" 
                  alt="More Stuff Logo" 
                  className="h-full w-auto"
                />
              </a>
            </div>

            <div className="flex items-center gap-6 ml-auto">
              <div className="relative">
                <a 
                  href="https://t.me/+hzE7jInTlSRiOGVk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 w-full h-full z-10"
                  aria-label="Únete a nuestro canal de Telegram"
                ></a>
                <div className="p-3 -m-3 hover:opacity-80 transition-opacity">
                  <img
                    src="/telegram_icon.png"
                    alt=""
                    className="w-8 h-8 relative z-0"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-8 h-8 hover:opacity-80 transition-opacity"
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
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1280px] mx-auto mt-[-8px]">
            {/* Text and buttons */}
            <div className="w-full lg:w-[500px] text-left lg:ml-16 xl:ml-32">
              <h1 className="font-medium text-white text-[64px] leading-[70px] mb-6">
                Get more<br />stuff done!
              </h1>

              {/* Store buttons */}
              <div className="flex gap-4 mt-8">
                <a href="#" className="block w-[160px] transition-transform hover:scale-105">
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
                  className="block w-[160px] transition-transform hover:scale-105"
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
            <div className="relative mt-16 lg:mt-0 w-full max-w-[650px] h-[600px]"style={{ transform: 'translateX(-60px)' }}>
              <div className="relative w-full h-full">
                {/* Right phone (behind) */}
                <div className="absolute left-[35%] top-[10%] w-[500px] h-[750px] z-0">
                  <img
                    src="/Group 10.png"
                    alt="Chat interface"
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
                {/* Left phone (in front) */}
                <div className="absolute left-[10%] top-[5%] w-[500px] h-[750px] z-10">
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
                href="https://morestuff.netlify.app/privacy/" 
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