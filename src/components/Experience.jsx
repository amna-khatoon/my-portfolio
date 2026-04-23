import React from "react";
import { Briefcase, Code, Monitor } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science and Engineering (CSE)",
    institution: "Mangalmay Institute of Engineering & Technology",
    year: "2024 - 2027",
    percentage: "73%",
    description:
      "Graduated with a strong foundation in critical thinking and problem-solving.",
    icon: "🎓",
  },
  {
    degree: "Diploma in Computer Engineering (CSE)",
    institution: "Jamia Millia Islamia",
    year: "2020 - 2023",
    percentage: "83%",
    description: "Built strong technical and problem-solving skills.",
    icon: "🎓",
  },
  {
    degree: "Bihar Board (10th)",
    institution: "S.P High School",
    year: "2020",
    percentage: "82%",
    description:
      "Completed foundational education with good academic performance.",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Zokera",
    year: "2024 - 2025",
    description:
      "Developed and maintained e-commerce web application interfaces.",
    icon: Briefcase,
  },
  {
    role: "SEO Specialist",
    company: "Zokera",
    year: "2025",
    description:
      "Worked on SEO optimization to improve website ranking and performance.",
    icon: Monitor,
  },
  {
    role: "Frontend & Backend Developer",
    company: "Avieron Tech",
    year: "2026",
    description: "Designed and developed full-stack web applications.",
    icon: Code,
  },
];

function Experience() {
  return (
    <section id="education" className="bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12">
          Education & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Education
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gradient-to-r from-blue-600/40 via-purple-600/60 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
              >
                <div className="text-4xl mr-6">{edu.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300 text-sm italic">{edu.year}</p>
                  <p className="text-gray-300 mt-2">{edu.percentage}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Experience
            </h3>

            {experience.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gradient-to-r from-blue-600/40 via-purple-600/60 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
                >
                  <div className="text-4xl mr-6 text-blue-500">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200">
                      {exp.role}
                    </h4>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-gray-300 text-sm italic">{exp.year}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
