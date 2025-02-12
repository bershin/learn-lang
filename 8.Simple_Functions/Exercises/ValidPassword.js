// Valid password
function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}
console.log(isValidPassword('89Fjj1nms', 'dogLuvr')); // true

// Refactor the code above in below 4 ways
function isValidPassword1(password, username) {
    let shortPassword = password.length < 8;
    let spacePassword = password.indexOf(' ') !== -1;
    let containUsername = password.indexOf(username) !== -1;
    if (shortPassword || spacePassword || containUsername) {
        return false;
    }
    return true;
}

function isValidPassword2(password, username) {
    let shortPassword = password.length < 8;
    let spacePassword = password.indexOf(' ') !== -1;
    let containUsername = password.indexOf(username) !== -1;
    if (!shortPassword && !spacePassword && !containUsername) return true;
    return false;
}

function isValidPassword3(password, username) {
    let shortPassword = password.length < 8;
    let spacePassword = password.indexOf(' ') !== -1;
    let containUsername = password.indexOf(username) !== -1;
    return !shortPassword && !spacePassword && !containUsername
}

function isValidPassword4(password, username) {
    return !(password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1)
}
console.log(isValidPassword1('89FjdogLuvrj1nms', 'dogLuvr'));