"use client"

import { usePathname } from 'next/navigation'

export default function JsonLd() {
  const pathname = usePathname()
  const baseUrl = 'https://techlance.com'
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Techlance Hub',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
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
    }
  }
  
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IT Services',
    provider: {
      '@type': 'Organization',
      name: 'Techlance Hub'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    description: 'Professional IT and digital solutions including web development, app development, IT infrastructure, customer support, and digital marketing.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '0',
        priceCurrency: 'USD'
      }
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