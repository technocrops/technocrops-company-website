import React from 'react';
import { HashLink } from 'react-router-hash-link';

const TestingPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#08142B] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-sm font-bold tracking-widest uppercase">
          Zero-Bug Policy
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Quality Assurance & Testing
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          We ensure your software is robust, secure, and user-ready. Our rigorous testing protocols eliminate bottlenecks before they reach your users.
        </p>
      </section>

      {/* The Testing "Suite" */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Unit Testing", icon: "⚙️", desc: "Verifying individual components for perfect logic." },
            { title: "Regression Testing", icon: "🔄", desc: "Ensuring new updates don't break existing features." },
            { title: "User Acceptance", icon: "👥", desc: "Real-world scenarios to validate the user journey." },
            { title: "Security Testing", icon: "🛡️", desc: "Vulnerability scanning and penetration testing." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-orange-400 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Process */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Automated Pipeline</h2>
            <div className="space-y-6">
              {[
                { label: "CI/CD Integration", value: "99.9%" },
                { label: "Test Coverage", value: "95%+" },
                { label: "Bug Detection Rate", value: "High" }
              ].map((stat, i) => (
                <div key={i} className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-orange-500/20 text-orange-400">
                      {stat.label}
                    </span>
                    <span className="text-xs font-semibold inline-block text-orange-400">{stat.value}</span>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-500/10">
                    <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/10 p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
             <pre className="text-xs font-mono text-cyan-400 overflow-x-auto">
               <code>{`describe('Checkout Flow', () => {
  it('should process payment successfully', () => {
    cy.visit('/cart');
    cy.get('[data-test=pay-btn]').click();
    cy.url().should('include', '/success');
    cy.contains('Payment Received').should('be.visible');
  });
});`}</code>
             </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready for a Bug-Free Launch?</h2>
        <HashLink 
          smooth to="/#contact"
          className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-orange-500/50 transition inline-block"
        >
          Request a Security Audit
        </HashLink>
      </section>
    </div>
  );
};

export default TestingPage;