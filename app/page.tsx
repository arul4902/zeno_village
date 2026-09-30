import Journey from '@/components/journey';
import { resort } from '@/config/resort';
export default function Home(){const schema={'@context':'https://schema.org','@type':'LodgingBusiness',name:resort.name,url:resort.official,telephone:resort.phone,address:{'@type':'PostalAddress',streetAddress:'900 Kandi, Meppadi, Vellarimala',addressRegion:'Kerala',postalCode:'673577',addressCountry:'IN'},checkinTime:resort.checkIn,checkoutTime:resort.checkOut,sameAs:[resort.instagram]};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Journey/></>}
