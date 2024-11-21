import { useLocale, useTranslations } from 'next-intl';

const TestPage = () => {
  const locale = useLocale();
  const t = useTranslations('TestPage'); // Подключаем переводы из TestPage

  return (
    <div>
      <h1>{t('meta_title')}</h1>
      <p>{t('meta_description')}</p>
    </div>
  );
};

export default TestPage;

/* const NewPage = () => {
  // Используем i18n для загрузки переводов
  const t = useTranslations('TestPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default NewPage; */
