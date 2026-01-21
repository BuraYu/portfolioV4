import "./App.css";

import "./App.css";

type HazardStripeProps = {
  position: "top" | "bottom";
};

function HazardStripe({ position }: HazardStripeProps) {
  return (
    <div
      className={`absolute ${position}-0 left-0 w-full h-20
      bg-[repeating-linear-gradient(45deg,#000_0px,#000_20px,#facc15_20px,#facc15_40px)]`}
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-[100svh] w-full bg-yellow-400 overflow-hidden">
      {/* Stripes */}
      <HazardStripe position="top" />
      <HazardStripe position="bottom" />

      {/* Content */}
      <div
        className="
          absolute
          right-6 sm:right-12 md:right-[80px] lg:right-[112px]
          bottom-32 sm:bottom-40 md:bottom-[140px] lg:bottom-[180px]
          top-28
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
  );
}
