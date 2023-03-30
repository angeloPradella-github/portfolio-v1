const ignoredWarnings = ["[antd: Menu]"];

const consoleWarn = console.warn;
console.warn = (...args) => {
    const message = args[0];
    if (typeof message === "string" && !ignoredWarnings.some((warning) => message.includes(warning))) {
        consoleWarn(...args);
    }
};
