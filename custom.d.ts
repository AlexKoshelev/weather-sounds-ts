declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.mp3" {
  const content: any;
  export default content;
}
declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
declare module "*.png" {
  const value: string;
  export default value;
}
