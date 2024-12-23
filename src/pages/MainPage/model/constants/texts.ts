import { AppLanguage, AppVariant } from "@/shared/types/configTypes";
import Autumn from '@/shared/images/autumn.png';
import Winter from '@/shared/images/image.png';

export const titles: Record<AppLanguage, Record<AppVariant, string>> = {
  RU: {
    WINTER: 'Новогодняя распродажа',
    AUTUMN: 'Осенняя распродажа',
  },
  EN: {
    WINTER: 'New Year sale',
    AUTUMN: 'Autumn sale',
  },
}

export const descriptions: Record<AppLanguage, string> = {
  RU: 'Успеть купить подарки до повышения цен!',
  EN: 'Buy gifts before prices go up!',
}

export const buttonText: Record<AppLanguage, string> = {
  RU: 'Перейти',
  EN: 'Go',
}
export const buttonNoText: Record<AppLanguage, string> = {
  RU: 'Нет, спасибо',
  EN: 'No, thanks',
}

export const images: Record<AppVariant, string> = {
  WINTER: Winter,
  AUTUMN: Autumn,
}

