import React from 'react';
import Image from 'next/image';

import styles from './Img.module.scss';
import classNames from 'classnames';

const Img = ({ src = '', alt = '', ...rest }) => {
  return (
    <div className={classNames(styles.Img, 'Img')}>
      <Image layout="fill" className={styles.Img_image} src={src} alt={alt} {...rest} />
    </div>
  );
};

export default Img;
