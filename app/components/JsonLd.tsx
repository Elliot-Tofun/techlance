"use client"

import { usePathname } from 'next/navigation'

export default function JsonLd() {
  const pathname = usePathname()
  const baseUrl = 'https://techlancehub.com'
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Techlance Hub',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: 'Techlance Hub provides professional IT and digital solutions to drive business growth through technology innovation.',
    sameAs: [
      'https://twitter.com/techlancehub',
      'https://www.linkedin.com/company/techlancehub',
      'https://www.facebook.com/techlancehub'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      availableLanguage: ['English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'United States'
    }
  }
  
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IT Services',
    provider: {
      '@type': 'Organization',
      name: 'Techlance Hub',
      url: baseUrl
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    description: 'Professional IT and digital solutions including web development, app development, IT infrastructure, customer support, and digital marketing.',
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      offerCount: '4',
      offers: [
        {
          '@type': 'Offer',
          name: 'Web Development',
          description: 'Custom website development services'
        },
        {
          '@type': 'Offer',
          name: 'App Development',
          description: 'Mobile and web application development'
        },
        {
          '@type': 'Offer',
          name: 'IT Infrastructure',
          description: 'Enterprise IT infrastructure solutions'
        },
        {
          '@type': 'Offer',
          name: 'Digital Marketing',
          description: 'Comprehensive digital marketing services'
        }
      ]
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          pathname === '/' 
            ? organizationSchema 
            : pathname.includes('/services') 
              ? serviceSchema 
              : organizationSchema
        )
      }}
    />
  )
}