   
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:px-8 lg:px-12 bg-black text-white">

      <h1 className="text-xl md:text-2xl font-bold">
        Aura Studio.
      </h1>

      <nav className="hidden md:flex gap-4 lg:gap-8">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="md:hidden text-2xl">
        
      </button>

    </header>
  );
}

