# Environment variables | Frontend Advent #23

## Задача:
Добавить в приложение глобальную переменную для управления языком приложения.

## Описание:
В приложении уже существует глобальная переменная, которая регулирует сезон. В рамках этой задачи необходимо добавить ещё одну переменную, которая будет отвечать за язык.
1. В корневом файле `.env` создайте новую переменную: `VITE_APP_LANGUAGE='EN'`.
2. В файле `vite.config.ts` зарегистрируйте переменную `VITE_APP_LANGUAGE` и задайте значение по умолчанию `RU`.
3. В папке `app` обновите файл `config.ts`, добавив новую константу `appLanguage` с типом `AppLanguage`.
4. В файле `MainPage.tsx` текст уже подготовлен. Вы можете усложнить задачу, реализовав переключение языков через библиотеку `i18next`.

## Проверка задания:
1. Запустите проект.
2. Меняйте значение переменной `VITE_APP_LANGUAGE` в файле `.env` и перезапускайте сервер разработки.
3. Убедитесь, что интерфейс приложения обновляется в зависимости от выбранного языка.

## Запуск проекта:
* `npm i` - установка библиотек
* `npm run dev` - сборка для разработки

## Дополнительные материалы:
Документация: https://vitejs.ru/guide/env-and-mode.html
Видео - 
