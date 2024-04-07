import { Links, Link, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import appStylesHref from "./app.css";
import Nav from "./components/Nav";
import stylesheet from "./tailwind.css";
import Profile from "./routes/profile";
import Skills from "./routes/kompetencer";
import Footer from "./routes/footer";
import Projects from "./routes/projects-overview";


export const links = () => [{ rel: "stylesheet", href: appStylesHref }, 
{ rel: "stylesheet", href: stylesheet}];

export default function App() {

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
                <Projects />
                <Skills />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Footer />
            </body>
        </html>
    );
}