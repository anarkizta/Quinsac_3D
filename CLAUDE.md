# Directrices del Proyecto
- Usa el proxy local `http://localhost:20128/v1`.
- Aplica los flujos de ingeniería senior de `%USERPROFILE%\agent-skills`.
- Consulta Graphify para mantener la integridad de dependencias.


# Directrices del Proyecto y Enlace de Herramientas

## 1. Conexión de Modelos y Gateway
- Este proyecto opera a través del proxy local en `http://localhost:20128/v1` (OmniRoute). No intentes conectar con la API oficial directamente.

## 2. Integración de Agent Skills (Addy Osmani)
- Sigue estrictamente los flujos de ingeniería senior ubicados en `%USERPROFILE%\agent-skills`.
- Aplica **Spec-Driven Development** antes de escribir código: lee la especificación de la idea (`idea.md`), planifica y luego construye.

## 3. Memoria de Código (Graphify)
- Antes de realizar modificaciones complejas en archivos cruzados, consulta la estructura del grafo de código generado localmente para mantener la integridad de las dependencias.