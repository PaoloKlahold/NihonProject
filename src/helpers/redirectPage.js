/**Função que recebe o caminho que será adicionado ao atual */
const redirectTo = (nextPath) => {
  const currentPath = window.location.pathname;
  const newPath = `${currentPath}/${nextPath}`;
  window.location.href = newPath;
};

/**Função que substitui o caminho atual com um novo caminho base e um caminho adicional opcional */
const replacePath = (basePath, additionalPath = '') => {
  let newPath = basePath;
  if (additionalPath) {
    newPath = `${basePath}/${additionalPath}`;
  }
  window.location.href = newPath;
};

export { redirectTo, replacePath };