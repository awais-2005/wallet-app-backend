export const registerUser = (user) => {
    return new Promise((resolve) => setTimeout(() => resolve((user.name || "unknown") + " -- Successfully Registered!"), 1000));
};