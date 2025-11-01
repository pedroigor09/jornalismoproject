/**
 * Helper para obter o caminho correto dos assets em produção
 * Adiciona automaticamente o basePath quando necessário
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/jornalismoproject' : '';
  
  // Se o path já começa com o basePath, retorna como está
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // Garante que o path começa com /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}
