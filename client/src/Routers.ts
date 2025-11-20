import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageTransition } from './components/PageTransition'
import { SkeletonHero } from './components/SkeletonLoaders'

const Home = lazy(() => import('./pages/Index'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function Router() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Suspense fallback={<SkeletonHero />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </BrowserRouter>
  )
}
