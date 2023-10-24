import { Analytics } from '@vercel/analytics/react';
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
const bh1NITJ = document.getElementById("bh1NITJ")
const bh2NITJ = document.getElementById("bh2NITJ")

bh2NITJ.addEventListener("click", function () {
    // Use the following code to load the new HTML file (page2.html)
    // You can use the Fetch API to load the content of the HTML file
    fetch("NITJ\bh2.html")
      .then((response) => response.text())
      .then((html) => {
        // Replace the content of a specific element (e.g., a div) with the new HTML content
        const contentContainer = document.getElementById("contentContainer");
        contentContainer.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading page: " + error);
      });
  });