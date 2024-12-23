import { AppLanguage, AppVariant } from "@/shared/types/configTypes";

export const appVariant: AppVariant =
  (import.meta.env.VITE_APP_VARIANT as AppVariant) || 'AUTUMN';

// export const appLanguage 

