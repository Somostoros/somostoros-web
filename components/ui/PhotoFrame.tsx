export default function PhotoFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Marco exterior luminoso */}
      <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#30CED8]/60 via-[#30CED8]/20 to-[#30CED8]/60 shadow-2xl">
        
        {/* Placa de cristal */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
          
          {/* Brillo decorativo superior */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#30CED8]/70 to-transparent"
          />

          {/* Tornillo superior izquierdo */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300/60 bg-gradient-to-br from-gray-300 to-gray-700 shadow-lg"
          >
            <div className="h-2 w-2 rounded-full bg-gray-700/80" />
          </div>

          {/* Tornillo superior derecho */}
          <div
            aria-hidden="true"
            className="absolute right-4 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300/60 bg-gradient-to-br from-gray-300 to-gray-700 shadow-lg"
          >
            <div className="h-2 w-2 rounded-full bg-gray-700/80" />
          </div>

          {/* Tornillo inferior izquierdo */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300/60 bg-gradient-to-br from-gray-300 to-gray-700 shadow-lg"
          >
            <div className="h-2 w-2 rounded-full bg-gray-700/80" />
          </div>

          {/* Tornillo inferior derecho */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 right-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300/60 bg-gradient-to-br from-gray-300 to-gray-700 shadow-lg"
          >
            <div className="h-2 w-2 rounded-full bg-gray-700/80" />
          </div>

          {/* Contenido */}
          <div className="px-8 py-6 sm:px-10 sm:py-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}