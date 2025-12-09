// types/css.d.ts
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module 'reactflow/dist/style.css';
declare module '@xyflow/react/dist/style.css';