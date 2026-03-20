import { HeartBoldIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Feedback from './feedback';
import { Link } from '@/navigation';
interface Props {
  params: { locale: string };
}
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}
export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <div className='text-center justify-center mt-10'>
        <h1 className={title()}>Acerca de EstudieMás</h1>
      </div>
      <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
        <p>
          Bienvenido a la prueba de personalidad de la Fundación EstudieMás,
          una herramienta gratuita y open-source basada en el modelo Big Five,
          el modelo psicológico más confiable y científicamente validado para
          medir la personalidad.
        </p>
        <br />
        <p>
          La prueba analiza cinco dimensiones clave: Apertura a la Experiencia,
          Escrupulosidad, Extraversión, Amabilidad y Neuroticismo, ofreciendo
          una visión detallada de tus rasgos y cómo influyen en tu comportamiento
          e interacciones.
        </p>
        <br />
        <p>
          Si tienes preguntas, consulta primero las{' '}
          <Link href='/faq' className='underline'>
            FAQ
          </Link>
          . Si no encuentras la respuesta, escríbenos a{' '}
          <a href='mailto:info@estudiemas.org' className='underline'>
            info@estudiemas.org
          </a>
          .
        </p>
        <br />
        <p>
          Esta herramienta está basada en{' '}
          
            href='https://bigfive-test.com'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            bigfive-test.com
          </a>
          , proyecto open-source de Jonas Enge, publicado bajo licencia MIT.
        </p>
      </div>
      <section>
        <div className='text-center justify-center mt-20'>
          <h2 className={title()}>¡Nos encanta el feedback!&nbsp;</h2>
          <div className='flex md:inline-flex flex-col md:flex-row items-center'>
            <HeartBoldIcon
              className='text-[#B8CE24] animate-heartbeat'
              size={50}
              style={{
                animationDuration: '2.5s'
              }}
            />
          </div>
          <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
            Cuéntanos cómo podemos mejorar o reporta un problema específico.
          </div>
        </div>
        <Feedback />
      </section>
    </>
  );
}
