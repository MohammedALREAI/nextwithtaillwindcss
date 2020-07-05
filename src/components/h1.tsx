import React, { FunctionComponent } from 'react';

export const H1: FunctionComponent = ({ children }) => (
  <h1 className="text-center text-2xl sm:text-3xl md:text-6xl">{children}</h1>
);
