import { SnackBarClasses, SnackBarVariantProps } from './SnackBar.types';

type VariantName = NonNullable<SnackBarVariantProps['variant']>;

interface VariantConfig {
  classNames: SnackBarClasses;
}

const variantConfigs: Record<VariantName, VariantConfig> = {
  default: {
    classNames: {
      root: 'bg-blue-600 text-white',
      container: 'flex items-center justify-between p-4',
      content: 'flex flex-col gap-1',
      overline: 'text-sm opacity-80',
      message: 'font-bold',
      close: 'ml-4',
    },
  },
  super_large: {
    classNames: {
      root: 'bg-gray-100 text-black',
      container: 'p-6 border border-gray-300',
      content: 'flex flex-col gap-4',
      overline: 'uppercase tracking-wide text-xs',
      message: 'text-lg font-semibold',
      close: 'text-sm underline',
    },
  },
  compact: {
    classNames: {
      root: 'bg-blue-600 text-white',
      container: 'flex items-center justify-between px-3 py-2',
      content: 'flex flex-col gap-0.5',
      overline: 'text-xs opacity-70',
      message: 'text-sm font-medium',
      close: 'ml-2 text-xs',
    },
  },
  dark: {
    classNames: {
      root: 'bg-gray-800 text-white',
      container: 'flex items-center justify-between p-4',
      content: 'flex flex-col gap-1',
      overline: 'text-sm opacity-80',
      message: 'font-bold',
      close: 'ml-4',
    },
  },
  light: {
    classNames: {
      root: 'bg-gray-50 text-gray-900',
      container: 'flex items-center justify-between p-4',
      content: 'flex flex-col gap-1',
      overline: 'text-sm opacity-70',
      message: 'font-bold',
      close: 'ml-4',
    },
  },
};

export const getVariantClassNames = (
  variant: VariantName = 'default'
): SnackBarClasses => {
  return (
    variantConfigs[variant]?.classNames ?? variantConfigs.default.classNames
  );
};

export const variants: {
  props: SnackBarVariantProps;
  classNames: SnackBarClasses;
}[] = Object.entries(variantConfigs).map(([variant, config]) => ({
  props: { variant: variant as VariantName },
  classNames: config.classNames,
}));

export default variants;
