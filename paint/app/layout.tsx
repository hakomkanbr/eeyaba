import Navbar from "@/components/layout/navbar-normal";
import "../styles/globals.css";
import CFooter from "@/components/layout/footer";
import { dDeCategories } from "@/data/categories";
import dSocialMedia from "@/data/social-media";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <title>My Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar categories={dDeCategories.data} socialMeida={dSocialMedia} />
        {children}
        <CFooter categories={dDeCategories.data} socialMeida={dSocialMedia} />
      </body>
    </html>
  );
}
