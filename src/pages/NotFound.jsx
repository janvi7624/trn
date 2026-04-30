import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';
import PageTransition from '../components/PageTransition.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="pointer-events-none absolute inset-0 grid-bg" />

        <div className="container-nx relative text-center">
          <p className="font-display text-[120px] font-bold leading-none gradient-text sm:text-[180px]">
            404
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-trn-text sm:text-4xl">
            Signal lost
          </h1>
          <p className="mx-auto mt-4 max-w-md text-trn-text-secondary">
            The route you&rsquo;re looking for doesn&rsquo;t exist — or the venture
            that used to live here has already shipped and moved on.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn-primary">
              <HiOutlineArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <Link to="/register" className="btn-ghost">
              Apply to Co-Build <HiOutlineArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}