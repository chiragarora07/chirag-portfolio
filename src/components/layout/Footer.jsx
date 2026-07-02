function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-xl font-bold text-blue-500">
          Chirag Arora
        </h2>

        <p className="text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Chirag Arora. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;