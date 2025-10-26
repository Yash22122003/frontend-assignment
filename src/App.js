import React, { useState } from "react";
import QuestionIcon from './QuestionIcon.svg';
import GalleryIcon from './GalleryIcon.svg';
import './App.css';

function ProfileWidget() {
  const [tab, setTab] = useState("about");
  return (
    <div className="bg-[#171717] rounded-[28px] w-full max-w-xl shadow-[inset_0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.25)] mb-10 p-6 min-h-[300px] mx-auto">
      <div className="flex flex-row gap-2 mb-4">
        <div className="flex items-center gap-2">
          <img src={QuestionIcon} alt="Question" className="w-6 h-6" />
        </div>
        <button
          onClick={() => setTab("about")}
          className={`px-8 py-2 rounded-[16px] font-semibold text-lg ${tab === "about" ? "bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(10,10,10,1),-8.43px_-16.87px_50.6px_-16.87px_rgba(72,91,113,1)]" : "bg-gradient-to-r from-[rgba(39,39,40,0.49)] to-[rgba(150,190,231,0.24)] text-[#A3ADB2] slide-effect"}`}
        >
          <span className="relative z-10">About Me</span>
        </button>
        <button
          onClick={() => setTab("exp")}
          className={`px-8 py-2 rounded-[16px] font-semibold text-lg ${tab === "exp" ? "bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(10,10,10,1),-8.43px_-16.87px_50.6px_-16.87px_rgba(72,91,113,1)]" : "bg-gradient-to-r from-[rgba(39,39,40,0.49)] to-[rgba(150,190,231,0.24)] text-[#A3ADB2] slide-effect"}`}
        >
          <span className="relative z-10">Experiences</span>
        </button>
        <button
          onClick={() => setTab("rec")}
          className={`px-8 py-2 rounded-[16px] font-semibold text-lg ${tab === "rec" ? "bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(10,10,10,1),-8.43px_-16.87px_50.6px_-16.87px_rgba(72,91,113,1)]" : "bg-gradient-to-r from-[rgba(39,39,40,0.49)] to-[rgba(150,190,231,0.24)] text-[#A3ADB2] slide-effect"}`}
        >
          <span className="relative z-10">Recommended</span>
        </button>
      </div>
      <div className="h-[150px] overflow-y-auto pr-2 force-scrollbar">
        {tab === "about" && (
          <div className="text-[#969696] text-lg">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
            <br/><br/>
            I specialize in helping businesses streamline their sales processes and improve customer relationships through our comprehensive CRM solutions. My expertise includes lead management, pipeline optimization, and sales analytics.
            <br/><br/>
            When I'm not working, I enjoy spending time with my family, hiking in the beautiful Santa Carla mountains, and volunteering at the local community center where we help organize events for families with young children.
            <br/><br/>
            I'm passionate about technology and how it can transform businesses. I've been fortunate to work with clients across various industries, from small startups to large enterprises, helping them achieve their sales goals and build stronger customer connections.
            <br/><br/>
            My approach is always client-focused, taking the time to understand each business's unique needs and challenges. I believe in building long-term partnerships rather than just making sales, which is why many of my clients have been with me for years.
            <br/><br/>
            In my role at Salesforce, I've helped over 200 companies implement our CRM solutions, resulting in an average 35% increase in sales productivity. I'm particularly proud of my work with mid-market companies, where I've helped them scale their sales operations from startup phase to enterprise level.
            <br/><br/>
            My educational background includes a Bachelor's degree in Business Administration from UC Berkeley, with a focus on Marketing and Technology. I'm also certified in Salesforce Sales Cloud, Service Cloud, and Marketing Cloud, which allows me to provide comprehensive solutions to my clients.
            <br/><br/>
            Outside of work, I'm an active member of the Santa Carla Business Network and volunteer as a mentor for young professionals entering the tech industry. I believe in giving back to the community that has given me so much.
            <br/><br/>
            My sales philosophy centers around understanding each client's unique challenges and providing tailored solutions that drive real business value. I've consistently exceeded my sales targets by focusing on long-term relationship building rather than short-term transactions.
            <br/><br/>
            I'm particularly excited about the future of AI in sales and how it can help businesses make more informed decisions. I regularly attend industry conferences and stay up-to-date with the latest trends in sales technology and methodologies.
          </div>
        )}
        {tab === "exp" && (
          <div className="text-[#969696] text-lg">
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Salesforce Sales Representative</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">2021 - Present</p>
              <p>Leading enterprise sales initiatives and managing key client relationships across the West Coast region. Achieved 150% of quota in 2023 and received President's Club recognition.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Senior Account Manager - TechCorp</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">2018 - 2021</p>
              <p>Managed a portfolio of 50+ enterprise clients, achieving 120% of annual sales targets consistently. Led a team of 5 account executives and mentored junior sales professionals.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Business Development Specialist</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">2016 - 2018</p>
              <p>Developed new business opportunities and strategic partnerships in the SaaS industry. Generated $2M+ in new revenue through innovative prospecting strategies and relationship building.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Sales Associate - StartupXYZ</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">2014 - 2016</p>
              <p>Built foundational sales processes and helped scale the company from startup to Series A funding. Created the company's first CRM implementation and trained the entire sales team.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Sales Intern - GlobalTech Solutions</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">2013 - 2014</p>
              <p>Gained foundational experience in B2B sales, lead qualification, and customer relationship management. Assisted senior sales team with market research and competitive analysis.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Key Achievements</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">Career Highlights</p>
              <p>• Closed largest deal in company history ($5M enterprise contract)<br/>
              • Consistently ranked in top 10% of sales performers<br/>
              • Led successful implementation of AI-powered sales tools<br/>
              • Mentored 15+ junior sales professionals</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Sales Methodology</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">Approach & Techniques</p>
              <p>I follow a consultative selling approach that focuses on understanding client pain points and providing tailored solutions. My methodology includes thorough discovery, needs assessment, and value-based presentations that align with each client's business objectives.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Industry Expertise</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">Specialized Knowledge</p>
              <p>Deep experience across multiple industries including healthcare, financial services, manufacturing, and technology. I understand the unique challenges each sector faces and can provide industry-specific solutions and best practices.</p>
            </div>
          </div>
        )}
        {tab === "rec" && (
          <div className="text-[#969696] text-lg">
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Salesforce Trailhead</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">Certification Program</p>
              <p>Advanced Sales Cloud Specialist certification with focus on enterprise implementations.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">HubSpot Sales Software</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">CRM Platform</p>
              <p>Comprehensive training in lead management, pipeline optimization, and sales automation.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">LinkedIn Sales Navigator</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">Prospecting Tool</p>
              <p>Advanced lead generation and social selling techniques for B2B sales professionals.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Salesforce Einstein Analytics</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">AI-Powered Insights</p>
              <p>Leveraging artificial intelligence for predictive sales analytics and customer insights.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Gong.io Sales Coaching</h3>
              <p className="text-sm text-[#A3ADB2] mb-1">Conversation Intelligence</p>
              <p>Using conversation analytics to improve sales performance and customer engagement.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GalleryWidget() {
  const [images, setImages] = React.useState([]);
  const fileInputRef = React.useRef(null);

  const handleAddImage = () => {
    if (images.length < 4) fileInputRef.current.click();
  };

  const handleFiles = (e) => {
    const files = e.target.files;
    if (files && files[0] && images.length < 4) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImages((prev) => [...prev, ev.target.result].slice(0, 4));
      };
      reader.readAsDataURL(files[0]);
      e.target.value = null;
    }
  };

  return (
    <div className="bg-[#171717] rounded-[28px] w-full max-w-xl shadow-[inset_0px_4px_10px_2px_rgba(0,0,0,0.25)] p-6 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={GalleryIcon} alt="Gallery" className="w-6 h-8" />
          <span className="text-2xl font-semibold text-white">Gallery</span>
        </div>
        <button
          className={`bg-[rgba(255,255,255,0.03)] text-xs font-bold uppercase rounded-full px-6 py-2 tracking-widest shadow-[9px_10px_7.1px_0px_rgba(0,0,0,0.4),-0.5px_-0.5px_6.9px_0px_rgba(255,255,255,0.25)] backdrop-blur-[104.56px] text-white border border-[#96BEE7] transition-opacity ${images.length >= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
          disabled={images.length >= 4}
          onClick={handleAddImage}
          aria-disabled={images.length >= 4}
        >
          Add Image
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFiles}
          aria-label="Upload Image"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Array(4).fill(null).map((_, i) => (
          <div
            key={i}
            className="w-full h-40 bg-[#363C43] rounded-2xl shadow-inner flex items-center justify-center overflow-hidden transition-all duration-400 ease-in-out hover:scale-110 hover:-rotate-6 hover:shadow-[20px_25px_15px_0px_rgba(0,0,0,0.8),-2px_-2px_10px_0px_rgba(255,255,255,0.2)] cursor-pointer"
            tabIndex={0}
            aria-label={images[i] ? `Image slot ${i+1}` : `Empty slot ${i+1}`}
          >
            {images[i] ? (
              <img src={images[i]} alt={`Uploaded ${i+1}`} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-400 ease-in-out" />
            ) : (
              <span className="text-[#6F787C] font-semibold">+</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#373E44] to-[#191B1F] flex flex-row">
      {/* Left half, empty but responsive */}
      <div className="w-1/2 min-w-[350px] hidden md:block"></div>
      {/* Right half for widgets */}
      <div className="flex-1 flex flex-col items-end justify-center p-12">
        <div className="w-full max-w-3xl">
          <ProfileWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
