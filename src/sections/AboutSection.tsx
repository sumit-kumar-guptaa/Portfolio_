"use client";
import { 
  Brain, 
  Code, 
  Database, 
  Lightbulb, 
  Target, 
  Award,
  Clock
} from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: Code, number: "25+", label: "ML Projects Completed" },
    { icon: Award, number: "5+", label: "Certifications Earned" },
    { icon: Database, number: "15+", label: "Technologies Mastered" },
    { icon: Clock, number: "1000+", label: "Hours of Coding" }
  ];

  const interests = [
    { 
      icon: Brain, 
      title: "Machine Learning & AI", 
      desc: "Deep learning, Neural Networks, Computer Vision, NLP",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn"]
    },
    { 
      icon: Database, 
      title: "Data Engineering", 
      desc: "ETL Pipelines, Big Data Processing, Cloud Computing",
      technologies: ["Apache Spark", "AWS", "Docker"]
    },
    { 
      icon: Code, 
      title: "Full-Stack Development", 
      desc: "Modern web applications with React, Node.js, Python",
      technologies: ["React", "Next.js", "Python"]
    },
    { 
      icon: Lightbulb, 
      title: "AI Innovation", 
      desc: "Research, experimentation, and cutting-edge solutions",
      technologies: ["Research", "Innovation", "Strategy"]
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights and building intelligent systems
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* About Text */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I am Sumit Kumar Gupta, an aspiring Data Scientist and AI Developer with a passion 
              for transforming complex data into actionable insights and building intelligent systems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              My expertise spans across machine learning, deep learning, natural language processing, 
              and full-stack development. I specialize in developing end-to-end ML pipelines, from 
              data preprocessing and model training to deployment and monitoring.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With proficiency in Python, TensorFlow, PyTorch, and modern web technologies, I create 
              scalable solutions that bridge the gap between advanced AI research and practical business applications.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-colors duration-200"
              >
                <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-3">
                  <achievement.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white">{achievement.number}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-colors duration-200"
              >
                <div className="inline-flex p-3 bg-cyan-500/20 rounded-lg mb-4">
                  <interest.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{interest.desc}</p>
                <div className="space-y-1">
                  {interest.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-block px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded mr-1 mb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Goals */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Professional Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Contribute to cutting-edge AI research and development",
              "Build scalable ML systems that impact millions of users",
              "Bridge the gap between AI research and practical applications",
              "Lead data-driven innovation in emerging technologies"
            ].map((goal, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
