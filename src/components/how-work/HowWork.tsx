import { useEffect, useRef, useState } from 'react';
import img from './img/img.png';

export const HowWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [targetHeight, setTargetHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setLineHeight((prev) => {
        const diff = targetHeight - prev;
        const delta = diff * 0.1;
        if (Math.abs(diff) < 0.5) return targetHeight;
        return prev + delta;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [targetHeight]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startOffset = 0.1;
      const maxHeight = containerRef.current.offsetHeight;

      let progress =
        ((windowHeight - containerRect.top - startOffset * windowHeight) /
          (containerRect.height + windowHeight * (1 - startOffset))) *
        1.8;

      progress = Math.min(Math.max(progress, 0), 1);
      const height = progress * maxHeight;

      setTargetHeight(height);

      setShowSuccess(height >= maxHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wrapper-index container mx-auto max-w-[1202px] py-[48px] text-white md:px-[122px] md:py-[72px]">
      <h4 className="text-center text-[24px] font-semibold text-white md:text-[48px]">
        How We Work
      </h4>

      <div className="relative mt-[48px] pb-12 md:mt-[72px]" ref={containerRef}>
        <div
          ref={lineRef}
          className="absolute top-0 left-1/2 w-[3px]"
          style={{
            height: `${lineHeight}px`,
            background:
              'linear-gradient(to bottom, #F92672 0%, #FD971F 22%, #E6DB74 46%, #A6E22E 72%, #66D9EF 100%)',
            transition: 'height 0.1s linear',
          }}
        >
          {lineHeight > 0 && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-t-[8px] border-r-[8px] border-l-[8px] border-t-[#66D9EF] border-r-transparent border-l-transparent" />
          )}
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex items-start justify-end">
            <div className="text-[20px] font-semibold md:text-[32px]">
              1. Initial call
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-[12px] font-normal md:text-[24px]">
              A short intro to align on goals, ask the right questions, and see
              if we're a good fit. No pitch — just a real conversation.
            </div>
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-2 gap-16 md:mt-[96px]">
          <div className="order-2 flex items-center justify-center md:order-1">
            <div className="text-[12px] font-normal md:text-[24px]">
              We learn about your product, goals, and users — fast. No endless
              workshops, just sharp questions and useful context.
            </div>
          </div>
          <div className="order-1 flex items-start justify-end md:order-2 md:justify-start">
            <div className="text-[20px] font-semibold md:text-[32px]">
              2. Discovery
            </div>
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-2 gap-16 md:mt-[96px]">
          <div className="flex items-start justify-end">
            <div className="text-right text-[20px] font-semibold md:text-left md:text-[32px]">
              3. Scope & Setup
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-[12px] font-normal md:text-[24px]">
              We define the roadmap, assemble the team, and get the tools in
              place. You always know who’s doing what, and when.
            </div>
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-2 gap-16 md:mt-[96px]">
          <div className="eflex order-2 items-center justify-center md:order-1">
            <div className="text-[12px] font-normal md:text-[24px]">
              We design and develop in tight, transparent loops. Regular
              check-ins, async updates, zero chaos.
            </div>
          </div>
          <div className="order-1flex items-start justify-start md:order-2">
            <div className="text-right text-[20px] font-semibold md:text-left md:text-[32px]">
              4. Build and Design
            </div>
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-2 gap-16 md:mt-[96px]">
          <div className="flex items-start justify-end">
            <div className="text-right text-[20px] font-semibold md:text-left md:text-[32px]">
              5. Ship & Support
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-[12px] font-normal md:text-[24px]">
              You get a polished product — tested, deployed, and ready to grow.
              Need us after launch? We’re here.
            </div>
          </div>
        </div>
      </div>

      <div
        ref={successRef}
        className={`mt-[48px] flex w-full items-center justify-center transition-all duration-700 ease-out ${
          showSuccess ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div
          className="flex h-[178px] w-[343px] items-center justify-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        >
          <span className="text-5xl font-semibold">Success!</span>
        </div>
      </div>
    </div>
  );
};
