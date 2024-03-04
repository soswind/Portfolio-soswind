import { useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";

export async function loader({ request }) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/signin"
  });
  return user;
}


export default function Profile() {
  const user = useLoaderData();

  return (
    <div className="md:flex md:space-x-6 p-4 md:p-6 pt-16 md:pt-32 mt-20 sm:mt-28 md:mt-0">
      <div className="md:w-1/2 space-y-4 md:space-y-6 px-2 md:px-10 flex justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold">En lille introduktion</h1><br></br>
          <p className="text-gray-700">
            Jeg er en ambitiøs studerende, der brænder for at lære og vokse inden for feltet.
            På min uddannelse har jeg fået grundlæggende kendskab til PHP, MongoDB, MySQL samt HTML, CSS og JavaScript.<br/><br />
            Jeg har også taget de første skridt indenfor frameworks som React og Remix, hvor jeg har arbejdet med Node.js som backend og stiftet bekendskab med Express.js.<br/><br />
            Som praktikant ser jeg frem til at udnytte denne mulighed til at dygtiggøre mig yderligere og omsætte mine teoretiske kundskaber til praktisk erfaring.
            Jeg er ivrig efter at blive en del af et team, hvor jeg kan bidrage med mine kompetencer og samtidig lære af erfarne fagfolk.<br/><br />
            Jeg ser frem til at anvende mine tekniske færdigheder og min positive attitude til at bidrage til jeres projekt og samtidig styrke mine egne kompetencer inden for webudvikling.
          </p>
        </div>
      </div>
      
      <div className="md:w-1/2 space-y-6 md:space-y-6 px-2 md:px-10 flex justify-center items-center">
        <img src="IMG_4958.JPG" alt="Profilbillede" className="w-80 h-auto mb-4 md:mb-6 rounded-xl" /> {/* Add your image here */}
      </div>
    </div>
  );
}



{
  /*
      <Form method="post">
        <button>Logout</button>
      </Form>
    </div>
  
  );
}



export async function action({ request }) {
  await authenticator.logout(request, 
    { redirectTo: "/signin" });
}

  */
}