import clsx from 'clsx';
import styles from './frame.module.css';
import { FrameType } from '@/types';
import { CSSProperties } from 'react';
import React from 'react';

const positions = {
  left: 'Left',
  right: 'Right',
};

interface Props extends FrameType {
	propsStyles?:  CSSProperties 
}

const Frame = ({
  variant,
  title,
  subtitle,
  image,
  slidePosition,
  withDarkBg,
  videoSrc,
  textTitle,
  textContent,
  titleClassName,
  subtitleClassName,
	propsStyles
}: Props) => {
  if (variant == 'empty') {
    return <div className={clsx(styles.frame, propsStyles, 'frame')}></div>;
  }

  return (
    <div
		style={propsStyles}
      className={clsx(styles.frame, 'frame', {
        [styles.frameTitle]: variant == 'title',
        [styles.frameWithDarkBg]: withDarkBg,
        [styles.frameText]: variant == 'text',
        [styles.frameTextLeft]: variant == 'text' && slidePosition == 'left',
        [styles.frameTextRight]: variant == 'text' && slidePosition == 'right',
      })}
    >
      <div className={styles.frameContent}>
        {variant == 'title' && (
          <h2 className={clsx(styles.mainTitle, titleClassName)}>
            {title}
            <p className={clsx(styles.subTitle, subtitleClassName)}>{subtitle}</p>
          </h2>
        )}
        {variant == 'photo' && (
          <div
            className={clsx(
              styles.frameMedia,
              slidePosition && styles[`frameMedia${positions[slidePosition]}`],
            )}
            style={{ backgroundImage: image }}
          ></div>
        )}

        {variant == 'video' && (
          <video
            loop
            muted
            autoPlay
            className={clsx(
              styles.frameMediaVideo,
              slidePosition && styles[`frameMediaVideo${positions[slidePosition]}`],
            )}
            src={videoSrc}
          ></video>
        )}

        {variant == 'text' && (
          <>
            <h3 className={styles.textTitle}>{textTitle}</h3>
            <p className={styles.textContent}>{textContent}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(Frame);
