import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// LEGACY-ONLY CONFIG
// This disables modern builds entirely
// ALL browsers get the transpiled code
// Guarantees Safari 12 compatibility

export default defineConfig({
  base: './',
  
  plugins: [
    react(),
    legacy({
      // Target Safari 12
      targets: ['safari >= 12', 'iOS >= 12'],
      
      // CRITICAL: Only build legacy chunks, NO modern chunks
      renderLegacyChunks: true,
      renderModernChunks: false,  // ← This disables modern builds
      
      // Don't include modern polyfills since we're not building modern chunks
      modernPolyfills: false,
      
      // Force transpilation
      ignoreBrowserslistConfig: true,
      
      // Polyfills for legacy bundle
      additionalLegacyPolyfills: [
        'regenerator-runtime/runtime'
      ],
      
      polyfills: [
        'es.symbol',
        'es.array.iterator',
        'es.promise',
        'es.promise.finally',
        'es.object.assign',
        'es.object.values',
        'es.object.entries',
        'es.string.includes',
        'es.array.includes',
        'es.array.find',
        'es.array.from'
      ]
    })
  ],

  esbuild: {
    target: 'es2015'
  },

  optimizeDeps: {
    esbuildOptions: {
      target: 'es2015',
      supported: { 
        'optional-chaining': false,
        'nullish-coalescing': false,
        'logical-assignment': false,
        'bigint': false,
        'top-level-await': false
      }
    },
    include: [
      '@supabase/supabase-js',
      '@supabase/storage-js'
    ]
  },

  build: {
    target: ['es2015', 'safari12'],
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
          }
        }
      }
    },
    
    minify: 'terser',
    terserOptions: {
      ecma: 2015,
      safari10: true,
      compress: {
        arrows: false,
        collapse_vars: false,
        comparisons: false,
        computed_props: false
      },
      format: {
        ecma: 2015,
        safari10: true
      },
      mangle: {
        safari10: true
      }
    },
    
    cssTarget: 'safari12',
    sourcemap: true
  }
})