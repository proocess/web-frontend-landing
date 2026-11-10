import { Link, Navigate, useParams } from 'react-router-dom'
import { DemoBand, SolutionList } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'
import { DEMO_LINK, profiles } from '../data/catalog'

export default function ProfilePage() {
  const { id } = useParams()
  const profile = profiles.find((p) => p.id === id)
  usePageTitle(profile?.name)

  if (!profile) return <Navigate to="/" replace />

  return (
    <div className="bg-cream text-ink">
      <section className="pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="container">
          <span className="label">Para quién · {profile.name}</span>
          <h1 className="heading-page mt-3 max-w-[20ch]">
            {profile.title[0]} <em>{profile.title[1]}</em>
          </h1>
          <p className="lead mt-5">{profile.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={DEMO_LINK} className="btn btn-primary">Agendá una demo</Link>
            <Link to="/soluciones/capture" className="btn btn-outline">Conocé Capture</Link>
          </div>
        </div>
      </section>
      <section className="border-t border-ink/10 bg-cream-light py-20 md:py-24">
        <div className="container">
          <span className="label mb-9">Soluciones</span>
          <SolutionList />
        </div>
      </section>
      <DemoBand />
    </div>
  )
}
