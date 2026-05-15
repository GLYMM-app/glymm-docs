# Security Policy

## Reporte de vulnerabilidades

No reportar vulnerabilidades por issues publicos ni discusiones abiertas.

Canales recomendados:

- responsable tecnico del proyecto
- canal interno definido por GLYMM
- correo operativo asociado a GLYMM cuando aplique

## Manejo de secretos

- no versionar credenciales, tokens, claves privadas ni secretos de publicacion
- usar GitHub Secrets o credenciales administradas por el pipeline
- si una credencial fue expuesta, rotarla de inmediato y registrar el incidente

## Dependencias

- revisar alertas de Dependabot al menos una vez por semana
- priorizar HIGH y CRITICAL
- mantener dependencias Python y workflows dentro de versiones soportadas
