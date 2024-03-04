import { useState } from "react";
import { authenticator } from "../services/auth.server";

export async function loader({ request }) {
  await authenticator.isAuthenticated(request, { failureRedirect: "/signin" });
  return {};
}

export const meta = () => {
  return [{ title: "Remix Post App - Add New Post" }];
};

export default function Skills() {
  const [image, setImage] = useState("https://placehold.co/600x400?text=Add+your+amazing+image");

  const skills = [
    { name: 'HTML', level: 4 },
    { name: 'CSS', level: 4 },
    { name: 'JavaScript', level: 3 },
    { name: 'React', level: 4 },
    { name: 'Remix', level: 4 },
    { name: 'Node.js', level: 4 },
    { name: 'Express.js', level: 3 },
    { name: 'MongoDB', level: 4 },
    { name: 'MySQL', level: 3 },
    { name: 'Mongoose', level: 4 },
    { name: 'PHP', level: 3 },
    { name: 'Tailwind CSS', level: 3},
    { name: 'WordPress', level: 5}
  ];

  return (
    <div className="p-8 pt-16 mb-20">
      <div className="md:w-3/4 mx-auto"> {/* Updated width to md:w-3/4 and added mx-auto for centering */}
        <h1 className="text-3xl font-semibold mb-6 text-center">Kompetencer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded shadow-sm bg-white"> {/* Updated padding and added margin */}
              <p className="text-gray-700 font-semibold mb-2 text-lg">{skill.name}</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-5 h-5 rounded-full ${i < skill.level ? 'bg-orange-500' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



