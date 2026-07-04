import { createContext } from "react";

export const Contexto = createContext({
  imagenes: [],
  loading: true,
  error: null,
  getImageUrl: () => null
});