"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Truck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Landscaping"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Crafting Landscapes, Creating Harmony."
      description="Professional mowing, design, and yard maintenance for homes that demand excellence. Elevate your curb appeal with our dedicated landscape experts."
      tag="Premier Landscaping"
      buttons={[
        {
          text: "Get Your Free Quote",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view_7502-10152.jpg",          imageAlt: "Luxurious landscaped yard"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-robot-taking-care-garden_23-2151804041.jpg",          imageAlt: "Professional mowing service"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-attractive-male-gardener-glasses-posing-while-trimming-bush-with-electric-hedge-clippers_7502-10137.jpg",          imageAlt: "Garden design project"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/town-square-shenzhen_1359-1110.jpg",          imageAlt: "Seasonal yard cleanup"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-meditating-park-rubber-mat-sitting-green-lawn-practice-yoga-concept-sport_1258-203500.jpg",          imageAlt: "Irrigation installation work"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sunny-day-park-landscape-green-grass-two-bicycles-standing-near-tree-sunbeams-lighting-up_1258-138138.jpg",          imageAlt: "Pristine garden landscaping"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Passion in Every Blade"
      description="With over 15 years of dedicated landscape artistry, we transform residential properties into lush, green sanctuaries. We combine traditional lawn care with modern design aesthetics to create outdoor spaces that resonate."
      metrics={[
        {
          value: "15+",          title: "Years Experience"},
        {
          value: "500+",          title: "Lawns Transformed"},
        {
          value: "100%",          title: "Client Satisfaction"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/two-experienced-gardeners-discussing-methods-planting-flowers_74855-16476.jpg"
      imageAlt="Expert landscapers working"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Precision Mowing",          description: "Crisp, clean cuts tailored to your grass type and season.",          tag: "Essential",          imageSrc: "http://img.b2bpic.net/free-photo/wooden-wall-with-grass_1134-175.jpg"},
        {
          id: "f2",          title: "Garden Cleanups",          description: "Complete seasonal removal of debris, leaves, and overgrown brush.",          tag: "Restoration",          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-removing-trees-leaves-from-backyard-with-portable-blower-front-view-mature-male_7502-10282.jpg"},
        {
          id: "f3",          title: "Irrigation Support",          description: "System maintenance and optimization for efficient water use.",          tag: "Infrastructure",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-gardening-concept_23-2148127952.jpg"},
      ]}
      title="Comprehensive Yard Care"
      description="Everything your lawn needs to flourish throughout the seasons."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Weekly Maintenance",          price: "$150/mo",          variant: "Basic",          imageSrc: "http://img.b2bpic.net/free-photo/man-cutting-grass-with-lawn-mover-back-yard-male-black-apron-guy-repairs_1157-41431.jpg"},
        {
          id: "p2",          name: "Fertilization Care",          price: "$80/app",          variant: "Treatment",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-truffle-mushroom-shovel-forest_342744-1353.jpg"},
        {
          id: "p3",          name: "Mulching Service",          price: "$120/visit",          variant: "Garden",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-material-pieces-wooden-boxes_181624-18062.jpg"},
        {
          id: "p4",          name: "Hedge Trimming",          price: "$95/visit",          variant: "Pruning",          imageSrc: "http://img.b2bpic.net/free-photo/hands-gardener-orange-gloves-are-trimming-overgrown-green-shrub-using-hedge-shears-sunny-backyard-worker-landscaping-garden-close-up_639032-841.jpg"},
        {
          id: "p5",          name: "Softscaping Planting",          price: "$250/job",          variant: "Landscape",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-carrying-box_23-2149722682.jpg"},
        {
          id: "p6",          name: "Lawn Aeration",          price: "$180/job",          variant: "Soil Care",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-hand-trowel-green-grass_181624-26501.jpg"},
      ]}
      title="Our Professional Services"
      description="Standardized service packages to ensure consistent, premium lawn care for your residence."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "12",          title: "Service Vehicles",          description: "Ready for action daily",          icon: Truck,
        },
        {
          id: "m2",          value: "24",          title: "Expert Staff",          description: "Highly trained professionals",          icon: Users,
        },
        {
          id: "m3",          value: "98%",          title: "Client Retention",          description: "Trusted by local homeowners",          icon: Award,
        },
      ]}
      title="Growth & Performance"
      description="Our commitment to excellence reflected in our operational metrics."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Alex River",          handle: "@alex",          testimonial: "Truly the best landscaping experience I've had. My garden has never looked more pristine.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/women-working-greenhouse-with-flowerpots_1157-30885.jpg"},
        {
          id: "2",          name: "Jordan P",          handle: "@jordan",          testimonial: "Prompt, professional, and excellent quality. They really care about the lawn details.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-couple-decorating-home_23-2150633326.jpg"},
        {
          id: "3",          name: "Sam Taylor",          handle: "@sam",          testimonial: "Very happy with the weekly mowing schedule. Highly recommended to all neighbors.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/outdoors-portrait-young-attractive-bearded-caucasian-man-blue-shirt-sport-pants-smiling-sitting-grass-looking-camera-with-happy-face-expression-working-garden_176420-19937.jpg"},
        {
          id: "4",          name: "Casey Morgan",          handle: "@casey",          testimonial: "Fair pricing for such premium results. My hedges are perfect every single time.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-outdoors-consulting-map_23-2148704503.jpg"},
        {
          id: "5",          name: "Drew Bailey",          handle: "@drew",          testimonial: "They transformed our overgrown yard into a beautiful oasis. Couldn't be happier.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-emotions-healthy-lifestyle-vertical-close-up-outdoors-portrait-young-mature-bearded-caucasian-male-gardener-blue-t-shirt-smiling-working-garden_176420-19951.jpg"},
      ]}
      showRating={true}
      title="Loved By Homeowners"
      description="Hear from our satisfied clients about the beauty we bring to their lawns."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Landscaping Assoc",        "Garden Experts",        "Sustainable Lawn Care",        "Green Initiatives Inc",        "Local Maintenance Network",        "Yard Pro Association",        "Garden Care Alliance"]}
      title="Trusted Partners & Associations"
      description="Recognized by industry leaders for our dedication to service excellence."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get Your Quote"
      title="Ready for a Lush Lawn?"
      description="Start your journey toward a perfect yard with a free consultation today."
      buttons={[
        {
          text: "Contact Us Now",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Landscaping"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Services",              href: "#services"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2025 Landscaping Company"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}