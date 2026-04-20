import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LinkPreview } from '../components/ui/link-preview';
import Link from 'next/link';

const KennyPortfolio = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 relative" style={{
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
    }}>
      {/* Binder holes
      <div className="absolute left-4 top-8 space-y-8">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-12 h-12 rounded-full bg-gray-300 border-4 border-gray-400 shadow-inner"></div>
        ))}
      </div> */}

      <div className="max-w-5xl mx-auto ml-24">
        
        {/* Header - Portfolio Title with code comment */}
        <div className="mb-8 relative">
          <div className="inline-block relative">
            <div className="absolute -top-6 -left-8 text-green-600 font-mono text-sm transform -rotate-10">
              # README.md
            </div>
             <h1 className="text-7xl font-black tracking-tight">
            <span style={{ "--r": "-2deg" }} className="inline-block px-2 py-1 bg-green-700 text-white animate-[float_3s_ease-in-out_infinite]">K</span>
<span style={{ "--r": "1deg" }}  className="inline-block px-2 py-1 bg-blue-600 text-white animate-[float_3.2s_ease-in-out_infinite]">E</span>
<span style={{ "--r": "-1deg" }} className="inline-block px-2 py-1 bg-green-400 text-white animate-[float_2.8s_ease-in-out_infinite]">H</span>
<span style={{ "--r": "2deg" }}  className="inline-block px-2 py-1 bg-blue-500 text-white animate-[float_3.1s_ease-in-out_infinite]">I</span>
<span style={{ "--r": "-2deg" }} className="inline-block px-2 py-1 bg-green-500 text-white animate-[float_2.9s_ease-in-out_infinite]">N</span>
<span style={{ "--r": "1deg" }}  className="inline-block px-2 py-1 bg-blue-500 text-white animate-[float_3.3s_ease-in-out_infinite]">D</span>
<span style={{ "--r": "-1deg" }} className="inline-block px-2 py-1 bg-green-600 text-white animate-[float_3s_ease-in-out_infinite]">E</span>

              {/* <span className="inline-block px-1 py-1  text-white transform rotate-2"> </span>
              <span className="inline-block px-2 py-1 bg-green-700 text-white transform -rotate-2">A</span>
              <span className="inline-block px-2 py-1 bg-blue-600 text-white transform -rotate-1">D</span>
              <span className="inline-block px-2 py-1 bg-green-400 text-white transform -rotate-2">E</span>
              <span className="inline-block px-2 py-1 bg-blue-500 text-white transform -rotate-1">N</span>
              <span className="inline-block px-2 py-1 bg-green-500 text-white transform -rotate-2">U</span>
              <span className="inline-block px-2 py-1 bg-blue-500 text-white transform -rotate-1">G</span>
              <span className="inline-block px-2 py-1 bg-green-600 text-white transform -rotate-2">A</span> */}
            </h1>
          </div>

          {/* Function return with name */}
          <div className="mt-4 font-mono">
            <p className="text-gray-500 text-sm">return &#123;</p>
            <div className="ml-6">
              <p className="text-blue-600">"name"<span className="text-gray-500">:</span> <span className="text-green-600">"KEHINDE (KENNY) ADENUGA"</span>,</p>
              <p className="text-blue-600">"mood"<span className="text-gray-500">:</span> <span className="text-green-600">"figuring out my first co-op"</span>,</p>
              <p className="text-blue-600">"current_role"<span className="text-gray-500">:</span> <span className="text-green-600">"W26 co-op @ CIHI"</span>,</p>
              <p className="text-blue-600">"interests"<span className="text-gray-500">:</span> <span className="text-green-600">"Software Engineering, ML/AI, Data Science & IT Support"</span>,</p>
              
              <p className="text-blue-600">"education"<span className="text-gray-500">:</span> <span className="text-green-600">"Computer Science Student @ UoGuelph"</span></p>
            </div>
            <p className="text-gray-500">&#125;</p>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Column - About & Experience */}
          <div className="col-span-12 md:col-span-8">
            
            {/* Code comment about developer
            <div className="mb-6 relative">
              <div className="font-mono text-sm mb-2">
                <span className="text-gray-500">// Developer Profile</span>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>
{`const kenny = {
  obsessions: [
    "Cybersecurity 🔒",
    "Full-stack Development 💻", 
    "AI/ML Integration 🤖",
    "Clean Code Architecture ✨"
  ],
  currentFocus: "Building secure, scalable web applications",
  yearsOfExperience: 4,
  status: "Actively shipping projects 🚀"
}`}
                </pre>
              </div>

            
            </div> */}


            {/* Experience Section as array */}
<div className="mb-6">
  <div className="font-mono text-lg font-bold mb-4">
    <span className="text-blue-600">const</span>{" "}
    <span className="text-green-600">experience</span> = [
  </div>

  <div className="space-y-4 ml-4">

    {/* Research Assistant */}
    <div className="bg-white border-l-4 border-green-600 p-4 shadow-md font-mono text-sm">
      <div className="text-gray-500 mb-2">&#123;</div>
      <div className="ml-4">
        <p><span className="text-blue-600">period:</span> <span className="text-green-600">"Summer 2026"</span>,</p>
        <p><span className="text-blue-600">title:</span> <span className="text-green-600">"Undergraduate Research Assistant"</span>,</p>
        <p><span className="text-blue-600">company:</span> <span className="text-green-600">"University of Guelph - College of Engineering"</span>,</p>
        <p><span className="text-blue-600">role:</span> [</p>
        <div className="ml-4 text-base text-gray-700 space-y-1">
          <p>"Modeled VLC systems for precision agriculture using MATLAB and Python",</p>
          <p>"Designed algorithms for resource allocation and positioning",</p>
          <p>"Performed simulation analysis and documented findings in reports and presentations",</p>
          <p>"Collaborated with a research team on ongoing projects"</p>
        </div>
        <p>]</p>
      </div>
      <div className="text-gray-500">&#125;,</div>
    </div>

    {/* CIHI */}
    <div className="bg-white border-l-4 border-green-600 p-4 shadow-md font-mono text-sm">
      <div className="text-gray-500 mb-2">&#123;</div>
      <div className="ml-4">
        <p><span className="text-blue-600">period:</span> <span className="text-green-600">"Winter 2026"</span>,</p>
        <p><span className="text-blue-600">title:</span> <span className="text-green-600">"Enterprise Architecture Co-op"</span>,</p>
        <p><span className="text-blue-600">company:</span> <span className="text-green-600">"CIHI"</span>,</p>
        <p><span className="text-blue-600">role:</span> [</p>
        <div className="ml-4 text-base text-gray-700 space-y-1">
          <p>"Visualized and analyzed enterprise IT resources",</p>
          <p>"Monitored PHI access and logging capabilities",</p>
          <p>"Supported enterprise architecture operations and documentation"</p>
        </div>
        <p>],</p>
        <span className="text-blue-600">report:</span> <Link href='/wtr1'><span className="text-green-600">"click me"</span></Link>,
      </div>
      <div className="text-gray-500">&#125;,</div>
    </div>

    {/* PM Accelerator */}
    <div className="bg-white border-l-4 border-green-600 p-4 shadow-md font-mono text-sm">
      <div className="text-gray-500 mb-2">&#123;</div>
      <div className="ml-4">
        <p><span className="text-blue-600">period:</span> <span className="text-green-600">"Summer 2025"</span>,</p>
        <p><span className="text-blue-600">title:</span> <span className="text-green-600">"Software Engineering Intern - AI/ML"</span>,</p>
        <p><span className="text-blue-600">company:</span> <span className="text-green-600">"PM Accelerator"</span>,</p>
        <p><span className="text-blue-600">role:</span> [</p>
        <div className="ml-4 text-base text-gray-700 space-y-1">
          <p>"Developed AI applications in an agile team environment",</p>
          <p>"Built Flutter frontends for cross-platform deployment"</p>
        </div>
        <p>]</p>
      </div>
      <div className="text-gray-500">&#125;,</div>
    </div>

    {/* Headstarter */}
    <div className="bg-white border-l-4 border-green-600 p-4 shadow-md font-mono text-sm">
      <div className="text-gray-500 mb-2">&#123;</div>
      <div className="ml-4">
        <p><span className="text-blue-600">period:</span> <span className="text-green-600">"Summer 2024"</span>,</p>
        <p><span className="text-blue-600">title:</span> <span className="text-green-600">"Software Engineering Fellow"</span>,</p>
        <p><span className="text-blue-600">company:</span> <span className="text-green-600">"Headstarter AI"</span>,</p>
        <p><span className="text-blue-600">role:</span> [</p>
        <div className="ml-4 text-base text-gray-700 space-y-1">
          <p>"Worked in a 4-person agile team using MVC architecture",</p>
          <p>"Deployed 5+ AI applications with high accuracy"</p>
        </div>
        <p>]</p>
      </div>
      <div className="text-gray-500">&#125;,</div>
    </div>

    {/* Riipen */}
    <div className="bg-white border-l-4 border-green-600 p-4 shadow-md font-mono text-sm">
      <div className="text-gray-500 mb-2">&#123;</div>
      <div className="ml-4">
        <p><span className="text-blue-600">period:</span> <span className="text-green-600">"Early 2024"</span>,</p>
        <p><span className="text-blue-600">title:</span> <span className="text-green-600">"Web Development Team Member"</span>,</p>
        <p><span className="text-blue-600">company:</span> <span className="text-green-600">"Riipen"</span>,</p>
        <p><span className="text-blue-600">role:</span> [</p>
        <div className="ml-4 text-base text-gray-700 space-y-1">
          <p>"Contributed to a 50% increase in customer reach",</p>
          <p>"Improved UX/UI by 60%",</p>
          <p>"Helped drive a 30% increase in online sales"</p>
        </div>
        <p>]</p>
      </div>
      <div className="text-gray-500">&#125;</div>
    </div>

  </div>

  <div className="font-mono text-lg font-bold mt-2">];</div>
</div>

            {/* Projects as array of objects */}
            <div className="mb-6">
              <div className="font-mono text-lg font-bold mb-4">
                <span className="text-blue-600">const</span> <span className="text-green-600">projects</span> = [
              </div>
              <div className="grid grid-cols-2 gap-3 ml-4">
                {[
                  { name: "TeamUp Chat", tech: "MERN Stack", url:"https://github.com/kennyyy5/team-up-chat-app"},
                  { name: "AskPDF", tech: "AI/RAG", url:"https://github.com/kennyyy5/ask-pdf" },
                  { name: "PinPoint", tech: "React/Open AI API", url:"https://github.com/kennyyy5/pinpoint"},
                  { name: "AI Mock Interview Agent", tech: "NLP/Gemini API" , url:"https://github.com/kennyyy5/ai-interview-agent"},
                  { name: "Bike Buyer Dashboard", tech: "Excel/Analytics" , url:"https://github.com/kennyyy5/Bike-Buyer-Dashboard-Excel-"},
                  { name: "Amazon Sentiment Analysis", tech: "NLP/ML" , url:"https://github.com/kennyyy5/amazon-echo-reviews-sentiment-analysis"},
                  { name: "Customer Churn Prediction", tech: "Streamlit/ML" , url:"https://github.com/kennyyy5/customer-churn"},
            
                  { name: "Book Recommendation App", tech: "Streamlit/ML" , url:"https://github.com/kennyyy5/book-recommendation-app"},
              
                   
                ].map((project, i) => (
                  <div key={i} className="bg-white text-green-400 p-3 rounded font-mono text-base shadow-md">
                    <div className="text-gray-500 mb-1">&#123;</div>
                    <LinkPreview url={project.url}  >
                      <p><span className="text-green-400">name:</span> "{project.name}",</p>
                      <p><span className="text-green-400">tech:</span> "{project.tech}",</p>
                    </LinkPreview>
                    <div className="text-gray-500">&#125;{i < 5 ? ',' : ''}</div>
                  </div>
                ))}
              </div>
              <div className="font-mono text-lg font-bold mt-2">];</div>
            </div>
          </div>

          {/* Right Column - Photo & Code Stickers */}
          <div className="col-span-12 md:col-span-4">
            {/* Photo with code frame */}
            <div className="bg-blue p-3 shadow-lg mb-4 transform rotate-2 relative font-mono">
              <div className="text-green-400 text-base mb-1">// Profile Image</div>
              <img className="w-full bg-gray-800 flex items-center justify-center text-7xl border-2 border-green-500" src='img-of-me.png'/>
                
           
              <div className="text-green-400 text-base mt-1">return developer.photo;</div>
              
              {/* Paper clip */}
              {/* <div className="absolute -top-3 -right-3">
                <div className="w-8 h-12 bg-gray-400 transform -rotate-12" style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'
                }}></div>
              </div> */}
            </div>

            {/* Terminal-style signature */}
            <div className="bg-blue text-green-400 p-3 rounded mb-4 font-mono text-sm shadow-lg">
              <p>$ whoami</p>
              <p >kenny@compsci:~$</p>
            </div>

           

            {/* Tech stack badges */}
            <div className="mt-6 space-y-2">
              <div className="bg-green-600 text-white px-3 py-2 rounded font-mono text-base font-bold shadow-md">
                {'<JavaScript>'} 
              </div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded font-mono text-base font-bold shadow-md">
                {'<Python>'}
              </div>
              <div className="bg-green-600 text-white px-3 py-2 rounded font-mono text-base font-bold shadow-md">
                {'<Java>'}
              </div>
            
            
               <div className="bg-green-600 text-white px-3 py-2 rounded font-mono text-base font-bold shadow-md">
                {'<AI/ML>'}
              </div>
                <div className="bg-blue-600 text-white px-3 py-2 rounded font-mono text-base font-bold shadow-md">
                {'<SQL/NoSQL>'}
              </div>
              <div className="bg-green-600 text-white px-3 py-2 rounded font-mono text-base font-bold shadow-md">
                {'<Excel/Tableau/PowerBI>'}
              </div>
             
            </div>
          </div>
        </div>

         {/* Code comment sticky note */}
            <div className="bg-yellow-200 p-4 shadow-md transform rotate-1 relative font-mono text-base">
              <div className="text-gray-500">/* TODO:</div>
              <div className="text-gray-700 my-2">
               Reach out to me!<br/>
                kennyyy5 on github<br/>
                /in/kenny-adenuga on linkedin
              </div>
              <div className="text-gray-500">*/</div>
            </div>

            {/* Contact & Info - formatted as object properties
            <div className="mb-6 font-mono text-sm bg-white p-4 border-2 border-gray-300 rounded">
              <div className="text-purple-600 mb-2">developer.contact = &#123;</div>
              <div className="ml-4 space-y-1">
                <p><span className="text-blue-600">email:</span> <span className="text-green-600">"kenny@example.com"</span>,</p>
                <p><span className="text-blue-600">github:</span> <span className="text-green-600">"github.com/kennyyy5"</span>,</p>
                <p><span className="text-blue-600">linkedin:</span> <span className="text-green-600">"linkedin.com/in/kenny"</span>,</p>
                <p><span className="text-blue-600">location:</span> <span className="text-green-600">"Ontario, Canada 🇨🇦"</span></p>
              </div>
              <div className="text-purple-600">&#125;;</div>
            </div> */}
        {/* Footer as console log */}
        <div className="mt-8 font-mono text-sm text-gray-600">
          <p>console.log("© 2026 - kennyisadeveloper");</p>
        </div>
      </div>
    </div>
  );
};

export default KennyPortfolio;