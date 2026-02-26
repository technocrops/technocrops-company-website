import React from 'react';
import { HashLink } from 'react-router-hash-link';

const StaffAugPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#0A0F1E] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20 text-sm font-bold tracking-widest uppercase">
          On-Demand Expertise
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
          Scale Your Team, Instantly
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          Skip the 3-month hiring cycle. Access our pool of senior developers, designers, and PMs to accelerate your roadmap today.
        </p>
      </section>

      {/* Why Augmentation? Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Rapid Onboarding", desc: "Integrate specialized talent into your workflow within 48-72 hours." },
            { title: "Zero Overhead", desc: "We handle the payroll, benefits, and equipment. You just focus on the code." },
            { title: "Flexible Scaling", desc: "Scale your team up or down based on your current project requirements." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-violet-500/5 border border-violet-500/10 hover:bg-violet-500/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-6 text-violet-400 font-bold text-xl">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Talent Categories */}
      <section className="bg-slate-900 py-20 my-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Engineers Ready to Deploy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Frontend (React/Vue)', 'Backend (Node/Python)', 'Mobile (RN/Flutter)', 'DevOps (AWS/K8s)', 'UI/UX Designers', 'QA Engineers', 'Project Managers', 'Data Scientists'].map((role) => (
              <div key={role} className="p-4 rounded-xl border border-white/10 bg-white/5 text-white/80 text-center text-sm font-medium hover:bg-violet-500/20 hover:border-violet-500/50 transition-all cursor-default">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center">How We Work With You</h2>
        <div className="space-y-12">
          {[
            { step: "Requirements", text: "We analyze your tech stack and team culture." },
            { step: "Selection", text: "We present 2-3 hand-picked experts for your interview." },
            { step: "Onboarding", text: "Talent joins your Slack/Jira and starts contributing day one." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="text-4xl font-black text-violet-500/20">0{i + 1}</div>
              <div>
                <h4 className="text-xl font-bold mb-1">{item.step}</h4>
                <p className="text-gray-500 dark:text-gray-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Need talent yesterday?</h2>
        <HashLink 
          smooth to="/#contact"
          className="bg-violet-600 hover:bg-violet-500 px-10 py-5 rounded-2xl text-white font-bold text-lg shadow-xl shadow-violet-500/20 transition-all active:scale-95 inline-block"
        >
          Schedule a Talent Consult
        </HashLink>
      </section>
    </div>
  );
};

export default StaffAugPage;