function validCheckEmail (email) {
    var regex_is_type_email = /([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/i;
    if (!regex_is_type_email.test(email)) {
        toastr.error('이메일 타입이 아닙니다');
        return false;
    }
    return true;
}
