import { createContext, useContext } from 'react';

const ContentDetailCtx = createContext(null);
export const { Provider, Consumer } = ContentDetailCtx;

export const useContentDetailCtx = () => useContext(ContentDetailCtx);
