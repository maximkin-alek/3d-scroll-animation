export type frameVariant = 'title' | 'photo' | 'video' | 'text' | 'empty';

export interface FrameType {
  variant: frameVariant;
  title?: string;
  subtitle?: string;
  image?: string;
  slidePosition?: 'left' | 'right';
  withDarkBg?: boolean;
  videoSrc?: string;
  textTitle?: string;
  textContent?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}
