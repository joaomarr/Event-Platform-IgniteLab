import { createContext } from "react";

export interface SideBarContextData {
  isSideBarOpen: boolean
  setSideBarOpen: (s: boolean) => void
}

export const SideBarContext = createContext({} as SideBarContextData)