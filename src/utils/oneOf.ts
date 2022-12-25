// https://www.typescriptlang.org/play?#code/LAKALgngDgpgBAVQHYEsD2SDSMIGcA8AKgHxwC8chcMAHmDEgCa6VwD8cA1jmgGasAuOEhgA3GACcA3KFAB6OXACSAWygS04uCiT0ANnpS4Gx0JFhwAojSgBDJkVIUqtekxZUOAbzgBtTNpIXDz8hAC6QoT+YXAAvnBCIuLSsuDQ8ADyIhm8RNR0DMxwXrG+YU7FoHB+ATrBEHyUEVY29oxE0XAAZHAACrYSYCi2evgASjAAxmgS7daTegCujDD4yOhYOARRSIsqAEaS5QA09Y1RmCfCYpLEdzIgpbsHRw+gOvQSvLaT8ADCtjAlRA1WqRgBYCEYAkixgD1iqQ+km+vzgABE0ABzYGg7S4DGYqEwuGgBEgd66ZE-eAAIRQsxxoKMdNmRNh8NS5ngAEFUCoRuQ4FkYDl8L4IacCacWYxyg8FKCAHpsVLTJC4IGTQFCXkofl6QU+cHauDQ2FxB5qjVwRhYnV8gUUI34u2m4kW0BWzWAgn2vWO4p4iFsmCnIy+t3m2JSOAKyQaCSgIA
// @tjjfvi from stackoverflow
// https://stackoverflow.com/a/53229567

type UnionKeys<T> = T extends T ? keyof T : never;

// Improve intellisense
type Expand<T> = T extends T ? { [K in keyof T]: T[K] } : never;

export type OneOf<T extends {}[]> = {
  [K in keyof T]: Expand<
    T[K] & Partial<Record<Exclude<UnionKeys<T[number]>, keyof T[K]>, never>>
  >;
}[number];
