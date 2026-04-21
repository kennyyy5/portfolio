"use client"
import React, { useState } from 'react';

const WTR1Page = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const [zoomed, setZoomed] = useState(false);

  const sections = [
    {
      key: 'intro',
      varName: 'introduction',
      color: 'border-green-600',
      headerColor: 'text-green-600',
      title: 'Introduction / Abstract',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-2">
          <p>"During my Winter 2026 work term, I worked as an Enterprise Architecture Student at the Canadian Institute for Health Information (CIHI).",</p>
          <p>"This report highlights my experience, the skills I developed, and how this role shaped my understanding of large-scale technology in healthcare."</p>
        </div>
      )
    },
    {
      key: 'employer',
      varName: 'aboutEmployer',
      color: 'border-blue-600',
      headerColor: 'text-blue-600',
      title: 'About the Employer',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-2">
          <p>"The Canadian Institute for Health Information (CIHI) is a national organization that collects, analyzes, and reports healthcare data to improve Canada's health system.",</p>
          <p>"Its work supports policymakers, healthcare providers, and researchers in making informed decisions.",</p>
          <p>"CIHI provides comparable and actionable data through a wide range of databases, standards, and analytical reports.",</p>
          <p>"A strong emphasis is placed on data privacy, security, and integrity, ensuring that sensitive health information is handled responsibly.",</p>
          <p>"Established in 1994, CIHI has grown into a trusted leader in health information, contributing to initiatives such as health system performance tracking, opioid and mental health reporting, and COVID-19 response efforts.",</p>
          <p>"Working at CIHI showed me how passionate and collaborative teams can drive meaningful impact."</p>
        </div>
      )
    },
    {
      key: 'goals',
      varName: 'goalsAndOutcomes',
      color: 'border-green-500',
      headerColor: 'text-green-500',
      title: 'Goals & Learning Outcomes',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-4">
          <div>
            <p className="text-blue-600 font-mono font-semibold mb-1">initialGoals: [</p>
            <div className="ml-4 space-y-1">
              <p>"Understand how enterprise IT systems support healthcare data infrastructure",</p>
              <p>"Strengthen professionalism through organization, accountability, and communication",</p>
              <p>"Develop research skills by analyzing industry trends and best practices",</p>
              <p>"Improve written communication through structured technical documentation",</p>
              <p>"Enhance verbal communication by clearly presenting technical concepts"</p>
            </div>
            <p className="text-blue-600 font-mono">],</p>
          </div>
          <div>
            <p className="text-blue-600 font-mono font-semibold mb-1">reflection: [</p>
            <div className="ml-4 space-y-1">
              <p>"Successfully achieved most goals",</p>
              <p>"Developed strong understanding of enterprise IT systems",</p>
              <p>"Improved ability to analyze and document complex workflows",</p>
              <p>"Strengthened professionalism; more organized, proactive, and accountable",</p>
              <p>"Improved research skills and learned to evaluate credible sources",</p>
              <p>"Made significant progress in both written and verbal communication",</p>
              <p>"Verbal communication required continued growth"</p>
            </div>
            <p className="text-blue-600 font-mono">]</p>
          </div>
        </div>
      )
    },
    {
      key: 'job',
      varName: 'jobDescription',
      color: 'border-blue-500',
      headerColor: 'text-blue-500',
      title: 'Job Description',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-4">
          <div>
            <p className="text-blue-600 font-mono font-semibold mb-1">responsibilities: [</p>
            <div className="ml-4 space-y-1">
              <p>"Creating and maintaining technical documentation",</p>
              <p>"Supporting architecture diagrams and system models",</p>
              <p>"Collaborating with team members",</p>
              <p>"Visualizing IT data using tools such as Excel and Qlik",</p>
              <p>"Extracting and analyzing data from AWS databases"</p>
            </div>
            <p className="text-blue-600 font-mono">],</p>
          </div>
          <div>
            <p className="text-blue-600 font-mono font-semibold mb-1">keyProject: {"{"}</p>
            <div className="ml-4 space-y-1">
              <p><span className="text-blue-600">name:</span> "Python-based XMI Transformation Script",</p>
              <p><span className="text-blue-600">description:</span> "Converted data models from XMI 2.5.1 to XMI 1.1, supporting automation",</p>
              <p><span className="text-blue-600">details:</span> [</p>
              <div className="ml-4 space-y-1">
                <p>"Extracted tables, columns, and relationships from XML files",</p>
                <p>"Generated updated schemas using Python XML libraries",</p>
                <p>"Tested and refined using sample data with team feedback",</p>
                <p>"Prepared technical documentation outlining functionality and usage"</p>
              </div>
              <p>]</p>
            </div>
            <p className="text-blue-600 font-mono">{"}"}</p>
          </div>
        </div>
      )
    },
    {
      key: 'skills',
      varName: 'skillsAndTech',
      color: 'border-green-600',
      headerColor: 'text-green-600',
      title: 'Skills & Technologies',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-3">
          <div>
            <p className="text-blue-600 font-mono font-semibold mb-1">skills: [</p>
            <div className="ml-4 space-y-1">
              <p>"Data Analysis",</p>
              <p>"Technical Documentation",</p>
              <p>"Research",</p>
              <p>"Enterprise Architecture Concepts",</p>
              <p>"Data Visualization",</p>
            </div>
            <p className="text-blue-600 font-mono">],</p>
          </div>
          <div>
            <p className="text-blue-600 font-mono font-semibold mb-1">techStack: [</p>
            <div className="ml-4 flex flex-wrap gap-2 mt-2 mb-2">
              {["Python", "Qlik", "AWS", "Excel", "XML", "QuickSight"].map((tech, i) => (
                <span key={i} className={`px-3 py-1 rounded font-mono text-sm font-bold text-white shadow-md ${i % 2 === 0 ? 'bg-green-600' : 'bg-blue-600'}`}>
                  {'<'}{tech}{'>'}
                </span>
              ))}
            </div>
            <p className="text-blue-600 font-mono">]</p>
          </div>
        </div>
      )
    },
    {
      key: 'reflection',
      varName: 'reflection',
      color: 'border-blue-600',
      headerColor: 'text-blue-600',
      title: 'Reflection',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-2">
          <p>"This work term significantly changed how I view software development.",</p>
          <p>"Previously, I focused primarily on building applications. At CIHI, I learned that designing systems at scale requires careful planning, documentation, and alignment with business goals.",</p>
          <p>"I also gained a deeper appreciation for collaboration; I learnt enterprise architecture is technical and also involves understanding people, processes, and long-term strategy.",</p>
          <p>"This experience has influenced my future goals by encouraging me to build systems that are not only functional, but also scalable, maintainable, and aligned with user needs."</p>
        </div>
      )
    },
    {
      key: 'conclusion',
      varName: 'conclusion',
      color: 'border-green-500',
      headerColor: 'text-green-500',
      title: 'Conclusion',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-2">
          <p>"Overall, my experience at CIHI was both challenging and rewarding.",</p>
          <p>"I developed technical and professional skills that will support my future co-op roles and career in software and systems design.",</p>
          <p>"This experience reflects my growth from building smaller applications to understanding complex, real-world systems and their broader impact."</p>
        </div>
      )
    },
    {
      key: 'acknowledgments',
      varName: 'acknowledgments',
      color: 'border-blue-500',
      headerColor: 'text-blue-500',
      title: 'Acknowledgments',
      content: (
        <div className="ml-4 text-base text-gray-700 space-y-2">
          <p>"I would like to thank my team at CIHI for their guidance and support throughout my work term.",</p>
          <div className="mt-2">
            <p className="text-blue-600 font-mono font-semibold mb-1">specialThanks: {"{"}</p>
            <div className="ml-4 space-y-1">
              <p><span className="text-blue-600">supervisor:</span> "Emerald for her mentorship and valuable feedback",</p>
              <p><span className="text-blue-600">projectSupport:</span> "Anatoly & Aleksandr for supporting me in the transformation script project",</p>
              <p><span className="text-blue-600">technicalAssist:</span> "Geovanni for his assist with my ERwin import requests",</p>
              <p><span className="text-blue-600">teamEnvironment:</span> "Mia, Jin Yin Chen, Radu & Malina for being welcoming and for a memorable team lunch"</p>
            </div>
            <p className="text-blue-600 font-mono">{"}"}</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div
      className="min-h-screen p-4 md:p-8 relative"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            transparent,
            transparent 31px,
            #94d3e8 31px,
            #94d3e8 32px
          ),
          linear-gradient(to right, #ff6b6b 0px, #ff6b6b 2px, transparent 2px)
        `,
        backgroundColor: '#f5f3e8',
        backgroundSize: '100% 32px, 100% 100%',
        backgroundPosition: '0 0, 80px 0'
      }}
    >
      <div className="max-w-5xl mx-auto pl-16 md:pl-24">
        <div className="grid grid-cols-12 gap-6">

          {/* RIGHT: photo sidebar */}
          <div className="col-span-12 md:col-span-4 md:order-2">
            <div className="sticky top-8">
              <div className="bg-transparent p-3 shadow-lg mb-4 transform rotate-2 relative font-mono">
                <div className="text-green-400 text-base mb-1">// Team Image</div>
{/* Clickable image */}
      <img
        className="w-full border-2 border-green-500  hover:opacity-90 transition-opacity"
        src="team-img.png"
        alt="Team"
       
      />

      
                <div className="text-green-400 text-base mt-1">return workTermReport.photo;</div>
              </div>
              <div className="bg-transparent text-green-400 p-3 rounded mb-4 font-mono text-sm shadow-lg">
                <p>$ wtr1</p>
                <p>kenny@cihi:~$</p>
              </div>
              
            </div>
          </div>

          {/* LEFT: main content */}
          <div className="col-span-12 md:col-span-8 md:order-1">

        {/* Header */}
        <div className="mb-8 relative">
          <div className="inline-block relative">
            <div className="absolute -top-6 -left-8 text-green-600 font-mono text-sm">
              # WTR1.md
            </div>
            <h1 className="text-5xl font-black tracking-tight flex flex-wrap ">
              {["W","T","R","1"].map((letter, i) => {
                const colors = ['bg-green-700','bg-blue-600','bg-green-500','bg-blue-500'];
                return (
                  <span key={i} className={`inline-block px-2 py-1 ${colors[i]} text-white`}>
                    {letter}
                  </span>
                );
              })}
            </h1>
          </div>

          <div className="mt-4 font-mono">
            <p className="text-gray-500 text-sm">return {"{"}</p>
            <div className="ml-6">
              <p className="text-blue-600">"type"<span className="text-gray-500">:</span> <span className="text-green-600">"Work Term Report — CO-OP 1"</span>,</p>
              <p className="text-blue-600">"term"<span className="text-gray-500">:</span> <span className="text-green-600">"Winter 2026"</span>,</p>
              <p className="text-blue-600">"employer"<span className="text-gray-500">:</span> <span className="text-green-600">"Canadian Institute for Health Information (CIHI)"</span>,</p>
              <p className="text-blue-600">"role"<span className="text-gray-500">:</span> <span className="text-green-600">"Enterprise Architecture Student"</span>,</p>
              <p className="text-blue-600">"author"<span className="text-gray-500">:</span> <span className="text-green-600">"Kehinde (Kenny) Adenuga"</span></p>
            </div>
            <p className="text-gray-500">{"}"}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="mb-6">
          <div className="font-mono text-lg font-bold mb-4">
            <span className="text-blue-600">const</span>{' '}
            <span className="text-green-600">workTermReport</span> = [
          </div>

          <div className="space-y-4 ml-4">
            {sections.map((section) => (
              <div
                key={section.key}
                className={`bg-white border-l-4 ${section.color} shadow-md font-mono text-sm`}
              >
                {/* Clickable header */}
                <button
                  onClick={() => toggle(section.key)}
                  className="w-full text-left p-4 flex items-center justify-between"
                >
                  <div>
                    <div className="text-gray-500 mb-1">{"{"}</div>
                    <div className="ml-4">
                      <p>
                        <span className={`${section.headerColor} font-bold text-base`}>
                          {section.varName}
                        </span>
                        <span className="text-gray-500">:</span>{' '}
                        <span className="text-green-600">"{section.title}"</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-lg ml-4">
                    {openSection === section.key ? '▲' : '▼'}
                  </span>
                </button>

                {/* Expandable content */}
                {openSection === section.key && (
                  <div className="px-4 pb-4 ml-4 border-t border-gray-100 pt-3">
                    {section.content}
                  </div>
                )}

                <div className="px-4 pb-2 text-gray-500">{"}},"}</div>
              </div>
            ))}
          </div>

          <div className="font-mono text-lg font-bold mt-2">];</div>
        </div>

        {/* Sticky note */}
        <div className="bg-yellow-200 p-4 shadow-md transform rotate-1 relative font-mono text-base mb-8">
          <div className="text-gray-500">{"/* TODO:"}</div>
          <div className="text-gray-700 my-2">
            Back to portfolio?<br />
            <a href="/" className="text-blue-600 underline">return home</a>
          </div>
          <div className="text-gray-500">{"*/"}</div>
        </div>

            {/* Footer */}
            <div className="mt-8 font-mono text-sm text-gray-600">
              <p>console.log("© 2026 - kennyisadeveloper | WTR1");</p>
            </div>

          </div>{/* end left col */}
        </div>{/* end grid */}
      </div>
    </div>
  );
};

export default WTR1Page;