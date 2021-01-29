
export const emailValidator = (email)=>{
    let re = /.+\@.+\.com/g;
    return re.test(email);
}

export const passwordValidator = (password)=>{
    return (password.length >= 6)
}

export const prettify = (string)=>{
    const ere = /("|\[|\])/g;
    const pre = /,/g;
    let x = string.replace(ere,"");
    let y= x.replace(pre,"\n");
    return y;
}

export const notGarbage = (string)=>{
    try {
        if (string.length > 0)
        return true;
    } catch (error) {
        return false
    }
    return false;
}