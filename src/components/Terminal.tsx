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
          <span className="mr-1 inline-block h-2 w-2 rounded-[50%] bg-widget-red md:mr-2.5 md:h-2.5 md:w-2.5" />
          <span className="mr-1 inline-block h-2 w-2 rounded-[50%] bg-widget-yellow md:mr-2.5 md:h-2.5 md:w-2.5" />
          <span className="inline-block h-2 w-2 rounded-[50%] bg-widget-green md:h-2.5 md:w-2.5" />
        </div>
        <div className="mr-auto -ml-12 inline-flex items-center justify-center rounded-[5px] bg-widget-gray px-6 sm:px-12 md:h-5 md:w-72">
          <h6 className="cursor-default select-none font-fira-sans text-xs font-light tracking-wide text-white">
            {title}
          </h6>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Terminal;
