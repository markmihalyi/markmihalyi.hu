import React from 'react';

type Props = {
  className?: string;
  property: string;
  value: string | Array<string>;
};

const Code: React.FC<Props> = ({ className, property, value }) => {
  return (
    <p className={className}>
      <span className="ml-4 text-code-blue md:ml-8">{property} </span>

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
