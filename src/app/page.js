/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */

import Header from '@/components/Header';
import Collaboration from '@/components/Collaboration';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookDemoForm from '@/components/BookDemoForm';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        

    
    <section className="hero-slider" id="hero">
      <div className="hero-slides">
        
        <div className="hero-slide active" style={{ backgroundImage: "url('hero-bg.jpg')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-slide-content">
            <h1>AI Will <span className="highlight">Replace You!</span></h1>
            <p className="hero-subtitle">If AI can do your work, what makes you valuable? Learn to think, analyze, and decide.</p>
            <div className="hero-actions">
              <a href="#enroll" className="btn-hero-primary">
                Enroll Right Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="https://chat.whatsapp.com/BU0jlt2VSzQ5mL49U9oq3R" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                Join Community
                <span className="material-symbols-outlined">group</span>
              </a>
            </div>
          </div>
        </div>

        
        <div className="hero-slide" style={{ backgroundImage: "url('hero-slide-2.png')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-slide-content">
            <h1>Think <span className="highlight">Beyond</span> the Algorithm</h1>
            <p className="hero-subtitle">Machines follow patterns. Leaders break them. Build the thinking edge AI can't replicate.</p>
            <div className="hero-actions">
              <a href="#enroll" className="btn-hero-primary">
                Start Learning
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#programs" className="btn-hero-secondary">
                Explore Programs
                <span className="material-symbols-outlined">school</span>
              </a>
            </div>
          </div>
        </div>

        
        <div className="hero-slide" style={{ backgroundImage: "url('hero-slide-3.jpg')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-slide-content">
            <h1>Your Career Needs <span className="highlight">Critical Thinking</span></h1>
            <p className="hero-subtitle">45.9% employability rate. Don't be on the wrong side. Upgrade how you think, not just what you know.</p>
            <div className="hero-actions">
              <a href="#enroll" className="btn-hero-primary">
                Book a Demo
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#about" className="btn-hero-secondary">
                Learn More
                <span className="material-symbols-outlined">info</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hero-dots">
        <button className="hero-dot active" data-slide="0" aria-label="Slide 1"></button>
        <button className="hero-dot" data-slide="1" aria-label="Slide 2"></button>
        <button className="hero-dot" data-slide="2" aria-label="Slide 3"></button>
      </div>
    </section>

    
    <section className="intro-section section-padding" id="about">
      <div className="container intro-inner">
        <span className="intro-label reveal">The ACHL Mission</span>
        <h2 className="intro-title reveal reveal-delay-1">
          Building Critical <span className="title-highlight">Thinkers</span> In the Era of AI.
        </h2>
        <div className="intro-body reveal reveal-delay-2">
          <p>
            Every year, over one crore students graduate in India, but according to the India Skills Report 2024, only 45.9% are considered employable. That means more than half of our degree holders are not job-ready.
          </p>
          <p className="intro-callout">
            The problem is not knowledge.<br />
            The problem is application.
          </p>
          <p className="intro-muted">
            Students can solve questions. But struggle when profit doesn't mean success, good companies get rejected, or markets change suddenly. Real-world decisions require critical thinking.
          </p>
        </div>
      </div>
    </section>

    
    <section className="benefits-section section-padding" id="programs">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Why You Should Take This <span className="title-highlight">Course</span></h2>
          <p>The Real Benefits of Learning to Think Better</p>
        </div>

        <div className="bento-grid">
          
          <div className="glass-card reveal reveal-delay-1">
            <div className="card-header">
              <div className="card-icon">
                <span className="material-symbols-outlined">school</span>
              </div>
              <span className="card-tag">For Students</span>
            </div>
            <div>
              <h3>For MBA/BBA/B.Com <span className="title-highlight">Students</span></h3>
              <ul className="benefit-list">
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  You Get the Job Interview (and Win It)
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  You Stand Out From Your Peers (The Competitive Advantage)
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  You're Ready for Strategy/Consulting Roles
                </li>
              </ul>
            </div>
          </div>

          
          <div className="glass-card glass-card--dark reveal reveal-delay-2">
            <div className="card-header">
              <div className="card-icon">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
            </div>
            <div>
              <h3>For Aspiring <span className="title-highlight">Founders</span></h3>
              <ul className="benefit-list">
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Avoid Expensive Mistakes
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Better Capital Allocation
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Build a Scaling Decision System
                </li>
              </ul>
            </div>
          </div>

          
          <div className="glass-card reveal reveal-delay-3">
            <div className="card-header">
              <div className="card-icon">
                <span className="material-symbols-outlined">work</span>
              </div>
            </div>
            <div>
              <h3>For <span className="title-highlight">Professionals</span></h3>
              <ul className="benefit-list">
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Move Into Strategy Roles
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Become Invaluable to Your Org
                </li>
              </ul>
            </div>
          </div>

          
          <div className="glass-card reveal reveal-delay-4" style={{ backgroundColor: 'var(--surface)',  }}>
            <div className="card-header">
              <div className="card-icon">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <span className="card-tag" style={{ color: 'var(--text-muted)',  }}>For Life</span>
            </div>
            <div>
              <h3>For Anyone Who Wants To <span className="title-highlight">Think Better</span></h3>
              <ul className="benefit-list benefit-list--grid">
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  You Make Fewer Decisions You Regret
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  You Understand Yourself Better
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  You Become a Better Conversationalist
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  You Join a Community of Thinkers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="frameworks-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Core <span className="title-highlight">Frameworks</span></h2>
          <p>The essential skills for the modern professional</p>
        </div>

        <div className="frameworks-grid">
          <div className="framework-card reveal reveal-delay-1">
            <span className="material-symbols-outlined">psychology</span>
            <h3>Cognitive Bias <span className="title-highlight">Recognition</span></h3>
            <p>Identify and overcome mental shortcuts that lead to flawed decision-making in critical moments.</p>
          </div>
          <div className="framework-card reveal reveal-delay-2">
            <span className="material-symbols-outlined">forum</span>
            <h3>Socratic Dialogue <span className="title-highlight">Mastery</span></h3>
            <p>Master the art of rigorous questioning to unearth hidden assumptions and reach deeper truths.</p>
          </div>
          <div className="framework-card reveal reveal-delay-3">
            <span className="material-symbols-outlined">account_tree</span>
            <h3>First-Principles <span className="title-highlight">Thinking</span></h3>
            <p>Break down complex problems into their foundational elements and build innovative solutions.</p>
          </div>
          <div className="framework-card reveal reveal-delay-1">
            <span className="material-symbols-outlined">computer</span>
            <h3>LLM <span className="title-highlight">Literacy</span></h3>
            <p>Understand the logic of AI models to leverage them effectively as strategic tools.</p>
          </div>
          <div className="framework-card reveal reveal-delay-2">
            <span className="material-symbols-outlined">analytics</span>
            <h3>Risk <span className="title-highlight">Decomposition</span></h3>
            <p>Systematically analyze and break down risks to make calculated decisions under uncertainty.</p>
          </div>
          <div className="framework-card reveal reveal-delay-3">
            <span className="material-symbols-outlined">architecture</span>
            <h3>System <span className="title-highlight">Architecture</span></h3>
            <p>Design robust, scalable decision-making frameworks that withstand changing market dynamics.</p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="image-overlay-section">
      <div className="image-overlay-bg" style={{ backgroundImage: "url('overlay-bg.png')" }}>
        <div className="image-overlay-dark"></div>
      </div>
      <div className="container image-overlay-content reveal">
        <h2>The Future Belongs to <span className="title-highlight-light">Thinkers,</span> Not Followers</h2>
        <p>AI will replace tasks. It won't replace judgment. Join India's most intensive critical thinking program and become irreplaceable.</p>
        <a href="#enroll" className="btn-hero-primary">
          Start Your Journey
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>

    
    <section className="offerings-section section-padding">
      <div className="container">
        <div className="offerings-layout">
          <div className="offerings-sidebar reveal">
            <h2>What We <span className="title-highlight">Offer?</span></h2>
            <p>
              Moving from "Simple Prompting" to "Chain-of-Thought" (CoT) and "Tree-of-Thoughts" (ToT) frameworks.
            </p>
            <p className="sidebar-quote">
              AI is a "probabilistic" engine, not a "deterministic" one. The future belongs to those who can think, analyse, and decide.
            </p>
            <a href="#enroll" className="btn-primary">View Full Curriculum</a>
          </div>

          <div className="offerings-main">
            <div className="offerings-grid">
              <div className="offering-item reveal reveal-delay-1">
                <span>Cognitive Bias Recognition</span>
              </div>
              <div className="offering-item reveal reveal-delay-1">
                <span>Socratic Dialogue Mastery</span>
              </div>
              <div className="offering-item reveal reveal-delay-2">
                <span>First-Principles Problem Solving</span>
              </div>
              <div className="offering-item reveal reveal-delay-2">
                <span>LLM Literacy &amp; Strategic AI Use</span>
              </div>
              <div className="offering-item reveal reveal-delay-3">
                <span>Decision-Making System Architecture</span>
              </div>
              <div className="offering-item reveal reveal-delay-3">
                <span>Ethical Reasoning in Business</span>
              </div>
              <div className="offering-item reveal reveal-delay-4">
                <span>Risk Decomposition &amp; Pre-Mortems</span>
              </div>
              <div className="offering-item reveal reveal-delay-4">
                <span>Capital Allocation Under Ambiguity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Bridging the <span className="title-highlight">Gap</span></h2>
          <p>Supporting Professionals in Building Career-Ready Graduates</p>
        </div>
      </div>

      <div className="testimonial-marquee-wrapper">
        <div className="testimonial-marquee" id="testimonial-marquee">
          
          <div className="testimonial-card">
            <span className="material-symbols-outlined testimonial-quote-icon">format_quote</span>
            <blockquote>
              "ACHL connects student learning with real industry expectations. Our students become job-ready, and hiring becomes faster and more effective."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="testimonial-name">Placement Director</p>
                <p className="testimonial-role">Top Tier Business School</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="material-symbols-outlined testimonial-quote-icon">format_quote</span>
            <blockquote>
              "We don't just prepare students for jobs. We prepare them to build. The decision-making frameworks provided are invaluable for future founders."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="testimonial-name">Startup Incubator Lead</p>
                <p className="testimonial-role">Innovation Hub</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="material-symbols-outlined testimonial-quote-icon">format_quote</span>
            <blockquote>
              "The gap is not knowledge. The gap is thinking. ACHL creates the difference by focusing on building the ability to think through real situations."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="testimonial-name">Corporate Strategy Head</p>
                <p className="testimonial-role">MNC India</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="material-symbols-outlined testimonial-quote-icon">format_quote</span>
            <blockquote>
              "Critical thinking isn't optional anymore. ACHL gave our students the framework to approach problems like strategists, not just graduates."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="testimonial-name">Dean of Academics</p>
                <p className="testimonial-role">Leading B-School</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="material-symbols-outlined testimonial-quote-icon">format_quote</span>
            <blockquote>
              "After the ACHL program, our placement rate improved by 30%. Students now articulate their thought process, not just their answers."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="testimonial-name">Training & Placement Officer</p>
                <p className="testimonial-role">State University</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <span className="material-symbols-outlined testimonial-quote-icon">format_quote</span>
            <blockquote>
              "In a world full of AI tools, hiring managers still need people who can think. ACHL addresses exactly that skill gap."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="testimonial-name">HR Director</p>
                <p className="testimonial-role">Fortune 500 Company</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>

    
    <section className="faq-section section-padding">
      <div className="container">
        <div className="faq-container">
          <div className="section-header reveal">
            <h2 className="section-title">Common <span className="title-highlight">Questions</span></h2>
          </div>

          <div className="faq-list">
            <div className="faq-item reveal reveal-delay-1">
              <button className="faq-question">
                <span>How is this different from other courses?</span>
                <span className="material-symbols-outlined icon">add</span>
              </button>
              <div className="faq-answer">
                <p>Most programs focus on teaching concepts. ACHL focuses on building the ability to think through real situations. We don't add more content. We change how students understand, analyse, and decide.</p>
              </div>
            </div>

            <div className="faq-item reveal reveal-delay-2">
              <button className="faq-question">
                <span>What is the "Employability Gap"?</span>
                <span className="material-symbols-outlined icon">add</span>
              </button>
              <div className="faq-answer">
                <p>Every year, over one crore students graduate in India, but only 45.9% are considered employable. Students are taught answers, but the real world demands decisions. We bridge this gap by training application over memorization.</p>
              </div>
            </div>

            <div className="faq-item reveal reveal-delay-3">
              <button className="faq-question">
                <span>How do you work with colleges?</span>
                <span className="material-symbols-outlined icon">add</span>
              </button>
              <div className="faq-answer">
                <p>We partner with colleges to improve student quality without extra faculty burden. It's an affordable model (1–2% of student fees) that provides industry-aligned learning and better placement outcomes.</p>
              </div>
            </div>

            <div className="faq-item reveal reveal-delay-4">
              <button className="faq-question">
                <span>How do I partner with ACHL?</span>
                <span className="material-symbols-outlined icon">add</span>
              </button>
              <div className="faq-answer">
                <p>We offer tailored partnership models for colleges and corporate organizations. Contact us to schedule a demo and explore how our critical thinking frameworks can bridge the employability gap in your institution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="cta-section" id="enroll">
      <div className="cta-bg-element"></div>
      <div className="cta-bg-element-2"></div>
      <div className="container">
        <div className="cta-layout">
          <div className="cta-text reveal">
            <span className="cta-label">Ready to Level Up?</span>
            <h2>Will AI <span className="title-highlight-light">Replace You?</span></h2>
            <p>The future belongs to those who can think, analyse, and decide. Give us one session — we'll show you the difference.</p>
            <ul className="cta-checklist">
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                No pressure of discounts
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                Minimum price all year round
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                One session to see the difference
              </li>
            </ul>
          </div>
          <div className="cta-form-wrapper reveal reveal-delay-2">
            <h3>Partner <span className="title-highlight">With Us</span></h3>
            <BookDemoForm />
          </div>
        </div>
      </div>
    </section>

<Collaboration />

</main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
