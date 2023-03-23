//This components is created to apply styles accross elements and pages.
//FC stands for Functional Component. It tells TS that this function is a FC.  We pass generics in <> braces in the form of an object in {} to assign all possible data types of children.

import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-screen-2xl mx-auto">{children}</div>;
};

export default Wrapper;
