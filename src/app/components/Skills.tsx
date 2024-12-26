export default function Skills() {
    const skills = {
      "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      "Backend": ["Node.js", "Express", "MySQL"],
      "Tools": ["Git", "GitHub", "VS Code", "Figma"],
      "Other": ["Responsive Design", "SEO", "Performance Optimization"]
    }
  
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-gray-600">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }