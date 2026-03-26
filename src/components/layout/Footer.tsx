import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">CONNEXT</h3>
            <p className="mt-2 text-sm text-gray-400">{t('tagline')}</p>
            <p className="mt-4 text-sm text-gray-400">{t('companyName')}</p>
            <p className="text-sm text-gray-400">{t('address')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t('quickLinks')}
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                {nav('home')}
              </Link>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                {nav('about')}
              </Link>
              <Link href="/science" className="text-sm text-gray-400 hover:text-white transition-colors">
                {nav('science')}
              </Link>
              <Link href="/ir" className="text-sm text-gray-400 hover:text-white transition-colors">
                {nav('ir')}
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              &nbsp;
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/newsroom" className="text-sm text-gray-400 hover:text-white transition-colors">
                {nav('newsroom')}
              </Link>
              <Link href="/bd" className="text-sm text-gray-400 hover:text-white transition-colors">
                {nav('bd')}
              </Link>
              <Link href="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                {nav('careers')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t('contact')}
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${t('email')}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {t('email')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            {t('copyright', { year: String(year) })}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
