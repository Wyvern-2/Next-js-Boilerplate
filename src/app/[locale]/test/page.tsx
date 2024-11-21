import { getTranslations, setRequestLocale } from 'next-intl/server';

type ITestPageProps = {
  params: { locale: string }; // Локаль, переданная через маршрут
};

export async function generateMetadata({ params }: ITestPageProps) {
  const t = await getTranslations({
    locale: params.locale, // Указанная локаль
    namespace: 'TestPage', // Пространство имён для переводов
  });

  return {
    title: t('meta_title'), // Загружаем заголовок из переводов
    description: t('meta_description'), // Загружаем описание из переводов
  };
}

export default async function TestPage({ params }: ITestPageProps) {
  setRequestLocale(params.locale); // Устанавливаем локаль для текущего запроса
  const t = await getTranslations({
    locale: params.locale, // Указанная локаль
    namespace: 'TestPage', // Пространство имён для переводов
  });

  return (
    <div>
      <h1>{t('meta_title')}</h1>
      {' '}
      {/* Заголовок страницы */}
      <p>{t('meta_description')}</p>
      {' '}
      {/* Описание страницы */}
    </div>
  );
}
