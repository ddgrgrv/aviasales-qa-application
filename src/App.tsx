import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Timeline } from './components/Timeline'
import { ClientAutomation } from './components/ClientAutomation'
import { Quality } from './components/Quality'
import { Experience } from './components/Experience'
import { TestingScheme } from './components/TestingScheme'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientAutomation />
        <Timeline />
        <Quality />
        <Experience />
        <TestingScheme />
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
