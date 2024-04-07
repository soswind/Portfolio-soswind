


export default function Skills() {

  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Remix' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'MongoDB' },
    { name: 'MySQL' },
    { name: 'Mongoose' },
    { name: 'PHP' },
    { name: 'Tailwind CSS'},
    { name: 'WordPress'},
    { name: 'Figma'},
    { name: 'Github'}
  ];

  return (
    <div className="p-8 pt-16 mb-20">
      <div className="md:w-3/4 mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">Kompetencer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 text-center border border-gray-200 rounded shadow-sm bg-white">
              <p className="text-black-900 font-semibold text-m">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



