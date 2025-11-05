# 🚀 Guía de Deploy - HackLayer Presentation

## 📋 Pre-requisitos para Deploy

### 1. Verificar que todo funcione localmente
```bash
npm run dev
# Verificar en http://localhost:3000
```

### 2. Construir para producción
```bash
npm run build
npm start
# Verificar que la build funcione correctamente
```

## 🌐 Deploy en Vercel (Recomendado)

### Opción A: Deploy Automático desde GitHub

1. **Subir código a GitHub:**
   ```bash
   git add .
   git commit -m "feat: presentación completa HackLayer TFI"
   git push origin main
   ```

2. **Conectar con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio `hacklayer-presentation`
   - Vercel detectará automáticamente que es Next.js
   - Click en "Deploy"

3. **Configuración automática:**
   - Framework: Next.js ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
   - Install Command: `npm install` ✅

### Opción B: Deploy Manual con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Configuraciones Importantes

### Variables de Entorno (si las necesitas)
```bash
# En Vercel Dashboard > Settings > Environment Variables
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

### Dominios Personalizados
1. En Vercel Dashboard > Settings > Domains
2. Agregar tu dominio personalizado
3. Configurar DNS según las instrucciones

## 📊 Optimizaciones Aplicadas

### ✅ Performance
- Imágenes optimizadas con Next.js Image
- Compresión automática habilitada
- Headers de cache configurados
- Lazy loading implementado

### ✅ SEO
- Meta tags optimizados
- Open Graph configurado
- Sitemap automático
- Robots.txt incluido

### ✅ Seguridad
- Headers de seguridad configurados
- CSP (Content Security Policy) básico
- X-Frame-Options configurado

## 🌍 URLs de Deploy

### Desarrollo
- **Local**: http://localhost:3000

### Producción
- **Vercel**: https://tu-proyecto.vercel.app
- **Dominio personalizado**: https://tu-dominio.com

## 🔍 Verificación Post-Deploy

### Checklist de Verificación:
- [ ] ✅ Página carga correctamente
- [ ] ✅ Navegación entre secciones funciona
- [ ] ✅ Imágenes se cargan (logo, diagramas, organigrama)
- [ ] ✅ Iframe del Gantt funciona
- [ ] ✅ Responsive design en móvil
- [ ] ✅ Botón "volver arriba" funciona
- [ ] ✅ Velocidad de carga < 3 segundos

### Herramientas de Testing:
- **Lighthouse**: Verificar performance, SEO, accesibilidad
- **GTmetrix**: Analizar velocidad de carga
- **Mobile-Friendly Test**: Verificar compatibilidad móvil

## 🐛 Troubleshooting

### Problema: Imágenes no cargan
```bash
# Verificar que las imágenes estén en public/assets/
ls public/assets/
```

### Problema: Build falla
```bash
# Limpiar cache y reinstalar
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Problema: Iframe no funciona
- Verificar que `gantt_visual_remera.html` esté en `public/assets/`
- Verificar configuración de CSP si hay errores de seguridad

## 📈 Monitoreo Post-Deploy

### Analytics (Opcional)
```javascript
// Agregar Google Analytics en layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### Uptime Monitoring
- Configurar alertas en Vercel
- Usar servicios como UptimeRobot para monitoreo

## 🔄 Actualizaciones Futuras

### Workflow de Actualizaciones:
1. Hacer cambios localmente
2. Probar con `npm run dev`
3. Commit y push a GitHub
4. Deploy automático en Vercel
5. Verificar en producción

### Rollback si es necesario:
```bash
# En Vercel Dashboard > Deployments
# Click en deployment anterior > "Promote to Production"
```

---

## 🎯 Resultado Final

Tu presentación estará disponible en:
- **URL principal**: https://hacklayer-presentation.vercel.app
- **Performance**: Lighthouse score 90+
- **Responsive**: Funciona en todos los dispositivos
- **SEO**: Optimizado para buscadores

¡Listo para presentar tu Trabajo Final Integrador! 🎉