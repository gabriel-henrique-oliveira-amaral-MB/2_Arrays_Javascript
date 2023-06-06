// Assim como podemos fazer uma lista de texto podemos fazer uma lista de icones
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']
animaisDoAquario.push('🐚');
animaisDoAquario.push('🦞');
animaisDoAquario.splice(1,1);
animaisDoAquario.push('🐺');
animaisDoAquario.pop();
// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario.includes('🐺'))
