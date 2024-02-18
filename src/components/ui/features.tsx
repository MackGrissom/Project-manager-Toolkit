import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Calendar } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    name: 'CRM & Dashboard',
    description:
      'Store leads, keep up to date contact information, track and measure progress. Manage your sales and leads all in one handy dashboard ',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Payment Processing',
    description: 'Simply connect your stripe account and charge clients directly while managing your income',
    icon: LockClosedIcon,
  },
  {
    name: 'Calendar & Meeting Manager',
    description: 'Manage and send meeting requests directly from your dashboard. Link your Zoom, Google meet and join directly from your dashboard',
    icon: Calendar,
  },
  {
    name: 'Project Management',
    description: 'Manage your projects directly from your dashboard.',
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-none py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-white font-semibold leading-7">Manage Your Business</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">All-In-One Agency Management Suite</p>
              <p className="mt-6 text-lg leading-8 text-white-600">
                You don&apos;t need 7 different softwares and multiple paid subscriptions to manage your business - do it all here and save yourself the stress. Made for freelancers, by freelancers. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-white leading-7 text-white-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-white" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src=""
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
