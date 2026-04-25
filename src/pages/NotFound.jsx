import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
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
          <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
            Signal lost
          </h1>
          <p className="mx-auto mt-4 max-w-md text-nexus-textDim">
            The route you're looking for doesn't exist — or the robot that used to live here
            has wandered off.
          </p>
          <Link to="/" className="btn-primary mt-8">
            <HiOutlineArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
