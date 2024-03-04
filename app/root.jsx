import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import appStylesHref from "./app.css";
import Nav from "./components/Nav";
import { authenticator } from "./services/auth.server";
import stylesheet from "./tailwind.css";
import Profile from "./routes/profile";
import Skills from "./routes/kompetencer";
import Footer from "./routes/footer";
import Experience from "./routes/experience";


export const links = () => [{ rel: "stylesheet", href: appStylesHref }, 
{ rel: "stylesheet", href: stylesheet}];

export async function loader({ request }) {
    return await authenticator.isAuthenticated(request );
}

export default function App() {
const user = useLoaderData();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Nav />
                <Profile />
                <Skills />
                <Experience />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Footer />
            </body>
        </html>
    );
}
