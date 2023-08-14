export const getOptionOfEnum = (enums: Record<string, any>) => Object.keys(enums)
  ?.filter((i) => !/^\d+$/.test(i))
  ?.map((key) => ({
    label: key,
    value: enums[key]
  }))
