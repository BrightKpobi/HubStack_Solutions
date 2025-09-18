import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="py-10 text-center text-gray-400 border-t border-white/10 text-lg">
        <p className="mb-4">
          © {new Date().getFullYear()} HubStack. All rights reserved.
        </p>
        <div className="flex gap-8 justify-center">
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-white transition"
          >
            Twitter
          </Link>
        </div>
      </footer>
    </>
  );
}
