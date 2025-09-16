import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 border-t border-white/10">
        <p>© {new Date().getFullYear()} HubStack. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-2">
          <Link href="https://github.com" target="_blank">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://twitter.com" target="_blank">
            Twitter
          </Link>
        </div>
      </footer>
    </>
  );
}
