import { Container } from '@/components/shared';
import { useTranslations } from 'next-intl';
import Experience from '@/components/sections/experience';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Nav from '@/components/core/nav';
import Footer from '@/components/core/footer';
import { PORTFOLIO_REPO } from '@/constants/projects';

export default function Page() {
  const t = useTranslations();

  return (
    <main>
      <Nav />
      <section className="pt-5 sm:pt-10">
        <Container>
          <section id="hero">
            <Hero />
          </section>
          <section id="work" className="mt-10 scroll-mt-24">
            <Experience />
          </section>
          <section id="projects" className="mt-10 scroll-mt-24">
            <Projects />
          </section>
          <section id="contact" className="mt-10 scroll-mt-24">
            <Contact />
          </section>
        </Container>
      </section>
      <Footer repoUrl={PORTFOLIO_REPO} />
    </main>
  );
}
