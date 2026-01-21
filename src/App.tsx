import "./App.css";

function HazardStripe() {
  return (
    <div
      className={`w-full h-20 flex-shrink-0
      bg-[repeating-linear-gradient(45deg,#000_0px,#000_20px,#facc15_20px,#facc15_40px)]`}
    />
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-[100svh] w-full bg-yellow-400">
      {/* Top Stripe */}
      <HazardStripe />

      {/* Content Area */}
      <div className="flex-1 relative">
        <div
          className="
            absolute
            right-6 sm:right-12 md:right-[80px] lg:right-[112px]
            bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20
            max-w-[90vw] sm:max-w-md
            text-right space-y-4
          "
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-tight">
            Under Construction
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black/80 ml-auto">
            Building something new.
          </p>

          <div className="inline-block bg-black text-yellow-400 px-5 py-3 rounded-lg font-semibold tracking-wide shadow-lg rotate-[-2deg]">
            🚧 Coming Soon
          </div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <HazardStripe />
    </div>
  );
}
