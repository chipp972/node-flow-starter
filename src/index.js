// @flow

export default function(name: string, delay: number = 2000): Promise<string> {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay),
  );
}
