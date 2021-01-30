import _uniqueId from 'lodash/uniqueId';

export function createPost(text) {
    return {
        id: _uniqueId('prefix-'),
        text: text
    }
}