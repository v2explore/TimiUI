function classnames(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export const scopedClassMaker = (prefix: string) => {
  return (name: string) => {
    return [prefix, name].filter(Boolean).join('-');
  };
};

export default classnames;
