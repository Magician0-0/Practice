import Banner from '@/components/layout/Banner'
import Gallery from '@/components/layout/Gallery'
import Search from '@/components/features/Search'
import Profile from '@/components/features/Profile'

export default function Home() {
  return (
    <div>
      <Banner />
      <Search />
      <Profile />
      <Gallery />
    </div>
  )
}