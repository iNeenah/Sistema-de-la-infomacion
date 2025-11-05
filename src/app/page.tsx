import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/logo.png"
                alt="HackLayer Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h1 className="text-xl font-semibold text-gray-900">HackLayer</h1>
            </div>
            <div className="hidden md:flex space-x-1">
              <a href="#introduccion" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">Introducción</a>
              <a href="#negocio" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">Negocio</a>
              <a href="#planificacion" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">Planificación</a>
              <a href="#organizacion" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">Organización</a>
              <a href="#conclusiones" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">Conclusiones</a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
              Sistema de Información Administrativa
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trabajo Final
            <span className="block text-gray-600">Integrador</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Image
              src="/assets/logo.png"
              alt="HackLayer Logo"
              width={60}
              height={60}
              className="rounded-lg shadow-md"
            />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              HackLayer
            </h2>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aplicación de conceptos teóricos en el diseño, planificación y estructuración 
            de un emprendimiento real de <span className="font-semibold text-gray-800">indumentaria tecnológica</span>
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-600">Planificación Estratégica</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-600">Sistema Organizacional</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-600">Análisis FODA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section id="introduccion" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block w-12 h-1 bg-gray-400 rounded-full mb-4"></span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fundamentos teóricos aplicados a un caso real de emprendimiento tecnológico
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              El presente Trabajo Final Integrador tiene como objetivo aplicar los conceptos teóricos 
              de la cátedra de Sistema de Información Administrativa en el diseño, planificación y 
              estructuración de un emprendimiento real.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              El proyecto elegido es <strong>"Hacklayer"</strong>, una marca de indumentaria y accesorios 
              orientada a la cultura de la ciberseguridad y la tecnología. A lo largo de este documento, 
              se desglosará el proyecto desde su concepción de negocio hasta su diseño organizacional 
              y la creación de sus sistemas administrativos.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Objetivos del Proyecto</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Desarrollar el plan estratégico</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Analizar la factibilidad del proyecto</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Definir un Sistema de Información Administrativa (SIA)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Diseñar la estructura de puestos y funciones</span>
                </div>
                <div className="flex items-start space-x-3 md:col-span-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Crear los manuales de procedimiento necesarios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Idea del Negocio */}
      <section id="negocio" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block w-12 h-1 bg-gray-400 rounded-full mb-4"></span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2. Desarrollo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conceptualización y estructuración del emprendimiento HackLayer
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.1. Idea del Negocio</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Hacklayer es una marca de e-commerce y diseño, pionera en Latinoamérica, 
                  enfocada en fusionar la cultura hacker, la ciberseguridad y el estilo urbano.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  El negocio consiste en el diseño, producción y comercialización de indumentaria 
                  (remeras, buzos) y accesorios (tazas, stickers) con diseños conceptuales y auténticos.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Público Objetivo</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Profesionales de IT</li>
                  <li>• Estudiantes de tecnología</li>
                  <li>• Entusiastas de la seguridad informática</li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Modelo de Negocio</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Community-Led Growth</li>
                  <li>• Alianzas estratégicas (ej. Evilsec)</li>
                  <li>• Canal directo al consumidor (D2C)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Planificación Estratégica */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.2. Planificación Estratégica</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Misión</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Vestir a la comunidad tecnológica de Latinoamérica con una identidad que refleje 
                  su pasión, conocimiento y espíritu innovador, ofreciendo productos de alta calidad 
                  que funcionen como un símbolo de pertenencia.
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Visión</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser la marca líder y referente de la cultura hacker y tecnológica en Latinoamérica, 
                  expandiendo nuestra presencia a través de un e-commerce robusto y alianzas estratégicas B2B.
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Objetivos</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                    <span className="text-gray-700"><strong>Año 1:</strong> 100 ventas mensuales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                    <span className="text-gray-700"><strong>Año 2:</strong> E-commerce + 5 productos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                    <span className="text-gray-700"><strong>Año 3:</strong> Equilibrio + 3 contratos B2B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.3. Logo</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  El logo de Hacklayer es una síntesis de sus valores: tecnología, minimalismo y comunidad.
                </p>
                <p className="text-gray-700 mb-4">
                  Consiste en una tipografía sans-serif moderna, con la letra "H" diseñada para evocar 
                  sutilmente el símbolo de un "cursor" de terminal (_), un ícono universalmente reconocido 
                  por nuestro público objetivo.
                </p>
                <p className="text-gray-700">
                  La paleta de colores se basa en el contraste de un verde fósforo sobre un fondo oscuro, 
                  transmitiendo una estética "hacker" sin caer en clichés.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="HackLayer Logo"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.4. Ubicación del Negocio</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ubicación Virtual</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Punto de Venta:</strong> Instagram (@HacklayerStore) y hacklayer.com
                </p>
                <p className="text-gray-700">
                  Operación comercial 100% digital bajo modelo e-commerce
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ubicación Física</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Operaciones:</strong> Base privada (domicilio particular)
                </p>
                <p className="text-gray-700">
                  Gestión de inventario y empaquetado sin costos fijos de local
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Base Legal</h4>
              <p className="text-blue-800 mb-3">
                <strong>Figura Jurídica:</strong> Sociedad por Acciones Simplificada (S.A.S.)
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-700">
                <div>• Ley de Contrato de Trabajo (N° 20.744/74)</div>
                <div>• Ley de Defensa del Consumidor (N° 24.240)</div>
                <div>• Régimen de Marcas y Patentes (N° 22.362)</div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* 
Plan de Desarrollo */}
      <section id="planificacion" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">2.5. Plan de Desarrollo</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.5.1. Sistema de Información Administrativa</h3>
            <p className="text-lg text-gray-700 mb-6">
              Sistema basado en Google Workspace (Google Sheets) de bajo costo y alta eficiencia, 
              centralizando tres pilares operativos:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Gestión de Pedidos</h4>
                <p className="text-gray-700">Registro de cada venta, estado del pago y envío</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Control de Inventario</h4>
                <p className="text-gray-700">Stock en tiempo real de cada producto y talle</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Flujo Financiero</h4>
                <p className="text-gray-700">Registro simple de ingresos y egresos</p>
              </div>
            </div>
          </div>

          {/* Análisis de Factibilidad */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.5.3. Análisis de Factibilidad</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Técnica (ALTA)</h4>
                <p className="text-green-800">
                  Google Sheets es de uso común, no requiere habilidades técnicas avanzadas 
                  y es accesible desde cualquier dispositivo.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Económica (ALTA)</h4>
                <p className="text-green-800">
                  Costo de implementación cero, utilizando herramientas gratuitas.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Operacional (ALTA)</h4>
                <p className="text-green-800">
                  Sistema simple que reemplaza proceso manual caótico. 
                  Adopción inmediata y mejora directa en eficiencia.
                </p>
              </div>
            </div>
          </div>

          {/* Análisis FODA */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">2.5.5. Análisis FODA</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="group bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Fortalezas</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Pioneros en el nicho: Mercado virgen en la región</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Autenticidad: Creado por y para la comunidad</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Diseños Exclusivos: Propiedad intelectual única</span>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Oportunidades</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Sector Tech en Crecimiento: Público objetivo se expande</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Alianzas Estratégicas: Colaboración con comunidades</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Mercado B2B: Alta demanda de merchandising corporativo</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="group bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Debilidades</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Capital Limitado: Crecimiento atado a reinversión</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Equipo Reducido: Dependencia de dos personas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Marca Nueva: Necesidad de construir reconocimiento</span>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Amenazas</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Inestabilidad Económica: Inflación en costos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Aparición de Imitadores: Riesgo de copias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diagrama de Gantt */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.6.1. Diagrama de Gantt</h3>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Desarrollo de Remera T-003</h4>
                <p className="text-gray-600">Cronograma de actividades para el desarrollo del producto estrella</p>
              </div>
              
              {/* Gantt Chart Recreado */}
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Header */}
                  <div className="grid grid-cols-8 gap-2 mb-4 text-sm font-semibold text-gray-700">
                    <div className="col-span-2 p-3 bg-gray-100 rounded">Actividad</div>
                    <div className="p-3 bg-blue-100 rounded text-center">Sem 1</div>
                    <div className="p-3 bg-blue-100 rounded text-center">Sem 2</div>
                    <div className="p-3 bg-blue-100 rounded text-center">Sem 3</div>
                    <div className="p-3 bg-blue-100 rounded text-center">Sem 4</div>
                    <div className="p-3 bg-blue-100 rounded text-center">Sem 5</div>
                    <div className="p-3 bg-blue-100 rounded text-center">Sem 6</div>
                  </div>
                  
                  {/* Gantt Rows */}
                  <div className="space-y-2">
                    {/* Investigación de Mercado */}
                    <div className="grid grid-cols-8 gap-2 text-sm">
                      <div className="col-span-2 p-3 bg-gray-50 rounded font-medium">Investigación de Mercado</div>
                      <div className="p-3 bg-blue-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-blue-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                    </div>
                    
                    {/* Diseño Conceptual */}
                    <div className="grid grid-cols-8 gap-2 text-sm">
                      <div className="col-span-2 p-3 bg-gray-50 rounded font-medium">Diseño Conceptual</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-green-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-green-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                    </div>
                    
                    {/* Prototipado */}
                    <div className="grid grid-cols-8 gap-2 text-sm">
                      <div className="col-span-2 p-3 bg-gray-50 rounded font-medium">Prototipado</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-yellow-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-yellow-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                    </div>
                    
                    {/* Testing y Validación */}
                    <div className="grid grid-cols-8 gap-2 text-sm">
                      <div className="col-span-2 p-3 bg-gray-50 rounded font-medium">Testing y Validación</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-purple-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-purple-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                    </div>
                    
                    {/* Producción */}
                    <div className="grid grid-cols-8 gap-2 text-sm">
                      <div className="col-span-2 p-3 bg-gray-50 rounded font-medium">Producción</div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-gray-100 rounded"></div>
                      <div className="p-3 bg-red-500 rounded text-white text-center">●</div>
                      <div className="p-3 bg-red-500 rounded text-white text-center">●</div>
                    </div>
                  </div>
                  
                  {/* Leyenda */}
                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span>Investigación</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Diseño</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span>Desarrollo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <span>Testing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span>Producción</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema Organizacional */}
      <section id="organizacion" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">2.7. Sistema Organizacional</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sistema de Información Administrativa (SIA)</h3>
            <p className="text-lg text-gray-700 mb-6">
              SIA de Gestión Inicial desarrollado en Google Sheets con tres pestañas interconectadas:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">INVENTARIO</h4>
                <p className="text-blue-800 mb-3">Control de Stock en tiempo real</p>
                <div className="text-sm text-blue-700">
                  <div>• SKU (Código único)</div>
                  <div>• Diseño, Tipo, Talle</div>
                  <div>• Stock_Inicial, Ventas</div>
                  <div>• Stock_Actual (automático)</div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-3">PEDIDOS</h4>
                <p className="text-green-800 mb-3">Gestión de Ventas y Clientes</p>
                <div className="text-sm text-green-700">
                  <div>• ID_Pedido, Fecha, Cliente</div>
                  <div>• Instagram, SKU, Monto</div>
                  <div>• Estado_Pago, Estado_Envío</div>
                  <div>• Nro_Seguimiento</div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">FINANZAS</h4>
                <p className="text-purple-800 mb-3">Flujo de Caja</p>
                <div className="text-sm text-purple-700">
                  <div>• Fecha, Concepto</div>
                  <div>• Ingreso, Egreso</div>
                  <div>• Saldo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Diagrama de Flujo */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Diagrama de Flujo</h3>
            <div className="flex justify-center">
              <Image
                src="/assets/DiagramaDeFlujo.jpg"
                alt="Diagrama de Flujo del Proceso"
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-gray-200 max-w-full h-auto"
                priority={false}
              />
            </div>
          </div>

          {/* Estructura Organizacional */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Estructura Organizacional</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tipo: Estructura Funcional</h4>
              <p className="text-gray-700 mb-4">
                Ideal para startup, agrupa tareas por especialidad (Comercial/Operativo y Creativo/Marketing), 
                permitiendo a los fundadores enfocarse en sus fortalezas.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-gray-900 mb-2">Nivel Estratégico</h5>
                  <p className="text-sm text-gray-700">Gerente General - Decisiones de rumbo organizacional</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-gray-900 mb-2">Nivel Táctico</h5>
                  <p className="text-sm text-gray-700">Gerencias - Planes de acción por departamento</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-gray-900 mb-2">Nivel Operativo</h5>
                  <p className="text-sm text-gray-700">Ejecución - Tareas programadas y rutinarias</p>
                </div>
              </div>
            </div>
          </div>

          {/* Organigrama */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Organigrama</h3>
            <div className="flex justify-center">
              <Image
                src="/assets/organigramaEjemplo.jpg"
                alt="Organigrama de HackLayer"
                width={700}
                height={500}
                className="rounded-lg shadow-lg border border-gray-200 max-w-full h-auto"
                priority={false}
              />
            </div>
          </div>

          {/* Manual de Funciones */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.8. Manual de Funciones y Descripción de Puestos</h3>
            
            <div className="space-y-6">
              {/* Gerente General */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">GERENTE GENERAL</h4>
                <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                  <div>
                    <p><strong>Titular:</strong> Duarte Mauricio</p>
                    <p><strong>Reporta a:</strong> N/A (Socio Fundador)</p>
                    <p><strong>Supervisa:</strong> Gerente Comercial, Gerente Creativo</p>
                  </div>
                  <div>
                    <p><strong>Función Principal:</strong> Definir y liderar la estrategia general de Hacklayer</p>
                    <p><strong>Nivel:</strong> 80% Estratégico, 20% Táctico</p>
                  </div>
                </div>
              </div>

              {/* Gerente Comercial */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-xl font-semibold text-green-900 mb-3">GERENTE COMERCIAL Y DE OPERACIONES</h4>
                <div className="grid md:grid-cols-2 gap-4 text-green-800">
                  <div>
                    <p><strong>Titular:</strong> Duarte Mauricio</p>
                    <p><strong>Reporta a:</strong> Gerente General</p>
                    <p><strong>Áreas:</strong> Finanzas, Operaciones, Ventas</p>
                  </div>
                  <div>
                    <p><strong>Función Principal:</strong> Dirigir operaciones de ventas, logística y finanzas</p>
                    <p><strong>Nivel:</strong> Táctico y Operacional</p>
                  </div>
                </div>
              </div>

              {/* Gerente Creativo */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">GERENTE CREATIVO Y DE PRODUCTO</h4>
                <div className="grid md:grid-cols-2 gap-4 text-purple-800">
                  <div>
                    <p><strong>Titular:</strong> Angelo Motta</p>
                    <p><strong>Reporta a:</strong> Gerente General</p>
                    <p><strong>Supervisa:</strong> Community Manager</p>
                  </div>
                  <div>
                    <p><strong>Función Principal:</strong> Liderar identidad visual, diseño y marketing</p>
                    <p><strong>Áreas:</strong> Producto, Diseño, Marketing</p>
                  </div>
                </div>
              </div>

              {/* Community Manager */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="text-xl font-semibold text-yellow-900 mb-3">COMMUNITY MANAGER</h4>
                <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                  <div>
                    <p><strong>Titular:</strong> Manuel Pérez</p>
                    <p><strong>Reporta a:</strong> Gerente Creativo</p>
                    <p><strong>Supervisa:</strong> N/A</p>
                  </div>
                  <div>
                    <p><strong>Función Principal:</strong> Ejecutar estrategia de redes sociales</p>
                    <p><strong>Nivel:</strong> Operacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manual Administrativo */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">2.9. Manual Administrativo</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Proceso: Gestión de Pedidos y Envíos (PRE-E-COMMERCE)
              </h4>
              <p className="text-gray-700 mb-4">
                <strong>Responsable:</strong> Gerencia Comercial y de Operaciones (Duarte Mauricio)
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h5 className="font-semibold text-gray-900">1. RECEPCIÓN (Ventas - Instagram DM)</h5>
                  <p className="text-gray-700 text-sm">Consulta del cliente → Verificación de stock en SIA → Información de precio y datos de pago</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h5 className="font-semibold text-gray-900">2. CONFIRMACIÓN DE PAGO</h5>
                  <p className="text-gray-700 text-sm">Recepción de comprobante → Verificación de acreditación</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                  <h5 className="font-semibold text-gray-900">3. REGISTRO EN SIA (Crítico)</h5>
                  <p className="text-gray-700 text-sm">Creación de registro en PEDIDOS → Actualización de FINANZAS → Verificación de descuento automático en INVENTARIO</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                  <h5 className="font-semibold text-gray-900">4. PREPARACIÓN DE PEDIDO</h5>
                  <p className="text-gray-700 text-sm">Impresión de etiqueta → Búsqueda de producto → Control de calidad → Empaquetado</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h5 className="font-semibold text-gray-900">5. DESPACHO</h5>
                  <p className="text-gray-700 text-sm">Envío al correo → Obtención de número de seguimiento</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                  <h5 className="font-semibold text-gray-900">6. CIERRE</h5>
                  <p className="text-gray-700 text-sm">Actualización de estado → Contacto con cliente → Envío de código de seguimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusiones */}
      <section id="conclusiones" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">3. Conclusiones</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              La realización de este Trabajo Final Integrador nos permitió materializar un proyecto 
              de negocio, "Hacklayer", aplicando de manera directa las herramientas aprendidas en 
              la cátedra de Sistema de Información Administrativa.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Importancia del SIA</h3>
                <p className="text-gray-700">
                  El ejercicio de diseñar el Plan de Desarrollo y el SIA fue fundamental. 
                  Comprendimos que la principal amenaza para un emprendimiento nuevo no es 
                  solo la falta de ventas, sino el caos operativo.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Estructura Organizacional</h3>
                <p className="text-gray-700">
                  El diseño del Organigrama y el Manual de Funciones fue clave para transformar 
                  un "grupo de amigos" en una "organización", definiendo responsabilidades 
                  y jerarquías claras.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Reflexión Final</h3>
              <p className="text-blue-800 leading-relaxed">
                Concluimos que las herramientas de planificación administrativa y el diseño de 
                sistemas de información no son un lujo para grandes corporaciones, sino una 
                <strong> necesidad vital para la supervivencia, la eficiencia y la escalabilidad</strong> 
                de cualquier emprendimiento, sin importar su tamaño.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                La correcta aplicación de estas herramientas de gestión es fundamental para 
                transformar una idea en una organización funcional, ordenada y escalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Botón volver arriba */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="#" 
          className="group bg-gray-900 text-white p-4 rounded-full shadow-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          aria-label="Volver arriba"
        >
          <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/assets/logo.png"
              alt="HackLayer Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <h3 className="text-xl font-semibold">HackLayer</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Trabajo Final Integrador - Sistema de Información Administrativa
          </p>
          <p className="text-sm text-gray-500">
            Transformando ideas en organizaciones funcionales y escalables
          </p>
        </div>
      </footer>
    </div>
  );
}