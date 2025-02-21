"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const cardData = [
    {
      title: "Buying your first home with Better",
      image: "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
      hasArrow: true
    },
    {
      title: "One Day Mortgage¹",
      description: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹",
      logo: "https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
      hasArrow: true
    },
    {
      title: "Better HELOC",
      description: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.³",
      image: "https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
      hasArrow: true
    },
    {
      title: "Insurance",
      image: "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
      hasArrow: true
    }
  ];

  const primaryButtonStyle = {
    backgroundColor: '#10B981',
    color: '#000',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  };

  const primaryButtonHoverStyle = {
    ...primaryButtonStyle,
    backgroundColor: '#059669',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const secondaryButtonStyle = {
    backgroundColor: '#0C452C',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  };

  const secondaryButtonHoverStyle = {
    ...secondaryButtonStyle,
    backgroundColor: '#0A3521',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const outlineButtonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    border: '1px solid #E5E7EB',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  };

  const outlineButtonHoverStyle = {
    ...outlineButtonStyle,
    backgroundColor: '#F3F4F6',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const testimonialButtonStyle = {
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    border: '1px solid #E5E7EB',
    backgroundColor: 'white',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  };

  const testimonialButtonHoverStyle = {
    ...testimonialButtonStyle,
    backgroundColor: '#F3F4F6',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const testimonialActiveButtonStyle = {
    ...testimonialButtonStyle,
    backgroundColor: '#0C452C',
    color: 'white',
    border: 'none',
  };

  return (
    <main>
      <section style={{ 
        backgroundColor: '#0C452C', 
        color: 'white',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <div style={{ flex: '1' }}>
              <h1 style={{ 
                fontSize: '5rem',
                lineHeight: '1.1',
                fontWeight: '400',
                marginBottom: '2rem'
              }}>
                Mortgages<br />made simple
              </h1>
              <button 
                style={primaryButtonStyle}
                onMouseOver={(e) => {
                  Object.assign(e.currentTarget.style, primaryButtonHoverStyle);
                }}
                onMouseOut={(e) => {
                  Object.assign(e.currentTarget.style, primaryButtonStyle);
                }}
              >
                Start my approval
              </button>
              <p style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginBottom: '1.5rem',
                fontSize: '1.3rem',marginTop:"1rem"
              }}>
                <span style={{fontSize: '1.3rem'}} >⏱️</span>
                3 min | No credit impact
              </p>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <Image src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business-thumbnail.png" alt="Google" width={20} height={20} style={{borderRadius:"50%"}} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#FFD700' }}>★★★★</span>
                  <span style={{ fontSize: '0.9rem' }}>4.0 Stars | 3177 Google reviews</span>
                </div>
              </div>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ maxWidth: '800px' }}>
                <Image 
                  src="https://media.better.com/better-com/homepage/hero-variant-c.webp" 
                  alt="Mobile app" 
                  width={800} 
                  height={1200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '4rem'
          }}>
            <div style={{ flex: '1' }}>
              <Image 
                src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp" 
                alt="Testimonial" 
                width={500} 
                height={500}
                style={{ 
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px'
                }}
              />
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1.5rem' 
              }}>
                <button 
                  style={testimonialActiveButtonStyle}
                  onMouseOver={(e) => {
                    Object.assign(e.currentTarget.style, {...testimonialActiveButtonStyle, transform: 'translateY(-2px)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'});
                  }}
                  onMouseOut={(e) => {
                    Object.assign(e.currentTarget.style, testimonialActiveButtonStyle);
                  }}
                >Arian</button>
                <button 
                  style={testimonialButtonStyle}
                  onMouseOver={(e) => {
                    Object.assign(e.currentTarget.style, testimonialButtonHoverStyle);
                  }}
                  onMouseOut={(e) => {
                    Object.assign(e.currentTarget.style, testimonialButtonStyle);
                  }}
                >Amanda</button>
                <button 
                  style={testimonialButtonStyle}
                  onMouseOver={(e) => {
                    Object.assign(e.currentTarget.style, testimonialButtonHoverStyle);
                  }}
                  onMouseOut={(e) => {
                    Object.assign(e.currentTarget.style, testimonialButtonStyle);
                  }}
                >Paul</button>
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <h2 style={{ 
                fontSize: '4rem',
                lineHeight: '1.1',
                fontWeight: '400',
                marginBottom: '2rem'
              }}>
                Find out why<br />we're better.
              </h2>
              <button 
                style={secondaryButtonStyle}
                onMouseOver={(e) => {
                  Object.assign(e.currentTarget.style, secondaryButtonHoverStyle);
                }}
                onMouseOut={(e) => {
                  Object.assign(e.currentTarget.style, secondaryButtonStyle);
                }}
              >
                See all our stories
              </button>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <Image src="/api/placeholder/24/24" alt="Trustpilot" width={24} height={24} />
                <span style={{ fontSize: '0.9rem' }}>Trustpilot Excellent 4.4 out of 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
              
      <section style={{ padding: '6rem 2rem', backgroundColor: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{ 
              fontSize: '3rem',
              lineHeight: '1.1',
              fontWeight: '400'
            }}>
              Got questions?<br />
              We've got answers
            </h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                style={secondaryButtonStyle}
                onMouseOver={(e) => {
                  Object.assign(e.currentTarget.style, secondaryButtonHoverStyle);
                }}
                onMouseOut={(e) => {
                  Object.assign(e.currentTarget.style, secondaryButtonStyle);
                }}
              >Our products</button>
              <button 
                style={outlineButtonStyle}
                onMouseOver={(e) => {
                  Object.assign(e.currentTarget.style, outlineButtonHoverStyle);
                }}
                onMouseOut={(e) => {
                  Object.assign(e.currentTarget.style, outlineButtonStyle);
                }}
              >Calculators</button>
              <button 
                style={outlineButtonStyle}
                onMouseOver={(e) => {
                  Object.assign(e.currentTarget.style, outlineButtonHoverStyle);
                }}
                onMouseOut={(e) => {
                  Object.assign(e.currentTarget.style, outlineButtonStyle);
                }}
              >Guides & FAQs</button>
            </div>
          </div>

          {/* Grid of cards */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {cardData.map((card, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#F0FDF4',
                  borderRadius: '16px',
                  padding: '2rem',
                  position: 'relative',
                  minHeight: '300px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>{card.title}</h3>
                
                {card.description && (
                  <p style={{ 
                    fontSize: '1rem',
                    color: '#4B5563',
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}>{card.description}</p>
                )}

                {card.image && (
                  <Image 
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={250}
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      marginTop: '1rem'
                    }}
                  />
                )}

                {card.logo && (
                  <div style={{ 
                    backgroundColor: '#E0E7FF',
                    borderRadius: '8px',
                    padding: '2rem',
                    marginTop: '1rem'
                  }}>
                    <Image 
                      src={card.logo}
                      alt="Logo"
                      width={100}
                      height={100}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}

                {card.hasArrow && (
                  <div style={{ 
                    position: 'absolute',
                    right: '2rem',
                    top: '2rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid #E5E7EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    transition: 'all 0.2s ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}