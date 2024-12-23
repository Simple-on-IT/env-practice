import styles from './MainPage.module.scss';
import { Image } from '../../../shared/ui/Image/Image';
import { Title } from '../../../shared/ui/Title/Title';
import { Button } from '../../../shared/ui/Button/Button';
import { useState } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { Authorization } from '../../../features/Authorization';
import { ErrorComponent } from '@/shared/ui/ErrorComponent/ErrorComponent';
import { buttonNoText, buttonText, descriptions, images, titles } from '../model/constants/texts';
import { appVariant, appLanguage } from '@/app/config';

export const MainPage = () => {
  const [showError, setShowError] = useState(false);
  const [isModalOpened, setIsModalpened] = useState(false);

  const onOpenModal = () => {
    setIsModalpened(true);
  }
  const onCloseModal = () => {
    setIsModalpened(false);
  }

  const onError = () => {
    setShowError(true);
  }

  return (
    <div className={styles.pageContainer}>
      {showError && <ErrorComponent />}
      <Image
        className={styles.image}
        width={'340px'}
        src={images[appVariant]}
        alt='Изображение страницы'
      />
      <Title text={titles[appLanguage][appVariant]} />
      <p className={styles.text}>
        {descriptions[appLanguage]}
      </p>
      <ul className={styles.buttonsContainer}>
        <li className={styles.button}><Button text={buttonText[appLanguage]} onClick={onOpenModal} /></li>
        <li className={styles.button}><Button text={buttonNoText[appLanguage]} transparent onClick={onError} /></li>
      </ul>

      {isModalOpened && (
        <Modal onClose={onCloseModal}>
          <Authorization />
        </Modal>
      )}
    </div>
  )
}