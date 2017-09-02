export function selectBook(book) {
    // selectBook is an ActionCreator, it need to return
    // an action, an object with a type proprty
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}