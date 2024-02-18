import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Page/home'
import { NotFound } from './notfound'
import { EventsPage } from './Events/events'
import { TeamsPage } from './Team/team'
import { ContactsPage } from './Contact/contact'
import { DonatePage } from './Donate/donate'

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
