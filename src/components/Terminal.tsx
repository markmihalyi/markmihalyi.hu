import React from 'react';

type Props = {
  className: string;
  title: string;
  children?: React.ReactNode;
};

const Terminal: React.FC<Props> = ({ className, title, children }) => {
  return (
    <div
      className={`flex ${className} h-full flex-col rounded-2xl border border-widget-lightgray bg-widget-dark opacity-80`}
    >
      <div className="mx-3 mt-2 flex place-items-center items-center md:mx-5">
        <div className="mr-auto inline-flex h-full items-center justify-center">
          <span className="mr-[1.2vw] inline-block h-[2.2vw] max-h-[1.1rem] w-[2.2vw] max-w-[1.1rem] rounded-[50%] bg-widget-red sm:mr-[0.8vw] sm:h-[1.4vw] sm:w-[1.4vw] md:mr-[0.7vw] md:h-[1vw] md:w-[1vw] lg:mr-[0.5vw] xl:h-[0.7vw] xl:w-[0.7vw] 4xl:mr-[9.6px] 4xl:h-[13.44px] 4xl:w-[13.44px]" />
          <span className="mr-[1.2vw] inline-block h-[2.2vw] max-h-[1.1rem] w-[2.2vw] max-w-[1.1rem] rounded-[50%] bg-widget-yellow sm:mr-[0.8vw] sm:h-[1.4vw] sm:w-[1.4vw] md:mr-[0.7vw] md:h-[1vw] md:w-[1vw] lg:mr-[0.5vw] xl:h-[0.7vw] xl:w-[0.7vw] 4xl:mr-[9.6px] 4xl:h-[13.44px] 4xl:w-[13.44px]" />
          <span className="inline-block h-[2.2vw] max-h-[1.1rem] w-[2.2vw] max-w-[1.1rem] rounded-[50%] bg-widget-green sm:h-[1.4vw] sm:w-[1.4vw] md:h-[1vw] md:w-[1vw] xl:h-[0.7vw] xl:w-[0.7vw] 4xl:h-[13.44px] 4xl:w-[13.44px]" />
        </div>
        <div className="mr-auto -ml-12 inline-flex items-center justify-center rounded-[5px] bg-widget-gray px-6 sm:px-12 md:h-5">
          <span className="cursor-default select-none font-fira-sans text-xs font-light tracking-wide text-white">
            {title}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Terminal;
