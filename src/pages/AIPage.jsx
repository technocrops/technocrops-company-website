import React from 'react';
import { HashLink } from 'react-router-hash-link';

const AIPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#020617] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center relative overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-bold tracking-widest uppercase">
          Intelligence Augmented
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Next-Gen AI Solutions
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          We integrate cutting-edge Machine Learning and Large Language Models into your existing infrastructure to drive unprecedented efficiency.
        </p>
      </section>

      {/* AI Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "Generative AI & LLMs", 
              desc: "Deploy custom GPT models trained on your private documentation for secure, internal knowledge management.",
              tech: "OpenAI, Anthropic, Llama 3"
            },
            { 
              title: "Automated Data Processing", 
              desc: "Extract insights from thousands of documents instantly with AI-driven OCR and Sentiment Analysis.",
              tech: "TensorFlow, PyTorch"
            },
            { 
              title: "Intelligent Chatbots", 
              desc: "24/7 customer support agents that understand context, tone, and complex user intent.",
              tech: "LangChain, Vector Databases"
            },
            { 
              title: "Predictive Modeling", 
              desc: "Identify market shifts and user churn before they happen using advanced regression algorithms.",
              tech: "Scikit-learn, Pandas"
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <div className="w-20 h-20 bg-blue-500 rounded-full blur-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
              <div className="text-xs font-mono text-blue-400 tracking-wider uppercase">{item.tech}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Tech Stack: AI Layer */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Seamless Infrastructure Integration</h2>
              <p className="text-slate-400 mb-8">
                We don't just "plug in" AI. We build the data pipelines, vector storage, and API layers necessary for a robust production environment.
              </p>
              <div className="space-y-4">
                {['Vector DB (Pinecone/Milvus)', 'RAG Architecture', 'Model Fine-tuning'].map((check) => (
                  <div key={check} className="flex items-center gap-3">
                    <span className="text-blue-500">✦</span>
                    <span className="text-sm font-medium">{check}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-900 rounded-2xl p-8 border border-white/10 font-mono text-sm shadow-2xl">
              <div className="text-pink-400"># AI Agent Initialization</div>
              <div className="text-blue-300">const</div> <div className="text-white">agent = await AI.create(&#123;</div>
              <div className="pl-4 text-slate-400">model: <span className="text-green-400">"technocorps-v1"</span>,</div>
              <div className="pl-4 text-slate-400">role: <span className="text-green-400">"business_analyst"</span>,</div>
              <div className="pl-4 text-slate-400">tools: [<span className="text-green-400">"database"</span>, <span className="text-green-400">"search"</span>]</div>
              <div className="text-white">&#125;);</div>
              <div className="mt-4 text-slate-500">// Processing user query...</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8 italic">Predict the future by creating it.</h2>
        <HashLink 
          smooth to="/#contact"
          className="bg-blue-600 hover:bg-blue-500 px-10 py-5 rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95 inline-block"
        >
          Automate Your Business
        </HashLink>
      </section>
    </div>
  );
};

export default AIPage;