/// <reference types="vite/client" />

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>>;
  const src: string;
  export default src;
}
declare module '*.svg?react' {
  const ReactComponent: React.FunctionComponent<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>>;
  export default ReactComponent;
}
