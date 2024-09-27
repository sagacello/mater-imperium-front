import React, { createContext } from "react";

export const SystemsDashboardGlobalContext = createContext({});

type MyComponentProps = React.PropsWithChildren;

export function SystemsDashboardGlobalProvider({
  children,
}: MyComponentProps): JSX.Element {
  return (
    <SystemsDashboardGlobalContext.Provider value={{}}>
      {children}
    </SystemsDashboardGlobalContext.Provider>
  );
}
