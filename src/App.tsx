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
    <div className="relative h-screen w-full bg-yellow-400 overflow-hidden">
      <HazardStripe position="top" />
      <HazardStripe position="bottom" />

      <div className="absolute bottom-[180px] right-6 sm:right-12 md:right-[80px] lg:right-[112px] text-right space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight">
          Under Construction
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-black/80 max-w-md ml-auto">
          We’re building something powerful. Stay tuned.
        </p>

        <div className="inline-block bg-black text-yellow-400 px-5 py-3 rounded-lg font-semibold tracking-wide shadow-lg rotate-[-2deg]">
          🚧 Coming Soon
        </div>
      </div>
    </div>
  );
}
