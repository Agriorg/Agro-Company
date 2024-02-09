
import About from '../components/About';
import Vision from './Vision';
import Services from '../components/Services';
// import Contact from '../components/Contact';
import Reachout from './Reachout';
import Why from './Why';
import Certificate from './Certificate';
function Main() {
  return (
    <>
      <main>
        <About />
        <Services />
        <Why/>
        <Vision/>
        <Reachout/>
        <Certificate/>
        {/* <Contact /> */}
      </main>
    </>
  );
}
export default Main;
