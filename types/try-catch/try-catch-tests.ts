import tryCatch from 'try-catch';

const sayHello = (name: string, greet: string = 'Hello'): string => `${greet}, ${name}`;

const [helloError, hello] = tryCatch(sayHello, 'John');
const [hiError, hi] = tryCatch(sayHello, 'John', 'Hi');

if (helloError) {
    const { message } = helloError;
}

if (hello !== undefined) {
    const letters = hello.split('');
}

// works with generic function as well
const getFirstOfArray = <T>(arr: T[]): T => arr[0];

const [numError, num] = tryCatch(getFirstOfArray, [1]);

if (numError) {
    const { message } = numError;
}

if (num !== undefined) {
    const addOne = (n: number) => n + 1;
    const two = addOne(num);
}
