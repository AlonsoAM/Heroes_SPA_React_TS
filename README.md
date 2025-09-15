# Heroes App

Una aplicación moderna de gestión de héroes construida con React, TypeScript y Tailwind CSS. Esta aplicación permite explorar, buscar y gestionar información de héroes de manera intuitiva y eficiente.

## 🚀 Características

- **Interfaz Moderna**: Diseño responsive con Tailwind CSS y componentes accesibles de Radix UI
- **Navegación Fluida**: Enrutamiento con React Router para una experiencia de usuario sin interrupciones
- **TypeScript**: Tipado estático para mayor confiabilidad y mejor experiencia de desarrollo
- **Optimización**: Construcción optimizada con Vite para cargas rápidas
- **Componentes Accesibles**: Utiliza componentes de Radix UI para garantizar la accesibilidad

## 🛠️ Stack Tecnológico

- **Frontend**: React 19.1.1 + TypeScript 5.8.3
- **Estilos**: Tailwind CSS 4.1.13
- **Enrutamiento**: React Router 7.9.1
- **Iconos**: Lucide React
- **Componentes UI**: Radix UI
- **Build Tool**: Vite 7.1.2
- **Linting**: ESLint con configuración para React y TypeScript

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <repository-url>
   cd 05-heroes-app
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.template .env
   ```
   Edita el archivo `.env` con tus configuraciones específicas.

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:5173`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🏗️ Estructura del Proyecto
```

src/
├── admin/          # Módulo de administración
├── components/     # Componentes reutilizables
├── heroes/         # Módulo principal de héroes
├── lib/           # Utilidades y configuraciones
├── router/        # Configuración de rutas
├── HeroesApp.tsx  # Componente principal de la aplicación
└── main.tsx       # Punto de entrada de la aplicación
```
## 🎨 Características de UI

- **Diseño Responsive**: Adaptable a todos los tamaños de pantalla
- **Temas Consistentes**: Utiliza un sistema de design tokens con Tailwind CSS
- **Componentes Accesibles**: Implementación con Radix UI para garantizar la accesibilidad web
- **Animaciones**: Integración con tw-animate-css para transiciones fluidas
- **Iconografía**: Icons modernos con Lucide React

## 🔧 Desarrollo

### Requisitos Previos

- Node.js 18+
- npm o yarn

### Configuración del Entorno de Desarrollo

El proyecto está configurado con:

- **ESLint**: Para mantener la calidad del código
- **TypeScript**: Para tipado estático
- **Tailwind CSS**: Para estilos utilitarios
- **Vite**: Para desarrollo rápido y builds optimizadas

### Convenciones de Código

- Utiliza TypeScript para todos los nuevos archivos
- Sigue las reglas de ESLint configuradas
- Utiliza componentes funcionales con hooks
- Implementa responsive design con Tailwind CSS

## 🚢 Despliegue

1. **Build de producción**
   ```bash
   npm run build
   ```

2. **Los archivos generados estarán en la carpeta `dist/`**

3. **Para probar la build localmente**
   ```bash
   npm run preview
   ```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando React y TypeScript
