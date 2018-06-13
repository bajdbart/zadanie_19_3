import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

////Action Creators////

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
		votes: 0
    }
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
	return {
        type: EDIT_COMMENT,
		id,
		text
    }
}

function thumbUpComment(id, votes) {
	return {
		type: THUMB_UP_COMMENT,
        id,
		votes: votes + 1
    }
}

function thumbDownComment(id, votes) {
	return {
		type: THUMB_DOWN_COMMENT,
        id,
		votes: votes - 1
    }
}