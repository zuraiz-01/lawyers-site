import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import SiteFooter from '../components/SiteFooter'
import CustomCursor from '../components/CustomCursor'
import ScrollProgress from '../components/ScrollProgress'
import RouteScrollTop from '../components/RouteScrollTop'
import { navItems, practiceLinks, quickLinks } from '../data/siteData'

function SiteLayout() {
  return (
    <div className="site-shell">
      <RouteScrollTop />
      <ScrollProgress />
      <CustomCursor />
      <TopBar />
      <Navbar navItems={navItems} />

      <main>
        <Outlet />
      </main>

      <SiteFooter practiceLinks={practiceLinks} quickLinks={quickLinks} />
    </div>
  )
}

export default SiteLayout
