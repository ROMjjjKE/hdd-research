import Header from './components/Header';
import Hero from './components/Hero';
import Media from './components/Media';
import Gap from './components/Gap';
import Lab from './components/Lab';
import Direct from './components/Direct';
import Flow from './components/Flow';
import Faq from './components/Faq';
import Ask from './components/Ask';
import Footer from './components/Footer';
import { useLenis } from './components/useLenis';
import { useReveal } from './components/useReveal';

export default function App() {
  useLenis();
  useReveal('hdd');

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Media />
        <Gap />
        <Lab />
        <Direct />
        <Flow />
        <Faq />
        <Ask />
      </main>
      <Footer />
    </>
  );
}
