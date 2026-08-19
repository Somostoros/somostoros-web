export default function Maintenance() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        
        <div className="text-center md:text-left">
          <p className="text-[#30CED8] font-bold tracking-[0.3em] uppercase mb-4">
            Los Toros de Alicante
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            Estamos
            <br />
            trabajando
          </h1>

          <p className="text-xl text-gray-300 max-w-xl mb-8">
            Estamos preparando nuestra nueva casa digital.
            Muy pronto podrás conocer todo lo que pasa dentro y fuera
            del campo.
          </p>

          <div className="inline-block border border-[#30CED8] px-6 py-3">
            <span className="text-[#30CED8] font-bold tracking-widest">
              PASIÓN · EQUIPO · SOFTBOL
            </span>
          </div>

          <p className="mt-8 text-2xl font-bold">
            #somostoros
          </p>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px]">
          <div className="absolute w-72 h-72 rounded-full bg-[#30CED8]/10 blur-3xl" />

          <div className="relative border-2 border-[#30CED8] p-10 text-center">
            <div className="text-8xl mb-6">🐂</div>

            <div className="bg-[#660033] px-6 py-4">
              <p className="font-bold tracking-widest">
                NUEVA WEB
              </p>
              <p className="text-[#30CED8] text-sm mt-1">
                EN CONSTRUCCIÓN
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}