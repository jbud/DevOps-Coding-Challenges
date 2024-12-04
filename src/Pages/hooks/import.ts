export const useRawJS = async (filename: string) => {
    return fetch(filename).then((res) => res.text());
};
