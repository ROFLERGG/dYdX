import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Initiatives from './pages/Initiatives/Initiatives';
import FundedGrants from './pages/FundedGrants/funded-grants';
import GrantPage from './pages/FundedGrants/components/grant-page';
import ProgramExpenses from './pages/ProgramExpenses/program-expenses';
import Blog from './pages/Blog/blog';
import BlogPage from './pages/Blog/components/blog-page';
import FaqPage from './pages/Faq/Faq-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/grants" element={<FundedGrants />} />
        <Route path="/grants/:id" element={<GrantPage />} />
        <Route path="/expenses" element={<ProgramExpenses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
