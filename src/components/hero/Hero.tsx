import { useEffect, useState } from "react";

function Typewrite({ text, speed, renderCount }: { text: string; speed: number; renderCount: number }) {
    if (renderCount > 1) {
        return (
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                Transform your Look!
            </h2>
        );
    }
    const [displayedText, setDisplayedText] = useState("");
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval); // cleanup
    }, [text, speed]);
  
    return (
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          {displayedText}
      </h2>
    );
  }

export default function Hero() {
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        const count = Number(localStorage.getItem("heroRenderCount") || "0") + 1;
        localStorage.setItem("heroRenderCount", count.toString());
        setRenderCount(count);
    }, [])

    return (
        <section className="bg-gradient-to-b from-pink-100 to-white dark:from-slate-800 dark:to-slate-900 py-16 shadow-lg">
        <div className="container mx-auto px-6 text-center">

        <Typewrite text="Transform your Look!" speed={40} renderCount={renderCount}/>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert hair styling, coloring, and extensions in Kings Mountain, North Carolina.
          </p>
          <a
            href="https://heathermelton.as.me/"
            target="_blank"
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg 
            font-semibold hover:bg-pink-800 transition-all shadow-md"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    );
}