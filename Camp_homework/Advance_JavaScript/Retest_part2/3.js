function thaiTypeof(variable) {
    if (typeof (variable) == 'string') {
        return 'ข้อความ';
    }
    else if (typeof (variable) == 'number') {
        return 'ตัวเลข';
    }
    else if (typeof (variable) == 'boolean') {
        return 'บูลีน';
    }
    else if (typeof (variable) == 'object') {
        return 'ออปเจ็คต์';
    } else {
        return 'อันดีฟายด์';
    }


}