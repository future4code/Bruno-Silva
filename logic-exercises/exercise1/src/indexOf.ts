export const indexOf = (
    source: string,
    query: string,
    sourceIndex: number = 0,
    queryIndex: number = 0,
    searchIndex: number = 0
): number => {
    if (sourceIndex > source.length) {
        return -1;
    };

    if (queryIndex >= query.length) {
        return searchIndex;
    };

    if (source[sourceIndex] === query[queryIndex]) {
        return indexOf(source, query, sourceIndex + 1, queryIndex + 1, searchIndex);
    } else {
        return indexOf(source, query, sourceIndex + 1, 0, sourceIndex + 1);
    };
};