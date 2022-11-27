import React from 'react';

type Props = {
  className?: string;
  property: string;
  value: string | Array<string>;
};

const Code: React.FC<Props> = ({ className, property, value }) => {
  return (
    <p className={'md:py-[0.1vw] lg:py-[0.3vw] xl:py-[0.1vw] 2xl:py-[0.25vw] ' + className}>
      <span className="ml-4 text-code-blue md:ml-8 lg:ml-[1.7vw]">{property} </span>

      {Array.isArray(value) ? (
        <>
          <span className="text-code-light">= {'['}</span>
          {value.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-code-light">{"'"}</span>
              <span className="text-code-lightblue">{item}</span>
              {index === value.length - 1 ? (
                <span className="text-code-light">{"'"}</span>
              ) : (
                <span className="text-code-light">{"', "}</span>
              )}
            </React.Fragment>
          ))}
          <span className="text-code-light">{']'};</span>
        </>
      ) : (
        <>
          <span className="text-code-light">= {"'"}</span>
          <span className="text-code-lightblue">{value}</span>
          <span className="text-code-light">{"'"};</span>
        </>
      )}
    </p>
  );
};

export default Code;
